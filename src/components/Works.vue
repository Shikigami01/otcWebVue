<template>
  <section class="bl_mainContents">
    <ul class="bl_mediaList">
      <li
        v-for="workListDetail in workList"
        :key="workListDetail.id"
        class="bl_mediaListItem"
      >
        <div class="bl_media_imgWrapper">
          <img
            v-bind:src="workListDetail.imageName"
            v-bind:alt="workListDetail.id"
          />
        </div>

        <!-- モーダルウィンドウで表示した方がいいか、別ページ遷移がいいか悩み中。 -->
        <!-- 個人的にはモーダルにしたい。プルリク頼む〜〜〜 -->
        <div class="bl_media_overlayText">
          <p>
            More...
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import workList from './../assets/workList.json'

export default {
  data () {
    return {
      workList: workList
    }
  }
}
</script>
