<template>
  <div id="app">
      <v-form-validate/>      
  </div>
</template>

<script>
import vFormValidate from './components/v-form-validate.vue';

export default {
  name: 'App',
  components: {
    vFormValidate,
  }
}
</script>

<style>
   
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
