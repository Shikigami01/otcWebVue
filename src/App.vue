<template>
  <div id="app" class="ly_body">
    <header class="ly_header">
      <div class="ly_header_inner">
        <div class="bl_header_logo">
          <router-link to="/">
            <img src="./assets/image/logo.svg" alt="logo" />
          </router-link>
        </div>
        <nav class="bl_header_nav">
          <ul class="bl_header_navList">
            <li class="bl_header_navListItem">
              <router-link to="/">Home</router-link>
            </li>
            <li class="bl_header_navListItem">
              <router-link to="/about">About</router-link>
            </li>
            <li class="bl_header_navListItem">
              <router-link to="/works">Works</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <transition name="content">
        <router-view />
      </transition>
    </main>
    <footer class="ly_footer">
      <div class="ly_footer_inner">
        &copy;&nbsp;2020&nbsp;Over&nbsp;The&nbsp;Coffee
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
// ルーティング要素のアニメーション
.content-enter,
.content-leave-to {
  opacity: 0;
}
.content-enter-active {
  transition: opacity 300ms 300ms;
}
.content-leave-active {
  transition: opacity 300ms;
}
</style>

<script></script>
