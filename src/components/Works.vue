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
          />
        </div>
        <!-- <button v-on:click="modalOpen(workListDetail)">aaaa</button> -->

        <!-- modal -->
        <modal v-bind="postItem" v-show="showContent" v-on:close="modalClose" />
      </li>
    </ul>
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
      workList: workList
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
