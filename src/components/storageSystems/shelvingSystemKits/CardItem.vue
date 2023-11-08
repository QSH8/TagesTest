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

  data() {
    return {
      isInCart:     false,
      isInFavorite: false,
    }
  },

  mounted() {
    this.isInCart   = this.checkInStorage('cart');
    this.isInFavorite = this.checkInStorage('favorite');
  },


  computed: {
    /**
     * Проверяет имеется ли старая цена (Указывает на наличие скидки)
     */
    hasDiscount(): boolean {
      return !!this.item.price.old_price;
    },
  },

  methods: {
    /**
     * Проверяет, есть ли в корзине элемент с переданным id
     */
    checkInStorage(storageKey: string): boolean {
      if (!localStorage[storageKey]) {
        return false
      } else {
        return !!JSON.parse(localStorage[storageKey]).find((itemId: string) => itemId === this.item.id)
      }
    },

    /**
     * Заносим новое значение в корзину
     */
    setToStorage(storageKey: string): void {
      if (!localStorage[storageKey]) {
        localStorage.setItem(storageKey, JSON.stringify([this.item.id]));
      } else if (!this.checkInStorage(storageKey)) {
        let storageItem: [] | string[] = JSON.parse(localStorage[storageKey]);

        localStorage.setItem(storageKey, JSON.stringify([...storageItem, this.item.id]));
      }

      if (storageKey === 'cart')     this.isInCart     = true;
      if (storageKey === 'favorite') this.isInFavorite = true;
    },

    /**
     * Удаляет из корзины item, если он там есть (По кнопке с иконкой success (зелёная галочка)
     */
    removeFromStorage(storageKey: string): void {
      if (localStorage[storageKey] && this.checkInStorage(storageKey)) {
        let storageItem: [] | string[] = JSON.parse(localStorage[storageKey]);

        localStorage.setItem(storageKey, JSON.stringify(storageItem.filter((itemId: string) => itemId !== this.item.id)));

        if (storageKey === 'cart')     this.isInCart     = false;
        if (storageKey === 'favorite') this.isInFavorite = false;
      }
    },
  }
})
</script>
<template>
  <div class="card-list__item" :id="item.id">
    <p v-if="hasDiscount" class="sale-label">Скидка</p>
    <img class="card-list__item-img" :src="item.image.url" alt="NO IMG(">
    <div class="card-list__item-code">{{ item.code }}</div>
    <div class="card-list__item-name">{{ item.name }}</div>

    <div class="card-list__item-price">
      <span v-if="hasDiscount" class="card-list__item-price-old">{{ item.price.old_price }}</span>
      {{ '' }}
      <span class="card-list__item-price-new">{{ item.price.current_price }}</span>
    </div>

    <div class="card-item__action-buttons">

      <button v-if="isInCart" @click="removeFromStorage('cart')"
              type="button" class="card-item__action-success"
      >
        <img src="../../../assets/icons/success.svg" alt="">
       </button>
      <button v-else @click="setToStorage('cart')"
              type="button" class="card-item__action-cart"
      >
        <img src="../../../assets/icons/cart.svg" alt="">
      </button>


      <button v-if="isInFavorite" @click="removeFromStorage('favorite')"
              type="button"  class="card-item__action-favorite active"
      >
        <img src="../../../assets/icons/heart.svg" alt="">
      </button>
      <button v-else  @click="setToStorage('favorite')"
              type="button" class="card-item__action-favorite"
      >
        <img src="../../../assets/icons/heart.svg" alt="">
      </button>
    </div>
  </div>
</template>

<style scoped>
  .card-list__item {
    position: relative;
    width: 336px;
    min-height: 352px;
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
    padding: 9px 49px 23px 49px;
    min-height: 269px;
  }

  .card-list__item-code, .card-list__item-price-old {
    font-family: SF-UI-Text-regular;
    min-height: 14px;
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

  .card-item__action-cart, .card-item__action-success {
    margin-right: 11px;
  }
  .card-item__action-favorite.active {
    border-radius: 50%;
    box-shadow: rgba(0,0,0,0.5) 0 0 5px 1px;
  }
</style>
