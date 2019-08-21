<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
.page-cover
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    background rgba(0,0,0,.4)
    z-index 7
</style>
