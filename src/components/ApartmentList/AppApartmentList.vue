<template>
  <div class="container">
    <h1>Список квартир</h1>
    <app-loader v-if="loading" />
    <div class="apartment-list">
      <div
          v-for="apartment in apartmentList"
          :key="apartment.id"
          class="apartment-list__item"
      >
        <app-apartment-list-card :apartment="apartment"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppApartmentListCard from "./AppApartmentListCard";
import {mapActions} from 'vuex'
import AppLoader from "../AppLoader";
export default {
  name: "AppApartmentList",
  components: {AppLoader, AppApartmentListCard},
  data() {
    return {
      loading: false
    }
  },
  computed: {
    apartmentList() {
      return this.$store.state.Apartment.list
    }
  },
  methods: {
    ...mapActions({
      getList: "Apartment/getApartmentList"
    }),
  },
  async mounted() {
    this.loading = true
    await this.getList()
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 50px;
  width: 100%;
  height: 100%;
  h1 {
    width: 100%;
    text-align: center;
    color: #fff;
    margin-bottom: 50px;
  }
}
.apartment-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  &__item {
    max-width: 320px;
    width: 100%;
    padding: 10px;
  }
}
</style>
