<template>
  <div id="overlay" class="ly_overlay">
    <div id="content" class="ly_modalContent">
      <!-- <img v-bind:src="val.imageName" v-bind:alt="val.id" /> -->
      <button @click="$emit('close')">閉じる</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['val']
}
</script>
