<template>
  <a :href="Link">
    <img :src="ImageSrc" class="img-fluid" />
    <h3>
      <slot name="Title">Work title</slot>
    </h3>
    <p>
      <slot name="Content">Describtion content</slot>
    </p>
  </a>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue'

const props = defineProps<{
  Link: string
  ImageSrc: string
}>()
</script>

<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
