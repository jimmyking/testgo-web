import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  userInfo: null,
  project: {
    id: null,
    name: null
  },
  model: {
    id: null,
    name: null,
    prefix: null
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
