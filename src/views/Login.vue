<template>
  <div class="login">
    <vHeader>登录</vHeader>
    <div class="loginbody">
      <mt-field placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
      
      <mt-button size="large" @click.native="handleClick" type="primary">登录</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: ""
    };
  },
  methods: {
    handleClick() {
      console.log(this.email);
    }
  }
};
</script>

<style lang="stylus" scoped>
.loginbody
  padding .5rem .1rem
.mint-button--large
  margin-top .2rem
</style>