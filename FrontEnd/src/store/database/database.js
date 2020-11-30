import { database } from '../../../firebase.config.js' //Import firebase's realtime database instance so it's possible to push to and retrieve from it.
import { firebaseAction } from 'vuexfire' //Vuexfire action bundled with mutation to make call to firebase realtime's database and alter store state.

const state = {
Atividades:[],
Contatos:[],
Chat:['foi']

}

const getters = {
    GetChat(state) {
        return state.Chat
    },
    GetContatos(state){
        return state.Contatos
    },
    GetAtividades(state){
        return state.Atividades
    }

}

const mutations = {
    //CLEAR_DATABASE_STORE(state) {
        //state.Chat = ''        
       // state.Chat = null
    //},

}

const actions = {
    bindChatsContatos: firebaseAction(({ bindFirebaseRef},nome) => {
        return bindFirebaseRef('Contatos', database.ref('/chat/'+nome)
    )}),

    bindChats: firebaseAction(({bindFirebaseRef},nome) =>{        
        return bindFirebaseRef('Chat', database.ref('/chat/'+nome))
    }),
    bindAtividades:firebaseAction(({bindFirebaseRef},nome)=>{
        return bindFirebaseRef('Atividades',database.ref('/Atividades/'+nome))
    }),
    inserirAtividade(context,payload){        
        database.ref('/Atividades/'+payload.responsavel).push(payload)
    },
    removerAtividade(context,payload){             
        database.ref('/Atividades/'+payload.responsavel+'/'+payload['.key']).remove()
    },
    criarGrupo(context,payload){
        database.ref('/grupo/Grupo:'+payload.nome).push(payload.integrantes)
    },
    inseridor(context,payload) {        
        database.ref('/chat/'+payload.autor+'/'+payload.destino).push(payload)
        database.ref('/chat/'+payload.destino+'/'+payload.autor).push(payload)
    },
  
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}