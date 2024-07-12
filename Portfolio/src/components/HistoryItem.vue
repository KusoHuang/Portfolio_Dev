
<template>
    <div class="leading-container">
        <div class="image-container" >
            <slot name="img"></slot>
        </div>
        <div class="ms-3 d-flex flex-column justify-content-center text-start">
            <h4 class="m-0">
                <slot name="title"></slot>
            </h4>
            <p class="m-0">
                <slot name="content"></slot>
            </p>
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">

@import '../../node_modules/bootstrap/scss/bootstrap.scss';

.leading-container {
  @extend .d-inline-flex;
  @extend .p-3;
  @extend .border;
  @extend .rounded-3;
  @extend .m-3;
  @extend .align-items-center;
  width: 300px;
}

.image-container {
    width: 40px;
}

</style>