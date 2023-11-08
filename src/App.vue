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
  padding-top: 32px;
  min-width: 380px;
  max-width: 1488px;
}


@media (max-width: 1700px) {
  .wrapper {
    padding: 32px 0 0 216px;
  }
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
