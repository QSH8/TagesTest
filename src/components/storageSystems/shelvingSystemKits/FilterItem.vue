<script lang="js">
import {defineComponent} from "vue";
import {mapGetters, mapMutations} from "vuex";

export default defineComponent({
  name: 'FilterItem',

  computed: {
    ...mapGetters({
      getFilter: "products/getFilter",
    }),

    filter: {
      get() {
        return this.getFilter('material')
      },

      set(new_filter) {
        this.setFilter({id: 'material', value: new_filter})
      }
    }
  },


  methods: {
    ...mapMutations({
      setFilter: 'products/SET_FILTER'
    }),
  },



  props: {
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    }
  },
})
</script>

<template>
  <div class="filter__item">
    <p class="filter__item-title">{{ title }}</p>
    <select name="filter__item-select" id="filter__item-select" v-model="filter">
      <option v-for="(value, key) in options" :key="key" :value="value.id">{{ value.name }}</option>
    </select>
  </div>
</template>

<style scoped>
 .filter__item {
   width: 288px;
   padding-bottom: 18px;
 }

 .filter__item-title {
   font-family: SF-ProDisplay-regular;
   font-size: 12px;
   color: #4F4F4F;
   margin: 0 0 6px 16px;
 }

 #filter__item-select {
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

 #filter__item-select::-ms-expand {
  display: none;
 }

 #filter__item-select:focus {
   outline: none;
 }
</style>
