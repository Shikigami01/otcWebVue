<template>
  <div id="app">
    <header class="ly_header">
      <div class="">
        <img src="" alt="" />
      </div>
      <nav>
        <ul>
          <router-link to="/" tag="li">Home</router-link>
          <router-link to="/about" tag="li">About</router-link>
          <router-link to="/works" tag="li">Works</router-link>
        </ul>
      </nav>
    </header>
    <router-view />
  </div>
</template>
