<template>
  <HistoryItem>
    <template #img>
      <img src="../assets/mainPhoto.png" class="img-fluid" />
    </template>
    <template #title> Title 1 </template>
    <template #content> content content </template>
  </HistoryItem>

  <p class="historylist-arrow">
    <span class="material-symbols-outlined"> arrow_forward </span>
  </p>

  <HistoryItem>
    <template #img>
      <img src="../assets/mainPhoto.png" class="img-fluid" />
    </template>
    <template #title> Title 2 </template>
    <template #content> content content </template>
  </HistoryItem>

  <p class="historylist-arrow">
    <span class="material-symbols-outlined"> arrow_forward </span>
  </p>

  <HistoryItem>
    <template #img>
      <img src="../assets/mainPhoto.png" class="img-fluid" />
    </template>
    <template #title> Title 3 </template>
    <template #content> content content </template>
  </HistoryItem>

  <p class="historylist-arrow">
    <span class="material-symbols-outlined"> arrow_forward </span>
  </p>

  <HistoryItem>
    <template #img>
      <img src="../assets/mainPhoto.png" class="img-fluid" />
    </template>
    <template #title> Title 4 </template>
    <template #content> content content </template>
  </HistoryItem>
</template>

<script setup lang="ts">
import HistoryItem from './HistoryItem.vue'
</script>

<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

.historylist-arrow {
  font-size: 24px;
  @extend .d-inline-flex;
  @extend .m-0;
}
</style>
