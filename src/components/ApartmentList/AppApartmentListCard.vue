<template>
  <div class="container-card">
    <div class="card">
      <div class="card__preview">
        <img :src="apartment.preview" />
      </div>
      <div class="card__title">
        <h4>{{ apartment.title }}</h4>
      </div>
      <div class="card__buttons">
        <button class="like" @click="clickLike(apartment.id)">
          <strong>Нравится:</strong>
          <img  :src="require(apartment.like ? `@/assets/icons/liketrue.png` : `@/assets/icons/likefalse.png`)">
        </button>
      </div>
      <div class="card__content">
        <ul class="card__content__list">
          <li>
            <strong>Колличество комнат: </strong>
            <span>{{ apartment.rooms}}</span>
          </li>
          <li>
            <strong>Адрес: </strong>
            <span>
              {{apartment.address.fullAddress()}}
            </span>
          </li>
          <li>
            <strong>Продавец: </strong>
            <span>{{apartment.vendor.fullName()}}</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AppApartmentListCard",
  props: ['apartment'],
  data() {
    return {
      details: false,
      buttonOptions: {
        text: 'Подробнее',
        icon: 'arrow.png',
      }
    }
  },
  methods: {
    ...mapActions({
      likeApartment: "Apartment/likeApartment"
    }),
    async clickLike(id) {
      await this.likeApartment(id)
      console.log(id)
    }
  }
}
</script>

<style lang="scss" scoped>
.container-card {
  width: 100%;
  height: 100%;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.card:hover {
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.29);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.29);
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.5s;
  &__buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 0 10px;
  }
  &__preview {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
    display: flex;
    justify-content: center;
    padding: 10px;
    h4 {
      margin: 0;
      padding: 0;
    }
  }
  &__content {
    width: 100%;
    transition: height 0.5s;
    &__list {
      padding: 10px;
      margin: 0;
    }
    li {
      list-style-type: none;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding-top: 10px;
      font-size: 12px;
      strong {
        margin-right: 5px;
      }
      span {
        margin-top: 5px;
      }
    }
  }
  .like {
    font-family: 'Comfortaa', sans-serif;
    display: flex;
    align-items: center;
    transition: all 0.5s;
    cursor: pointer;
    border: none;
    background: none;
    img {
      margin-left: 5px;
      width: 30px;
    }
  }
  .like:hover {
    color: #3498DB;
  }
}
</style>
