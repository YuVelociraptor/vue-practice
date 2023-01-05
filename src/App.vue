<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/01">01</router-link>
    <router-link to="/02">02</router-link>
    <router-link to="/03">03</router-link>
  </nav>
  <router-view />
</template>

<script>
import { ref } from 'vue'


export default {
  name: 'LayoutDefault',



  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>

<style>
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
</style>