<template>
  <div id="app">
    <div id="grid">
        
      <img id="logo" src="./assets/logo.png" alt="">

      <p>
        <router-link id="introLink" to="/Intro"><a>Zoe Azerty</a></router-link>
        <router-link id="portfolioLink" to="/Portfolio"><a>Portfolio</a></router-link>
        <router-link id="socialLink" to="/Social"><a>Social</a></router-link>
      </p>

      <div id="display">
        <router-view></router-view>
      </div>

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
}

.grid{
  background: white;
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 20% 5% 10% 65%;
  grid-template-areas: "logo logo"
                       "introLink introLink"
                       "portfolioLink socialLink"
                       "display"
  ;
}

#logo {
  max-width: 10em;
}

#introLink{
  grid-area: introLink;
  border: 1px solid orange;
}

#portfolioLink{
  grid-area: portfolioLink;
  border: 1px solid red;
}

#socialLink{
  grid-area: socialLink;
  border: 1px solid green;
}

#display{
  grid-area: display;
  border:1px solid yellow;
}


</style>
