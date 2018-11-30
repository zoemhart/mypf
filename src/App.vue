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
      <img src="./assets/ex1.jpg" alt="">
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  width: 100vw;
}

header{
  height: 30vh;
  display: grid;
  grid-template-rows: 3fr 1fr 1fr;
  grid-template-columns: 1fr 2fr 2fr 1fr;
}

#logo {
  max-height: 18vh;
  padding-top: 2vh;
  justify-self:center;
  grid-row: 1;
  grid-column: 1 / 5;
}

#introLink {
  padding-top: 0.7vh;
  grid-row: 2;
  grid-column: 1 / 5;
}

#portfolioLink {
  padding-top: 2vh;
  grid-row: 3;
  grid-column: 2 / 3;
}

#socialLink {
  padding-top: 2vh;
  grid-row: 3;
  grid-column: 3 / 4;
}

#display {
  background: beige;
  height:70vh;
  display: grid;
  grid-template-rows: 1fr;
  overflow: hidden;
}

#display p{
  color: black;
  font-size: 2em;
  position: fixed;
  width: 100%;
  height: 100%;
  padding:35vh 0;
  z-index:2;
}

#display img{
  opacity: 0.3;
  height: 70vh;
}

</style>
