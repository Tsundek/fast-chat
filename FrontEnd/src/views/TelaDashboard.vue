<template>

<div>
     
                       
<Dashboard />
<div v-if="perfil!='Aluno'">
  <Chat  id="chat" v-if="exibeChat" />
  <v-btn v-responsive.sm.xm id="btnSm" elevation="24" fab large @click="abreChat"><v-icon x-large>mdi-chat</v-icon></v-btn>
  <v-btn v-responsive.lg.xl.md id="btn" elevation="24" fab large @click="abreChat"><v-icon x-large>mdi-chat</v-icon></v-btn>
</div>
<div v-else>
  <ChatAluno  id="chat" v-if="exibeChatAluno" />
  <v-btn v-responsive.sm.xm id="btnSm" elevation="24" fab large @click="abreChatAluno"><v-icon x-large>mdi-chat</v-icon></v-btn>
  <v-btn v-responsive.lg.xl.md id="btn" elevation="24" fab large @click="abreChatAluno"><v-icon x-large>mdi-chat</v-icon></v-btn>
</div>                        
 

  
</div>
</template>
<style>
#btnSm{
  position: fixed;
  right: 5%;
  top: 10%;
}
#btn{
  left: 20%;
  bottom: 150px;
}
#chat{
  position:absolute;
  float: left;
  left: 25%;
  top: 10%;
  height: 50%;
  width: 50%;
  }

</style>

<script>
import Dashboard from "../components/Dashboard.vue"
import Chat from "../components/Chat.vue"
import ChatAluno from "../components/ChatAluno.vue"
export default {
  name: 'TelaDashboard',
  components:{
    Dashboard,
    Chat,
    ChatAluno
  },
  data() {
    return {    
      exibeChat:false,
      exibeChatAluno:false,
      nome:'',
      login:'',
      perfil:''
    
    }
  },
  created() {   
      this.nome=localStorage.nome
    this.login=localStorage.login
    this.perfil=localStorage.perfil                 
   
  },
  methods: {
    abreChat(){
      this.exibeChat=!this.exibeChat      
    },
    abreChatAluno(){
      this.exibeChatAluno=!this.exibeChatAluno
    }
  },
  


}
</script>

