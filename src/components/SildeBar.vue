<template>
  <section id="sideBar" class="nav-list" :class="{'show':isShow}">

    <section class="list-ul">
      <a href="/#/list?tab=all" class="icon-quanbu iconfont item router-link-active">全部</a>
      <a href="/#/list?tab=good" class="icon-hao iconfont item router-link-active">精华</a>
      <a href="/#/list?tab=share" class="icon-fenxiang iconfont item router-link-active">分享</a>
      <a href="/#/list?tab=ask" class="icon-wenda iconfont item router-link-active">问答</a>
      <a href="/#/list?tab=job" class="icon-zhaopin iconfont item router-link-active">招聘</a>
      <a href="/#/message" class="icon-xiaoxi iconfont item line">消息</a>
      <a href="/#/about" class="icon-about iconfont item">关于</a>
    </section>
  </section>
</template>

<script>
export default {
    name:"vSildeBar",
    props:['isShow'],
    components:{
        'userInfo': require('./userInfo')
    }
};
</script>

<style lang="stylus" scoped>
.nav-list
    position fixed
    top 0
    bottom 0
    left -4rem
    width 4rem
    background-color #ffffff
    color #313131
    transition all .3s ease 
    z-index 9
    &.show
        transform translateX(4rem)
    >.list-ul
        margin 0 .48rem
        border-top 1px solid #d4d4d4
        overflow hidden
        padding-top 1rem
        > .item 
            display: block
            font-size: 14px
            font-weight: 200
            padding: 9% 0
            text-align: left
            text-indent: 1px
            line-height: 15px
            color: #313131
            font-weight: 700
</style>