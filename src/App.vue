<template>
  <div id="app">
    <div class="logo"><img src="./assets/logo.png" alt=""></div>

    <p>
      <router-link class="introLink" to="/Intro"><a>Zoe Azerty</a></router-link>
      <router-link class="portfolioLink" to="/Portfolio"><a>portfolio</a></router-link>
      <router-link class="socialLink" to="/Social"><a>Social</a></router-link>
    </p>

    <div class="display">
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
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-areas: "logo logo"
                       "introLink introLink"
                       "portfolioLink socialLink"
                       "display"
  ;
  grid-template: 20% 5% 10.5% 65% / 1fr 1fr;
}

.introLink{
  grid-area: introLink;
  border: 1px solid orange;
}

.portfolioLink{
  grid-area: portfolioLink;
  border: 1px solid red;
}

.socialLink{
  grid-area: socialLink;
  border: 1px solid green;
}

.display{
  grid-area: display;
  border:1px solid yellow;
}


</style>
