<template>
  <section id="page">
    <ul class="posts-list">
      <li v-for="(item,index) in datas" :key="index">
        <router-link :to="{path:'topic',query:{id:item.author_id}}">
          <h3 title="置顶" class="top">{{item.title}}</h3>
          <div class="content">
            <img :src="item.author.loginname" class="avatar" />
            <div class="info">
              <p>
                <span class="name">{{item.author.loginname}}</span>
                <span class="status">
                  <b>{{item.reply_count}}</b>
                  /{{item.visit_count}}
                </span>
              </p>
              <p>
                <span class="name">{{item.create_at | getLastTimeStr(true)}}</span>
                <span class="status">{{item.last_reply_at | getLastTimeStr(true)}}</span>
              </p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { getTimeStr } from "../untils/common";
export default {
  name: "vList",
  props: ["datas"],
  filters: {
    getLastTimeStr(time, isFromNow) {
      return getTimeStr(time, isFromNow);
    }
  },
  mounted() {
    this.datas;
    debugger;
  },
  updated() {
    this.datas;
    debugger;
  }
};
</script>

<style lang="stylus" scoped>
.posts-list
    background-color #ffffff
    >li
        padding .1rem .15rem
        border-bottom 1px solid #d5dbdb
    h3
        color #2c3e50
        font-size .36rem
        line-height 1.5
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
        text-align left
        &:before
            content attr(title);
            margin-right .1rem
            margin-top -.03rem
            color #ffffff
            padding 5px 6px
            font-size 10px
            font-weight 400
            border-radius 4px
            background-color #e7e7e7
            text-align center
            vertical-align middle
        &.top
            &:before
                background #e74c3c
    .content 
        padding-top .1rem
        display flex
    .avatar
        display block
        width .4rem
        height .4rem
        border-radius 50%
        margin-right .1rem
        border 1px solid #f3f3f3
    .info
        display block
        width 100%
        flex 1
    p
        padding .03rem 0
        display flex
        color #34495e
        font-size .24rem
        display flex
        .name
            flex 1           
</style>