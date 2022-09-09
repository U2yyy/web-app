<template>
  <div id="app">
    <explorer/>
  </div>
</template>

<script>
import explorer from "@/components/explorer"
import router from "@/route"

export default {
  name: 'App',
  components: {
    explorer
  },
  router
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
