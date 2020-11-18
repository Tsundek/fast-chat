<template>
<div>
  <v-row>
    <v-col>
      <div class="modal-card" id="contatos" v-if="perfil=='Admin'" style=" overflow:auto;">
          <header class="modal-card-head" id="modalChatHead">
                  <span class="modal-card-title" style="color: aliceblue;">Contatos</span>                  
          </header>
        <section>
        
        <b-field>
            <b-autocomplete v-model="name" :data="data" clearable @select="option => selected = option" placeholder="Busca...">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
    </section>
    
    <b-menu>
      <b-menu-list v-model="selecionado">      
        <b-menu-item :active="!isActive" >
          <template slot="label">          
            <v-icon>mdi-account</v-icon>Diretores
          </template>
          <b-menu-item v-for="diretor in Diretores" :key="diretor.nome" :label="diretor.nome" :value="diretor.nome" @click="alerta(diretor)"></b-menu-item>
        </b-menu-item>
        
        <b-menu-item  :active="!isActive" >
          <template slot="label">          
            <v-icon>mdi-account</v-icon>Instrutores
          </template>
          <b-menu-item v-for="instrutor in Instrutores" :key="instrutor" :label="instrutor.nome" @click="alerta(instrutor)"></b-menu-item>
        </b-menu-item>

        <b-menu-item :active="!isActive" >
          <template slot="label">          
            <v-icon>mdi-account</v-icon>Alunos
          </template>
          <b-menu-item v-for="aluno in Alunos" :key="aluno" :label="aluno.nome" @click="alerta(aluno)"></b-menu-item>
        </b-menu-item>
        <b-menu-item :active="!isActive" >
          <template slot="label">          
            <v-icon>mdi-account</v-icon>Atendimento
          </template>
          <b-menu-item v-for="atendente in Atendentes" :key="atendente" :label="atendente.nome" @click="alerta(atendente)"></b-menu-item>
        </b-menu-item>  

           
        <b-menu-item :active="!isActive" >
          <template slot="label">          
            <v-icon>mdi-account</v-icon>Grupos
          </template>
          <b-menu-item label="+ Criar grupo"></b-menu-item>
          <b-menu-item v-for="grupo in Grupos" :key="grupo.nome" :label="grupo.nome" :value="grupo.nome" @click="alerta(grupo)"></b-menu-item>
          
        </b-menu-item>
        





      </b-menu-list>             
    </b-menu>
    <v-divider></v-divider>
     <b-menu>
      <p style="background:darkblue; color:white; text-align:center"> Conversas</p>
      <b-menu-list>
        <b-menu-item v-for="user in Chats" :key="user" :label="user.nome" @click="alerta(user)"></b-menu-item>
        <br>
      <b-menu-item label="+ Criar grupo"></b-menu-item>    
      </b-menu-list>
                     
     </b-menu>

  
    </div>
      
    </v-col>
    <v-col >

      <div class="modal-card" id="todoChat" v-if="!false">
           
                <header class="modal-card-head" id="modalChatHead">
                  <p class="modal-card-title" style="color: aliceblue;">{{tituloChat.nome}}</p>
                  <button type="button" class="delete"/>
                </header>
                <div style=" overflow:auto;" id="chatArea" >
                              <div v-for="msg in mensagens" :key="msg.mensagens">

                                <div id="mensagemRecebida" v-if="msg.autor!=nome">
                                  <v-card id="msg">
                                    <v-card-title>
                                  {{msg.mensagem}}
                                  </v-card-title>
                                  <v-card-text>{{msg.momento}}</v-card-text>
                                  </v-card>
                                </div>

                                <div id="mensagemEnviada" v-else>                  
                                  <v-card id="msg">
                                  <v-card-title>
                                  {{msg.mensagem}}
                                  </v-card-title>
                                  <v-card-text> <p id="hora">{{msg.momento}}</p></v-card-text>
                                  </v-card>                 
                                </div>
                              </div>
                  </div>
                  <v-divider></v-divider>
                <b-field type="is-primary" style="background:lightgray; top:20%">
                  <b-input size="is-large" @keyup.enter.native="enviarMensagem" type="search" v-model="msg" expanded rounded/>
                  <p class="control">
                  <b-button size="is-large" @click="enviarMensagem" class="button is-success" rounded><b-icon icon="paper-plane" /></b-button>
                  </p>
                </b-field>
      </div>
    </v-col>
    


  </v-row>

    
 </div>
  
</template>
<style>
#contatos{
  left: -40%;
  width: 50%;  
  height: 80%;
  background: white;
  border-style: solid;
}
#hora{
  text-align: end;
}
#mensagemEnviada{
  background:rgb(59, 55, 55);
  width: auto;  
  height: auto;
  margin-left: 10%;
  margin-top: 5%;  
  text-align: initial; 
  border-style:groove;  
  font-weight: bolder;
  border-color: red;
  font-size: 100%;
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
#msg{
  background: white;
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
  margin-left: 1%;
  margin-top: 2%;  
  text-align: initial;  
  border-style:groove;  
  font-weight: bolder;
  border-color: green;
  font-size: 120%;
}
#todoChat{
  width: 150%;
  left: -70%;  
  height: 80%;
  background: white;
  border-style: solid;
  
}
#modalChatHead{
  background: rgb(4,113,21);
  font-weight: bolder;
}
#chatArea{  
  background: rgb(255, 255, 255); 
  height: 800px; 
  
  }


