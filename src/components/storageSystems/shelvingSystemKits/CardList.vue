<script lang="ts">
import {defineComponent} from "vue";
import CardItem from "@/components/storageSystems/shelvingSystemKits/CardItem.vue";
import {mapGetters} from "vuex";

export default defineComponent({
  name: 'CardList',
  components: {CardItem},

  computed: {
    ...mapGetters({
      items:     'products/getAllItems',
      materials: 'products/getAllMaterials',
      sort:     'products/getSort',
      filter:   'products/getFilter',
    }),

    proccessedItems(): Array<object> {
      let sortList:     Array<object> = this.getSortItems(this.items);
      let filteredList: Array<object> = this.getFilteredItems(sortList);

      return filteredList;
    }
  },

  methods: {
    /**
     * Применение сортировки, указанной во Vuex
     * @param sort
     */
    getSortItems(items: Array<object>): Array<object> {
      let sort:  string        = this.sort('price');

      if (sort === 'ascend') {
        return [...items].sort((a, b) => a.price.current_price - b.price.current_price);
      }

      if (sort === 'descend') {
        return [...items].sort((a, b) => b.price.current_price - a.price.current_price);
      }

      return items;
    },

    /**
     * Применение сортировки, указанной во Vuex
     * @param filter
     */
    getFilteredItems(items: Array<object>): Array<object> {
      let filter: number = this.filter('material');

      return items.filter(item => item.material === filter);
    }
  }



})
</script>

<template>
  <main class="card-list">
    <template v-for="(item, key) in proccessedItems" :key="key">
      <CardItem :item="item"/>
    </template>
  </main>
</template>

<style scoped>
  .card-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px
  }
</style>
