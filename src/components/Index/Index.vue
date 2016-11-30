<template lang="pug">
  #home
    h1 I'm the landing page
    router-link(to="/") Home
    router-link(to="/test1") Test 1
    router-link(to="/test2") Test 2
    Hello
    router-view
</template>

<script>
  import Hello from '../Hello'
  export default {
    components: {
      Hello
    }
  }
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
