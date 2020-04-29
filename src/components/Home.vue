<template>
  <section class="bl_mainContents">
    <div class="bl_mainVisualWrap">
      <div class="bl_mainVisual">
        <img src="./../assets/image/mainVisual.svg" alt="main_visual" />
      </div>
    </div>
  </section>
</template>

<script>
// 最初に、ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
const vh = window.innerHeight * 0.01
// カスタム変数--vhの値をドキュメントのルートに設定
document.documentElement.style.setProperty('--vh', `${vh}px`)
</script>
