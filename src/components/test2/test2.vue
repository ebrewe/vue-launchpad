<template lang="pug">
  .test2
    h1 this is test2
    p the time is {{time}} <br>
    | o'clock
</template>

<script>
  export default {
    data () {
      return {
        time: Date.now()
      }
    },
    mounted () {
      this.tick()
    },
    methods: {
      tick () {
        var newNow = Date.now()
        this.time = newNow
        return window.requestAnimationFrame(this.tick)
      }
    }
  }
</script>
