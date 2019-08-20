<template>
  <div class="header">
      <div class="menu">{{right}}</div>
      <h1><slot /></h1>
      <div class="fabu">{{left}}</div>
  </div>
</template>

<script>
export default {
    name: "vHeader",
    props:[
        "right",
        "left"
    ]
};
</script>

<style lang="stylus" scoped>
.header
  line-height 1rem
  display flex
  justify-content space-between
  align-items center
  font-size .4rem
</style>
