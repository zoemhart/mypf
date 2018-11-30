<template>
  <div class="intro">
  	I am from Intro component. If you’re thinking  that filler text seems pretty boring and uncontroversial, you’d be wrong.
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
