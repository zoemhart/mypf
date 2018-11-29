<template>
  <div id="app">
  <h1>zoe</h1>
  <ul id="menu">
    <li><intro msg="info"/></li>
    <li><works msg="portfolio"/></li>
    <li><contact msg="work with me"/></li>
  </ul>
    
    <contact/>
  </div>
</template>

<script>
import Intro from './components/Intro.vue'
import Works from './components/Works.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {
    Intro,
    Works,
    Contact
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(20, 50%, 60%);
  margin-top: 60px;
  background-color: lightgrey;
}

#menu{
  list-style-type: none;
  padding: 0;
  display: inline-flex;
  border: 1px solid red;
}

#menu li{
  padding: 0 2em;
}
</style>
