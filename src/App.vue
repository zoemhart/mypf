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

    <section id="display">
      <p>placeholder</p>
      
      <router-view></router-view>
    </section>

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
  background: black;
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
  grid-row: 1;
  grid-column: 1 / 3;
}

#introLink {
  border: 1px solid orange;
  grid-row: 2;
  grid-column: 1 / 3;
}

#portfolioLink {
  border: 1px solid red;
  grid-row: 3;
  grid-column: 1 / 2;
}

#socialLink {
  border: 1px solid green;
  grid-row: 3;
  grid-column: 2 / 3;
}

#display {
  background: lightgrey;
  height:70vh;
  display: grid;
  grid-template-rows: 1fr;
}

#display p{
  border:1px solid yellow;
  justify-self: center;
  margin: auto 0;
}

</style>
