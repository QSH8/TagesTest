<script lang="ts">
import {defineComponent} from "vue";
import CardItem from "@/components/storageSystems/shelvingSystemKits/CardItem.vue";

export default defineComponent({
  name: 'CardList',
  components: {CardItem},
})
</script>

<template>
  <main class="card-list">
    <CardItem :item="{}"/>
    <CardItem :item="{}"/>
    <CardItem :item="{}"/>
    <CardItem :item="{}"/>
    <CardItem :item="{}"/>
    <CardItem :item="{}"/>
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
