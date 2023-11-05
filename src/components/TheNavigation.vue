<script setup lang="ts">

</script>

<template>
  <nav class="navigation">
    <router-link class="navigation__link" to="/">Главная</router-link>
    <router-link class="navigation__link" to="/systems">Системы хранения</router-link>
  </nav>
</template>


<style scoped>
  .navigation {

  }

  .navigation__link {
    margin: 0 5px 0 0;

  }

  .navigation__link:after {
    content: ' /';
  }
</style>
