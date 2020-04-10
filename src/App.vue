<template>
  <div id="app">
    <button @click="createNotice">createNotice</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    createNotice () {
      const opts = {
        content: Math.random().toString(16).toUpperCase().slice(-8),
        closed: Math.random().toString(16).toUpperCase().slice(-5)
      }
      const notice = this.$noticeConstructor(opts)
      notice.createDom()
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
