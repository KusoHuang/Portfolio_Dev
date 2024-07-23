<script setup lang="ts">
import History from '../components/History.vue'
import WorkItem from '../components/WorkItem.vue'
</script>

<template>
  <main>
    <!-- 頂部區塊 -->

    <div class="bg-primary stack-container">
      <!-- 下層 -->
      <div class="bg-warning container py-3">
        <div class="row h-100 justify-content-center">
          <img src="/testImage.jpg" class="col-6 object-fit-cover" />
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
  opacity: 0.4;
  height: 100%;
}

.stack-container .container:nth-child(2) {
  top: 0px;
  z-index: 2;
}
</style>
