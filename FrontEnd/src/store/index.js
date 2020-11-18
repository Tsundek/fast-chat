import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'
import Vue from 'vue'
import database from './database/database.js'


Vue.use(Vuex)

const state = {
	SystemVersion: '4.4.7'
}

const getters = {
    GetSystemVersion(state) { //Return current logged in user.
        return state.SystemVersion
    },
}

export default new Vuex.Store({
	modules: {  database},
    mutations: { ...vuexfireMutations },
    state,
    getters
})