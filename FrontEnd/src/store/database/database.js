import { database } from '../../../firebase.config.js' //Import firebase's realtime database instance so it's possible to push to and retrieve from it.
import { firebaseAction } from 'vuexfire' //Vuexfire action bundled with mutation to make call to firebase realtime's database and alter store state.

const state = {
teste:[],
CurrentLivestream:[]

}

const getters = {

}

const mutations = {
}

const actions = {
    bindCurrentLivestream: firebaseAction(({ bindFirebaseRef }) => {
        return bindFirebaseRef('CurrentLivestream', database.ref('teste/')
    )}),
    inseridor(context,payload) {
        
        return database.ref().push(payload)
    },
  
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}