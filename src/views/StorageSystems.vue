<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "StorageSystems",
})
</script>
<template>
  <h1>
    Системы хранения
  </h1>

  <h3>
    Реализовано подобие роутинга с визуальными breadcrubms
  </h3>

  <router-link to="/systems/shelvingSystemKits">Переход на <b>Комплекты стеллажных систем</b></router-link>
</template>

<style scoped>

</style>
