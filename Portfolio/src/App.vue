<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import History from './components/History.vue'
import WorkItem from './components/WorkItem.vue'
</script>

<template>
  <!-- 頂部區塊 -->

  <div class="bg-primary stack-container">
    <!-- 下層 -->
    <div class="bg-warning container py-3">
      <div class="row h-100 justify-content-center">
        <img src="./assets/testImage.jpg" class="col-6 object-fit-cover" />
      </div>
    </div>
    <!-- 上層 -->
    <div class="bg-danger container d-flex flex-column justify-content-end pb-5">
      <h1 class="bg-white text-center">Epic Name</h1>
      <h3 class="bg-white text-center">Subtitle</h3>
      <div class="bg-white d-flex justify-content-center mt-3">
        <a class="btn" href="#">Button 1</a>
        <a class="btn" href="#">Button 2</a>
      </div>
    </div>
  </div>

  <!-- Intro Section -->
  <div class="bg-secondary container py-5 text-center">
    <div class="row justify-content-center">
      <h1 class="col-12 mb-3">History Title</h1>
      <!-- History -->
      <div class="bg-white col-8">
        <!-- Insert-history -->
        <History></History>
      </div>
    </div>
  </div>

  <div class="bg-warning container py-5">
    <h1 class="text-center">Work Title</h1>
    <!-- Work list -->
    <div class="row justify-content-center">
      <!-- Insert work -->
      <WorkItem Link="#" ImageSrc="./assets/mainPhoto.png">
        <template #Title>Title</template>
        <template #Content>Content</template>
      </WorkItem>
      <a href="#" style="width: 100px">
        <img src="./assets/testImage.jpg" class="img-fluid" />
        <h3>Title</h3>
        <p>Content</p>
      </a>
    </div>
  </div>

  <!-- Vue 原本的內容 -->
  <!-- <header class="container mt-5">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="container" /> -->
  <!-- Vue 原本的內容 -->
</template>

<style lang="scss" scoped>
// 頂部區塊堆疊 Scss
.stack-container {
  position: relative;
  height: 100vh;
}

.stack-container .container {
  position: absolute;
  // top: 0;
  left: 0;
  right: 0;
  opacity: 0.4;
  height: 100%;
}

.stack-container .container:nth-child(2) {
  top: 0px;
  z-index: 2;
}

// Vue 原本的內容
// header {
//   line-height: 1.5;
//   max-height: 100vh;
// }

// .logo {
//   display: block;
//   margin: 0 auto 2rem;
// }

// nav {
//   width: 100%;
//   font-size: 12px;
//   text-align: center;
//   margin-top: 2rem;
// }

// nav a.router-link-exact-active {
//   color: var(--color-text);
// }

// nav a.router-link-exact-active:hover {
//   background-color: transparent;
// }

// nav a {
//   display: inline-block;
//   padding: 0 1rem;
//   border-left: 1px solid var(--color-border);
// }

// nav a:first-of-type {
//   border: 0;
// }

// @media (min-width: 1024px) {
//   header {
//     display: flex;
//     place-items: center;
//     padding-right: calc(var(--section-gap) / 2);
//   }

//   .logo {
//     margin: 0 2rem 0 0;
//   }

//   header .wrapper {
//     display: flex;
//     place-items: flex-start;
//     flex-wrap: wrap;
//   }

//   nav {
//     text-align: left;
//     margin-left: -1rem;
//     font-size: 1rem;

//     padding: 1rem 0;
//     margin-top: 1rem;
//   }
// }
</style>
