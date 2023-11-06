<script lang="ts">
import {defineComponent} from "vue";
import TheFilter  from "@/components/storageSystems/shelvingSystemKits/TheFilter.vue";
import TheHeader  from "@/components/storageSystems/shelvingSystemKits/TheHeader.vue";
import TheContent from "@/components/storageSystems/shelvingSystemKits/TheContent.vue";

export default defineComponent({
  name: 'TheBody',
  components: {TheContent, TheFilter, TheHeader},
})
</script>

<template>
  <TheHeader title="Комплекты стеллажных систем"/>
  <TheFilter />
  <TheContent />
</template>


<style scoped>

</style>
