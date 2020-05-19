<template>
  <section class="bl_mainContents">
    <ul class="bl_mediaList">
      <li
        v-for="workListDetail in workList"
        :key="workListDetail.id"
        class="bl_mediaListItem"
      >
        <!-- image 表示 -->
        <div class="bl_media_imgWrapper">
          <img
            v-bind:src="workListDetail.imageName"
            v-bind:alt="workListDetail.id"
            @click="modalOpen(workListDetail)"
          />
        </div>
      </li>
    </ul>

    <!-- modal -->
    <transition>
      <modal :val="postItem" v-show="showContent" @close="modalClose" />
    </transition>
  </section>
</template>

<script>
import workList from './../assets/workList.json'
import Modal from './parts/Modal.vue'

export default {
  components: {
    Modal
  },
  data () {
    return {
      showContent: false,
      workList: workList,
      postItem: ''
    }
  },
  methods: {
    modalOpen (workListDetail) {
      this.showContent = true
      this.postItem = workListDetail
    },
    modalClose () {
      this.showContent = false
    }
  }
}
</script>

<style lang="scss">
// modal表示の時のアニメーション
.v-enter-active,
.v-leave-active {
  transition: opacity 200ms ease-out;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
