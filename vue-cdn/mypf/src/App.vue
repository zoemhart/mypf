<template>
  <div id="app">
  <h1>zoe</h1>
  <ul id="menu">
    <li><intro msg="home"/></li>
    <li><works msg="works"/></li>
    <li><contact msg="contact me"/></li>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(40, 50%, 50%);
  margin-top: 60px;
  background-color: lightgrey;
}

#menu{
  list-style: none;
  border: 1px solid red;
}
</style>
