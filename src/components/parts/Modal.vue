<template>
  <div id="overlay" class="ly_overlay">
    <div ref="content" id="content" class="ly_modalContent">
      <h3 name="TITLE" ref="title" class="bl_modalContent_title">
        {{ val.title }}
      </h3>
      <simplebar
        data-simplebar-auto-hide="false"
        class="bl_modalContent"
        v-bind:style="{ height: modalContetHeight + 'px' }"
      >
        <div class="bl_modalContent_image">
          <img v-bind:src="val.imageName" v-bind:alt="val.id" />
        </div>
        <div class="bl_modalContent_body">
          <ol class="bl_modalContent_list">
            <li
              v-for="trackListItem in val.trackList"
              :key="trackListItem.trackName"
              class="bl_modalContent_listItem"
            >
              <p>
                {{ trackListItem.trackName }}
              </p>
              <p v-if="trackListItem.isOriginalSongFlag === true">
                (原曲 : {{ trackListItem.originalSongName }})
              </p>
            </li>
          </ol>
        </div>
      </simplebar>
      <button
        id="js_buttonHeight"
        class="bl_buttonModalClose"
        name="BUTTON"
        ref="button"
        @click="$emit('close')"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
import simplebar from 'simplebar-vue'
import ResizeObserver from 'resize-observer-polyfill'
import 'simplebar/dist/simplebar.min.css'

export default {
  name: 'Modal',
  props: ['val'],
  components: {
    simplebar
  },
  data () {
    return {
      observer: null,
      isShown: false,
      contentHeight: 0,
      titleHeight: 0,
      buttonHeight: 0,
      modalContetHeight: 0
    }
  },
  // isShownの値をwatchで監視
  watch: {
    isShown () {
      this.contentHeight = this.$refs.content.clientHeight - 16 * 2
      this.titleHeight = this.$refs.title.clientHeight + 2
      this.buttonHeight = this.$refs.button.clientHeight + 2 * 2
      // スクロールさせるコンテンツの高さを算出
      this.modalContetHeight =
        this.contentHeight - (this.titleHeight + this.buttonHeight + 16)
    }
  },
  // 表示・非表示された時にisShownを変更する処理を設定
  mounted () {
    this.observer = new ResizeObserver(entries => {
      this.isShown = !this.isShown
    })
    this.observer.observe(this.$refs.content)
  },
  beforeDestroy () {
    this.observer.disconnect(this.$refs.content)
  }
}
</script>
