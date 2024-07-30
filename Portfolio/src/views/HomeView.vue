<script setup lang="ts">
import History from '../components/History.vue'
import WorkItem from '../components/WorkItem.vue'
</script>

<template>
  <main>
    <!-- 頂部區塊 -->

    <div class="stack-container">
      <!-- 下層 -->
      <div class="container py-5 opacity-50">
        <div class="row h-100 justify-content-center">
          <img src="/IndexAvatar.png" class="col-4 object-fit-cover" />
        </div>
      </div>
      <!-- 上層 -->
      <div class="container d-flex flex-column justify-content-end pb-5">
        <h1 class="display-1 text-center">YueZhe Huang</h1>
        <h1 class="text-primary text-center">UI/UX Designer・UI Engineer</h1>
        <div class="d-flex justify-content-center mt-3">
          <a class="btn btn-outline-light mx-1" href="#">Button 1</a>
          <a class="btn btn-outline-light mx-1" href="#">Button 2</a>
        </div>
      </div>
    </div>

    <!-- Intro Section -->
    <div class="container py-5 text-center">
      <div class="row justify-content-center">
        <p class="lead mb-5 col-8">
          👋🏽 Hi, 我是 YuZhe，
          <br /><br />
          從事 UI/UX 領域的設計師，目前有 7 年的工作經驗。專攻 APP、Web 等多平台產品的系統式 UI
          設計以及維護，以及產品 UX 流程設計，主要工作平台為 Figma。
          <br /><br />
          工程面上與 iOS、Android、Web 工程師皆有長期合作經驗，HTML、CSS（包含 Sass/SCSS）
          皆有概念與自主編寫的能力，Web 平台上經手過完全熟悉的 UI library 有 Bootstrap、React MUI
          等，並有 Vue.js 的切版經驗。
          <br /><br />
          建制過個別或包含 App / Web 雙平台數個產品線的設計系統與 UI library，B2B、B2C
          產品皆有經手過，也有過各類一頁式網站設計專案經驗。
        </p>
        <h1 class="col-12 mb-3">History Title</h1>
        <!-- History -->
        <div class="col-8">
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
        <div class="col-4">
          <WorkItem Link="/about" ImageSrc="/testImage.jpg">
            <template #Title>Title</template>
            <template #Content>Content</template>
          </WorkItem>
        </div>
        <div class="col-4">
          <WorkItem Link="/about" ImageSrc="/testImage.jpg">
            <template #Title>Title</template>
            <template #Content>Content</template>
          </WorkItem>
        </div>
        <div class="col-4">
          <WorkItem Link="/about" ImageSrc="/testImage.jpg">
            <template #Title>Title</template>
            <template #Content>Content</template>
          </WorkItem>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

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
  // opacity: 0.4;
  height: 100%;
}

.stack-container .container:nth-child(2) {
  top: 0px;
  z-index: 2;
}
</style>
