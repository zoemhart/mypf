<template>
  <div class="social">
    <h1>{{ msg }}</h1>
    <p>
      
    </p>

  </div>
</template>

<script>
export default {
  name: 'Social',
  props: {
    msg: String
  }
}
</script>

<style>
.social{
 	background: hsl(230, 80%, 90);
 }
</style>
