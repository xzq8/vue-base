import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Field  } from 'mint-ui'

import "./registerServiceWorker";
import "./assets/js/rem"
import "./assets/css/base.css"
import Header from "./components/Header"

Vue.config.productionTip = false;

// Object.keys(components).forEach((key) => {
//   var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
//   Vue.component(`v${name}`, components[key])
// })
Vue.component(Header.name,Header)
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);

// router.beforeEach(({meta, path}, from, next) => {
//   var { auth = true } = meta
//   var isLogin = Boolean(store.state.user) //true用户已登录， false用户未登录

//   if (auth && !isLogin && path !== '/login') {
//       return next({ path: '/login' })
//   }
//   next()
// })


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
