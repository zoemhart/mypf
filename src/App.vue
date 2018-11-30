<template>
  <div id="app">

    <header>  
      <img id="logo" src="./assets/logo.png" alt="">
      <p>
        <p id="introLink"><router-link to="/Intro"><a>Zoe Azerty</a></router-link></p>
        <p id="portfolioLink"><router-link to="/Portfolio"><a>Portfolio</a></router-link></p>
        <p id="socialLink"><router-link id="socialLink" to="/Social"><a>Social</a></router-link></p>
      </p>
    </header>

    <div id="display">
      <p>placeholder</p>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Intro from './components/Intro.vue'
import Portfolio from './components/Portfolio.vue'
import Social from './components/Social.vue'

export default {
  name: 'app',
  components: {
    Intro,
    Portfolio,
    Social
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Iosevka', 'Avenir', Arial, sans-serif;
  font-size: 0.8em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: lightgrey;
  height: 100vh;
  width: 100vw;
}

header{
  background: white;
  height: 30vh;
  display: grid;
  grid-template-rows: 3fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}

#logo {
  border: 1px solid blue;
  max-height: 18vh;
  align-self: center;
  justify-self:center;
  grid-column: 1 / 3;
  grid-row: 1;
}

#introLink {
  border: 1px solid orange;
  grid-column: 1 / 3;
  grid-row: 2;
}

#portfolioLink {
  border: 1px solid red;
  grid-column: 1 / 2;
  grid-row: 3;
}

#socialLink {
  border: 1px solid green;
  grid-column: 2 / 3;
  grid-row: 3;
}

#display {
  border:1px solid yellow;
  height:70vh;
}

</style>
