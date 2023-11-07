<script setup lang="ts">
import TheContent    from "@/components/TheContent.vue";
import BreadCrumbs   from "@/components/BreadCrumbs.vue";

</script>

<template>
  <div class="wrapper">
    <BreadCrumbs />
    <TheContent>
      <router-view />
    </TheContent>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
