<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: "CardItem",

  props: {
    item: {
      type: Object,
      required: true,
    }
  },

})
</script>
<template>
  <div class="card-list__item">
    <p class="sale-label">Скидка</p>
    <img class="card-list__item-img" src="/public/images/img1.png" alt="NO IMG(">
    <div class="card-list__item-code">L244WH</div>
    <div class="card-list__item-name">Ручка дверная</div>

    <div class="card-list__item-price">
      <span class="card-list__item-price-old">400P</span>
      {{ '' }}
      <span class="card-list__item-price-new">355P</span>
    </div>

    <div class="card-item__action-buttons">
      <button class="card-item__action-cart">
        <img src="../../../assets/icons/cart.svg" alt="">
      </button>
      <button class="card-item__action-favorite">
        <img src="../../../assets/icons/heart.svg" alt="">
      </button>
    </div>
  </div>
</template>

<style scoped>
  .card-list__item {
    position: relative;
    width: 336px;
    outline: 1px solid #EEEEEE;
  }

  .sale-label {
    font-family: SF-ProDisplay-regular;
    position: absolute;
    width: fit-content;
    color: white;
    font-size: 14px;
    letter-spacing: 0.5px;
    line-height: 130%;
    margin: 8px 0 0 0;
    padding: 3px 16px;
    z-index: 1;
    background-color: #EB5757;
  }

  .card-list__item-img {
    padding: 9px 49px 24px 49px;
  }

  .card-list__item-code, .card-list__item-price-old {
    font-family: SF-UI-Text-regular;
    width: fit-content;
    font-size: 10px;
    line-height: 140%;
    width: fit-content;
    letter-spacing: 1px;
    margin-left: 12px;
    margin-bottom: 6px;
    color: #888888;
  }

  .card-list__item-name, .card-list__item-price-new {
    font-family: SF-UI-Text-medium;
    font-size: 16px;
    line-height: 140%;
    margin-left: 12px;
    margin-bottom: 10px;
    color: #000000;
  }

  .card-list__item-price {
    width: fit-content;
    margin-left: 12px;
    margin-bottom: 10px;
  }

  .card-list__item-price-old {
    text-decoration: line-through;
    margin-left: 0;
    font-size: 16px;
  }

  .card-list__item-price-new {
    margin-left: 0;
  }

  .card-item__action-buttons {
    position: absolute;
    bottom: 4px;
    right: 14px;
  }

  .card-item__action-cart {
    margin-right: 11px;
  }
</style>
