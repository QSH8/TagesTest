<script lang="ts">
import {defineComponent} from "vue";
import {mapGetters, mapMutations} from "vuex";

export default defineComponent({
  name: 'SortItem',

  props: {
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    }
  },

  methods: {
    ...mapMutations({
      setSort: 'products/SET_SORT'
    }),
  },

  computed: {
    ...mapGetters({
      getSort: "products/getSort",
    }),

    sort: {
      get(): string {
        const priceSort: string = this.getSort('price');
        return priceSort;
      },

      set(new_sort: string) {
        this.setSort({id: 'price', value: new_sort});
      }
    }
  }
})
</script>

<template>
  <div class="sort__item">
    <p class="sort__item-title">{{ title }}</p>
    <select name="sort__item-select" id="sort__item-select" v-model="sort">
      <option v-for="(value, key) in options" :key="key" :value="value.id">{{ value.name }}</option>
    </select>
  </div>
</template>

<style scoped>
.sort__item {
  width: 288px;
  padding-bottom: 18px;
}

.sort__item-title {
  font-family: SF-ProDisplay-regular;
  font-size: 12px;
  color: #4F4F4F;
  margin: 0 0 6px 16px;
}

#sort__item-select {
  width: 100%;
  height: 40px;
  font-family: SF-ProDisplay-regular;
  font-size: 14px;
  line-height: 150%;
  padding: 9px 0 10px 16px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  color: #000000;
  background-color: #F2F2F2;
  background-image: url("@/assets/icons/select_icon.svg");
  background-repeat: no-repeat, repeat;
  background-position: right 19.3px top 50%, 0 0;

  border: none;
}

#sort__item-select::-ms-expand {
  display: none;
}

#sort__item-select:focus {
  outline: none;
}
</style>
