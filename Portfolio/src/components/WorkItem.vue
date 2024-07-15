<template>
  <RouterLink :to="Link" class="text-decoration-none text-body">
    <img :src="ImageSrc" class="img-fluid" />
    <h3 class="text-center">
      <slot name="Title">Work title</slot>
    </h3>
    <p class="text-center">
      <slot name="Content">Describtion content</slot>
    </p>
  </RouterLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  Link: string
  ImageSrc: string
}>()
</script>

<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

.RouterLink {
  text-decoration: none;
}
</style>
