<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'TheHeader',

  props: {
    title: {
      type: String,
      required: true,
    },
  },

})
</script>

<template>
  <header class="header">
    <p class="header__title">{{ title }}</p>
  </header>
</template>

<style scoped>
.header {
  padding: 40px 0 32px 0 ;
}

.header__title {
  font-family: SF-ProDisplay-regular;
  font-size: 36px;
  font-weight: bold;
  line-height: 48px;
}
</style>
