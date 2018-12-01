<template>
  <div id="app">
    <!--onload="document.app.style.opacity='0'" not sure-->

    <header>
      <div id="logo">
        <router-link to="/">
          <img src="./assets/logo.png"/>
        </router-link>
      </div>

      <p id="introLink">
        <router-link to="/">
          <a>Zoe Azerty</a>
        </router-link>
      </p>

      <p id="portfolioLink">
        <router-link to="/Portfolio">
          <a>Portfolio</a>
        </router-link>
      </p>

      <p id="socialLink">
        <router-link to="/Social">
          <a>Social</a>
        </router-link>
      </p>
    </header>

    <section id="display">
      <router-view/>
    </section>

  </div>
</template>

<script>
import Welcome from './components/Welcome';
import Portfolio from './components/Portfolio';
import Social from './components/Social';

export default {
  name: 'app',
  components: {
    Welcome,
    Portfolio,
    Social,
  },
};
</script>

<style>
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  justify-self: center;
}

#app {
  font-family: 'Iosevka', 'Avenir', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  width: 100vw;
  /*opacity:1;
  transition: opacity 0.2s;
  -webkit-transition: opacity 0.2s; /* Safari */
}

header{
  height: 30vh;
  display: grid;
  grid-template-rows: 3fr 1fr 1fr;
  grid-template-columns: 1fr 2fr 2fr 1fr;
}

#logo {
  grid-row: 1;
  grid-column: 1 / 5;
  padding-top: 2vh;
}

#logo img{
  max-height: 18vh;
  max-width: 100vw;
}

#introLink {
  align-self: top;
  grid-row: 2;
  grid-column: 1 / 5;
}

#portfolioLink {
  align-self: center;
  grid-row: 3;
  grid-column: 2 / 3;
}

#socialLink {
  align-self: center;
  grid-row: 3;
  grid-column: 3 / 4;
}

#display {
  background: beige;
  height:70vh;
  display: grid;
  grid-template-rows: 1fr;
}

#display p{
  font-size: 2em;
  position: fixed;
  width: 100%;
  height: 100%;
  padding:35vh 0;
  z-index:2;
}

#display img{
  opacity: 0.3;
  min-width: 100vw;
  min-height: 100vh;
  max-width: 150vw;
  max-height: 150vh;
  /*TODO: object-fit and center the middle of the pic*/
}

a{
  text-decoration: none;
}
</style>
