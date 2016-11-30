<template lang="pug">
  .test1
    h2 this is page test1
    p {{message}}
</template>

<script>
  export default {
    data () {
      return {
        message: 'hooray from test1'
      }
    }
  }
</script>
