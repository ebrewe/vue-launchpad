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
        running: false,
        time: Date.now()
      }
    },
    mounted () {
      this.running = true
      this.tick()
    },
    beforeDestroy () {
      this.running = false
    },
    methods: {
      tick () {
        if (!this.running) return false
        var newNow = Date.now()
        this.time = newNow
        this.$store.dispatch('changeTime', this.time)
        return window.requestAnimationFrame(this.tick)
      }
    }
  }
</script>
