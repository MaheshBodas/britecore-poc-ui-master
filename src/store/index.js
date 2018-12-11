import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import riskapi from './modules/riskapi'
import risktypekeys from './modules/risktypekeys'
import riskkeys from './modules/riskkeys'
import singleriskinstance from './modules/singleriskinstance'
import allriskinstances from './modules/allriskinstances'
// import auth from './modules/auth'
// import types from './modules/types'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    // auth,
    // types,
    riskapi,
    risktypekeys,
    riskkeys,
    singleriskinstance,
    allriskinstances,
    user
  },
  getters
})

export default store