</style>
<script>


 
export default {
  name: 'Chat',
  data() {
    return {
      cont:0,

      tituloChat:{nome:'Bruno Silva'},
      selecionado:'nulo',
      Alunos: [{nome:'Antonio Silva',pefil:'Aluno'},{nome:'Bruno Silva',pefil:'Aluno'},{nome:'Antonio Carlos',pefil:'Aluno'},{nome:'Carlos Antonio',pefil:'Aluno'},{nome:'Fabiana Silva',pefil:'Aluno'},{nome:'Paula Soares',pefil:'Aluno'},{nome:'Maria Clara',pefil:'Aluno'},{nome:'Silvana de Paula',pefil:'Aluno'},{nome:'Silvia Santos',pefil:'Aluno'}],
      Diretores:[{nome:'José Paulo',perfil:'Diretor'},{nome:'Maria Silveira',perfil:'Diretor'},{nome:'Ana Paula',perfil:'Diretor'}],
      Instrutores:[{nome:'Ayrton Senna',perfil:'Instrutor'},{nome:'Nelson Piquet',perfil:'Instrutor'},{nome:'Emerson Fittipaldi',perfil:'Instrutor'},{nome:'Felipe Massa',perfil:'Instrutor'},{nome:'Eliana Munique',perfil:'Instrutor'}],
      Atendentes:[{nome:'Fernanda Oliveira',perfil:'Atendimento'},{nome:'Maria Lima',perfil:'Atendimento'},{nome:'Guilherme Souza',perfil:'Atendimento'}],
      Chats:[{nome:'Ayrton Senna',perfil:'Instrutor'},{nome:'Maria Silveira',perfil:'Diretor'},{nome:'Carlos Antonio',pefil:'Aluno'}],
      Grupos:[{nome:'Café ',perfil:'Grupo'},{nome:'Instrutores',perfil:'Grupo'},{nome:'Geral',pefil:'Grupo'}],
      
      selected: '1',
      selectedItem:'',
      data: [
                    'Angular',
                    'Angular 2',
                    'Aurelia',
                    'Backbone',
                    'Ember',
                    'jQuery',
                    'Meteor',
                    'Node.js',
                    'Polymer',
                    'React',
                    'RxJS',
                    'Vue.js'
                ],

       mensagens:[{mensagem:'Bom dia, em que posso ajuda-lo?',autor:"whatever",momento:'11:20'},
       {mensagem:'Bom dia, preciso de um auxilio para marcar as aulas. Bom dia, preciso de um auxilio para marcar as aulas. ',autor:"Celso",momento:'11:20'},
       {mensagem:'Ok, em que dia você prefere:2',autor:"Celso",momento:'11:22'},
       {mensagem:'Bom dia, preciso de um auxilio para marcar as aulas.',autor:"Celso",momento:'11:23'},
        {mensagem:'Ok, em que dia você prefere:',autor:"ssss",momento:'11:23'},{mensagem:'Bom dia, em que posso ajuda-lo?',autor:"whatever",momento:'11:25'},
       {mensagem:'Bom dia, preciso de um auxilio para marcar as aulas. Bom dia, preciso de um auxilio para marcar as aulas. ',autor:"Celso",momento:'11:26'},
       {mensagem:'Ok, em que dia você prefere:2',autor:"ssss",momento:'11:27'},
       {mensagem:'Bom dia, preciso de um auxilio para marcar as aulas. Bom dia, preciso de um auxilio para marcar as aulas.',autor:"Celso",momento:'11:30'},
        
       ],
       msg:'',
       mensagem:{},
        }
      },
  created() {    
    this.nome=localStorage.nome
    this.login=localStorage.login
    this.perfil=localStorage.perfil
    this.juntando
  },
  methods: {
    enviarMensagem(){
      
    this.mensagem={
      mensagem:this.msg,autor:this.nome, momento:new Date().toLocaleTimeString().substring(0,5)
    }

    this.mensagens.push(this.mensagem)
    this.msg=''
    },
    alerta(x){
     this.cont++
     this.tituloChat=x
     switch (this.cont) {
       case 1:
         this.mensagens=[{mensagem:'Bom dia, em que posso ajuda-lo?',autor:"whatever",momento:'08:12'},
       {mensagem:'Bom dia, preciso de um auxilio para marcar as aulas. Bom dia, preciso de um auxilio para marcar as aulas. ',autor:"Celso",momento:'08:15'}]             
         break;
       case 2:
         this.mensagens=[{mensagem:'Bom dia, você precisa de ajuda?',autor:"Celso",momento:'08:12'},
       {mensagem:'Bom dia, preciso de um auxilio para marcar as aulas. Bom dia, preciso de um auxilio para marcar as aulas. ',autor:"sadfas",momento:'08:15'}]
         break;
        case 3:
          this.mensagens=[{mensagem:'Vai ter reunião na segunda?',autor:"whatever",momento:'08:12'},
       {mensagem:'Sim, foi avisado a todo mundo. ',autor:"Celso",momento:'08:15'}]
         this.cont=0
         break;
       default:
         break;
     }
       
    }
    
    
  },
   computed: {
   
           
        }

}

</script>