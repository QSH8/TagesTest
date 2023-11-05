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
  padding: 32px 216px 0 216px;
}
@media (min-width: 1024px) {

}
</style>
