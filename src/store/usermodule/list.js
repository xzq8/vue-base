import { get } from "@/untils/common";
import { getAllTopi } from "@/untils/api";

let state = {
    alllist: []
}

let getters = {
    getlist(state) {
        return state.alllist
    }
}

let actions = {
    setList({ commit }) {
        get(getAllTopi).then(data => {
            commit('setallList', data)
        });
    }
}

let mutations = {
    setallList(state, arr) {
        state.alllist = arr
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}