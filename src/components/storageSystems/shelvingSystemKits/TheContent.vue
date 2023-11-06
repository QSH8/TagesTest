<script lang="ts">
import {defineComponent} from "vue";
import CardList from "@/components/storageSystems/shelvingSystemKits/CardList.vue";

export default defineComponent({
  name: 'TheContent',
  components: {CardList},
})
</script>

<template>
  <main class="main">
    <CardList />
  </main>
</template>

<style scoped>
  .main {

  }
</style>
