<script lang="ts">
import {defineComponent} from "vue";
import FilterItem from "@/components/storageSystems/shelvingSystemKits/FilterItem.vue";

export default defineComponent({
  name: 'TheFilter',
  components: {FilterItem},

})
</script>

<template>
  <div class="filter">
    <FilterItem
      title="Сортировать по: "
    />
    <FilterItem
      title="Материал: "
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
</style>
