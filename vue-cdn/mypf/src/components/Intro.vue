<template>
  <div class="intro">
  	    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String
  }
}
</script>

<style>
 .intro{
 	background: hsl(60, 80%, 90);
 }
</style>
