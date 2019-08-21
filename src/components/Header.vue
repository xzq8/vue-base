<template>
  <div class="header" :class="{'show':isShow}">
      <div class="menu"><slot name="left"></slot></div>
      <h1><slot /></h1>
      <div class="fabu"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name: "vHeader",
    props:['isShow']
};
</script>

<style lang="stylus" scoped>
.header
  line-height 1rem
  display flex
  justify-content space-between
  align-items center
  font-size .4rem
  transition all .2s ease
  &.show
    transform translateX(4rem)
</style>
