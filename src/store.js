import Vue from "vue";
import Vuex from "vuex";
import user from "./store/usermodule/user"
import list from "./store/usermodule/list"

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    user,
    list
  }

});
