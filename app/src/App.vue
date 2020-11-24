<template>
  <div id="app">
    <v-fade-transition mode="out-in">
      <router-view/>
    </v-fade-transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  metaInfo: {
    title: 'Hospital',
    titleTemplate: '%s | Hospital',
    htmlAttrs: {lang: 'en'},
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f5f5f5;
}
</style>
