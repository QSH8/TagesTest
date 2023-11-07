<script lang="ts">
  import {defineComponent} from "vue";


  export default defineComponent({
    name: 'BreadCrumbs',

    computed: {
      routes(): Array<object> | false {
        let breadCrumbs: Array<object> = [];

        if (this.$route.matched.length) {
          let routes: any = this.$router.options.routes;
          for (let key: number in routes) {
            if (this.$route.fullPath.includes(routes[key].path)) {
              breadCrumbs.push(routes[key])
            }
          }

          return breadCrumbs;
        } else {
          return false;
        }
      }
    },

    methods: {
      isExactRoute(key: number): boolean {
        let length: number  = 0;

        if (this.routes) {
          length = Object.keys(this.routes).length;
        }

        return length - 1 === key;
      },

      getExactClass(key: number) {
        return this.isExactRoute(key) ? 'navigation__link_active' : '';
      },

      getSeparator(key: number) {
        return this.isExactRoute(key) ? '' : ' /';
      },
    }
  })
</script>

<template>
  <nav class="navigation">
    <template v-if="routes">
      <router-link
          :to="route.path"
          v-for="(route, key) in routes" :key="key"
          class="navigation__link"
          :class="getExactClass(key)"
      >
        {{ route.name + getSeparator(key) }}
      </router-link>
    </template>
  </nav>
</template>


<style scoped>
  .navigation {
    font-family: 'SF-UI-Text-regular';
  }

  .navigation__link {
    margin: 0 5px 0 0;
    text-decoration: none;
    color: #828282;
  }

  .navigation__link_active {
    font-weight: bold;
    color: black;
  }
</style>
