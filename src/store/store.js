import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: 0
  },
  mutations: {
    CHANGE_TIME (state, time) {
      state.time = time
    }
  },
  actions: {
    changeTime ({commit}, time) {
      commit('CHANGE_TIME', time)
    }
  },
  getters: {
    time: state => state.time
  }
})
