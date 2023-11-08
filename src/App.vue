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
    padding: 32px 108px 0 108px;
  }
}

@media (max-width: 992px) {
  .wrapper {
    display: flex;
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
