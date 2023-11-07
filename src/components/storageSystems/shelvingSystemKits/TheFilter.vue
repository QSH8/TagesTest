<script lang="ts">
import {defineComponent} from "vue";
import FilterItem from "./FilterItem.vue";
import SortItem   from "./SortItem.vue";

import {mapGetters} from "vuex";

export default defineComponent({
  name: 'TheFilter',

  components: {
    FilterItem,
    SortItem
  },

  computed: {
    ...mapGetters({
      items:     'products/getAllItems',
      materials: 'products/getAllMaterials',
    }),
  },

})
</script>

<template>
  <div class="filter">
    <SortItem
      title="Сортировать по: "
      :options="[
        {
          id: 'ascend',
          name:  'Цена по возрастанию',
        },
        {
          id: 'descend',
          name:  'Цена по убыванию',
        },
      ]"
    />
    <FilterItem
      title="Материал: "
      :options="materials"
  />
  </div>
</template>

<style scoped>
 .filter {
   display: flex;
   flex-direction: row;
   justify-content: start;
   align-items: center;
   margin-bottom: 23px;
   gap: 24px;

 }

 @media  (max-width: 992px) {
   .filter {
     flex-direction: column;
   }
 }
</style>
