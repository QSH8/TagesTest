<script lang="ts">
import {defineComponent} from "vue";
import TheFilter  from "./TheFilter.vue";
import TheHeader  from "./TheHeader.vue";
import TheContent from "./TheContent.vue";
import TheFooter  from "./TheFooter.vue";

import {mapActions, mapGetters} from "vuex";

export default defineComponent({
  name: 'TheBody',

  components: {
    TheFooter,
    TheContent,
    TheFilter,
    TheHeader
  },

  beforeMount() {
    this.fetchData(this.$route.fullPath) // Якобы посылаем запрос на entryPoint и заполняем соответственно store.
  },

  methods: {
    ...mapActions({
      fetchData: "products/fetchData",
    })
  },
})
</script>

<template>
  <TheHeader title="Комплекты стеллажных систем"/>
  <TheFilter />
  <TheContent />
  <TheFooter />
</template>


<style scoped>

</style>
