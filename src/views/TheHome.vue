<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "TheHome",
})
</script>
<template>
  <h1>
    Главная
  </h1>

  <h3>
    Реализовано подобие роутинга с визуальными breadcrubms
  </h3>

  <router-link to="/systems">Переход на <b>Системы Хранения</b></router-link>
</template>


<style scoped>

</style>
