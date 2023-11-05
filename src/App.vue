<script setup lang="ts">
import TheNavigation from "@/components/TheNavigation.vue";
import TheContent    from "@/components/TheContent.vue";

</script>

<template>
  <div class="wrapper">
    <TheNavigation />
    <TheContent>
      <router-view />
    </TheContent>
  </div>
</template>

<style scoped>
.wrapper {
  padding-right: 216px;
  padding-left:  216px;
}
@media (min-width: 1024px) {

}
</style>
