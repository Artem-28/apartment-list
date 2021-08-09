<template>
  <div class="main-layout">
    <div class="main-layout__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
name: "MainLayout"
}
</script>

<style lang="scss" scoped>
.main-layout {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  font-family: 'Comfortaa', sans-serif;
  background: #afd9f7;
  background: -webkit-linear-gradient(to top, #afd9f7, #459cf7);
  background: linear-gradient(to top, #afd9f7, #459cf7);
  &__content {
    width: 100%;
    height: 100%;
    padding: 0 calc(50% - 550px);
  }
}
</style>
