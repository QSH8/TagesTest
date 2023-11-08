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
  padding: 32px 0 0 216px;
  width: 100%;
  min-width: 380px;
}

@media (max-width: 992px) {
  .wrapper {
    display: flex;
    padding: 32px 0 0 0;
    justify-content: center;
    flex-direction: column;
  }
}
@media (max-width: 576px) {
  .wrapper {
    padding: 32px 0 0 0;
  }
}


</style>
