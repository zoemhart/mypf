<template>
  <div id="app">
    <!--<img alt="logo" src="./assets/logo2.png">-->
    <works msg="works"/>
  </div>
</template>

<script>
import Works from './components/Works.vue'

export default {
  name: 'app',
  components: {
    Works
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(40, 50%, 50%);
  margin-top: 60px;
}
</style>
