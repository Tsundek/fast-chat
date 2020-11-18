<template>
  <div>
    
    <div class="modal-card " id="todoChat">
      
              <header class="modal-card-head" id="modalChatHead">
                  <span class="modal-card-title" style="color: aliceblue;">Chat</span>
                  <button type="button" class="delete" @click="adicionar"/>
              </header>
<div style=" overflow:auto;">
              <div id="chatArea" v-for="msg in mensagens" :key="msg.mensagens">

                <div id="mensagemRecebida" class="columns" v-if="msg.autor!=nome">
                  <div class="column is-2" >
                  <b-icon icon="user-circle" size="is-large" type='is-ligth' style="margin:4%;" />
                  </div>
                  <div class="colum is-10" id="mensagem">
                   <span style="color:white;">{{msg.mensagem}}</span>                    
                   <footer class="time-right">11:20</footer>
                   </div>
                </div>

                <div id="mensagemEnviada" class="columns" v-else>                  
                  <div class="colum is-10" id="mensagem">
                   <span style="color:white;">{{msg.mensagem}} </span> 
                  <footer class="time-left" >11:12</footer> 
                   </div>
                   <div class="column is-2" >
                    <b-icon icon="user-circle" size="is-large" type='is-success'  />                  
                   </div>                  
                </div>
              </div>
</div>       
        
        
        
    </div>
  <b-field type="is-primary" >
            <b-input size="is-large" @keyup.enter.native="enviarMensagem" type="search" v-model="msg" expanded rounded/>
            <p class="control">
                <b-button size="is-large" @click="enviarMensagem" class="button is-success" rounded><b-icon icon="paper-plane" /></b-button>
            </p>
        </b-field>
  </div>
</template>
<style>
#mensagemEnviada{
  background:rgb(59, 55, 55);
  width: auto;  
  height: auto;
  margin-left: 10%;
  margin-top: -15%;  
  text-align: initial; 
  border-style:groove;  
  font-weight: bolder;
  color:white;
  font-size: 200%;
}
.time-left {
  margin-left: 0%;
  color: rgb(255, 255, 255);
  font-size: 80%;
  width: 20%;
}
.time-right {
  margin-left: 110%;
  color: rgb(255, 255, 255);
  font-size: 80%;
}
#mensagem{
  color: black;
  font-weight: 400;
  font-size: 75%;
  margin: 1%;
}
#mensagemRecebida{
  background:rgb(87, 87, 87);
  width: 90%;
  height: auto;
  margin-left: 0.5%;
 margin-top: -2%;  
  text-align: initial;  
  border-style:groove;  
  font-weight: bolder;
  color:white;
  font-size: 200%;
  
}
#todoChat{
  border-radius: 5%;
  height: 90%;
  
}
#modalChatHead{
  background: rgb(4,113,21);
  background: linear-gradient(0deg, rgba(4,113,21) 0%, rgba(0,0,0,1) 100%);
  font-weight: bolder;
  
}
#chatArea{  
  height: 200px;
  background: rgb(255, 255, 255);
  
}

</style>
<script>


 
export default {
  name: 'Chat',
  data() {
    return {
       mensagens:[{mensagem:'Bom dia, em que posso ajuda-lo?',autor:"whatever"},
       {mensagem:'Bom dia, preciso de um auxilio para marcar as aulas. Bom dia, preciso de um auxilio para marcar as aulas. ',autor:"Celso"},
       {mensagem:'Ok, em que dia você prefere:2',autor:"Celso"},
       {mensagem:'Bom dia, preciso de um auxilio para marcar as aulas.',autor:"Celso"},
        {mensagem:'Ok, em que dia você prefere:',autor:"ssss"},{mensagem:'Bom dia, em que posso ajuda-lo?',autor:"whatever"},
       {mensagem:'Bom dia, preciso de um auxilio para marcar as aulas. Bom dia, preciso de um auxilio para marcar as aulas. ',autor:"Celso"},
       {mensagem:'Ok, em que dia você prefere:2',autor:"ssss"},
       {mensagem:'Bom dia, preciso de um auxilio para marcar as aulas. Bom dia, preciso de um auxilio para marcar as aulas.',autor:"Celso"},
        
       ],
       msg:'',
       mensagem:{},
        }
      },
  created() {    
    this.nome=localStorage.nome
    this.login=localStorage.login
    this.perfil=localStorage.perfil
  },
  methods: {
    enviarMensagem(){
      alert()
    this.mensagem={
      mensagem:this.msg,autor:this.nome, momento:new Date().getTime(),destino:"?"
    }
    }
    
  },

}

</script>