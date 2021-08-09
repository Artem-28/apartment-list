<template>
  <div id="app">
    <main-layout>
      <app-apartment-list />
    </main-layout>
  </div>
</template>

<style lang="scss">
</style>
<script>
import MainLayout from "./layouts/MainLayout";
import AppApartmentList from "./components/ApartmentList/AppApartmentList";
export default {
  components: {AppApartmentList, MainLayout}
}
</script>
