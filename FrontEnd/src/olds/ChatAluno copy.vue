<template>
<div>
  
  
       <div v-responsive.sm.xm class="modal-card" id="todoChatAlunoSm" v-if="!false">
           
                <header class="modal-card-head" id="modalChatHeadAlunoSm">
                  <p class="modal-card-title" style="color: aliceblue;">{{tituloChat}}Alunos</p>
                  
                </header>
                
                <div  id="chatAreaAluno">
                  <div v-for="msg in computedChats" :key="msg" >
                
                    <div v-for="m in msg" :key="m" >
                          
                            <v-card id="mensagemRecebidaSmAluno" v-if="m.autor==tituloChat" >
                              {{m.mensagem}}
                              <v-card-text> <p id="hora">{{m.momento}}</p></v-card-text>
                            </v-card>         
                          <v-card id="mensagemEnviadaSmAluno" v-if="m.destino==tituloChat" >
                              {{m.mensagem}}
                              <v-card-text> <p id="hora">{{m.momento}}</p></v-card-text>
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

      <div v-responsive.lg.xl.md class="modal-card" id="todoChatAluno" v-if="!false">
           
                <header class="modal-card-head" id="modalChatHeadAluno">
                  <p class="modal-card-title" style="color: aliceblue;">{{tituloChat}}</p>
                  
                </header>
                
                <div  id="chatAreaAluno"><div v-for="msg in computedChats" :key="msg" >
                
                    <div v-for="m in msg" :key="m" >
                          
                            <v-card id="mensagemRecebida" v-if="m.autor==tituloChat" >
                              {{m.mensagem}}
                              <v-card-text> <p id="hora">{{m.momento}}</p></v-card-text>
                            </v-card>         
                          <v-card id="mensagemEnviada" v-if="m.destino==tituloChat" >
                              {{m.mensagem}}
                              <v-card-text> <p id="hora">{{m.momento}}</p></v-card-text>
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
  
   <b-modal  v-model="isCardModalActive" :width="640" scroll="keep" >
     <div class="card" id="grupo">
              <div>
                <br>
           <p style="font-size:120%;font-weight:bolder;text-align:center;">Nome do Grupo</p>
            <b-input rounded expanded size='is-large' type="is-success" v-model="userGroup.nome">
            </b-input>
          
          
        <div style="margin-left: 1%;">
          <v-row>
            <v-col>
              <div><p style="font-size:120%;font-weight:bolder;"> Integrantes:</p></div> 
              <b-field>              
                  <b-select multiple native-size="6" v-model="userGroup.integrantes">
                      <option v-for="user in Todos" :key="user" :value="user">{{user}}</option>               
                  </b-select>
              </b-field>
              </v-col>
              <v-col>
                <div><p style="font-size:120%;font-weight:bolder;"> Selecionados:</p></div> 
              <b-field>
                <div v-for="user in userGroup.integrantes" :key="user">
                                <p style="font-size:120%;font-weight:bolder;text-align:center;">{{user}}</p>
                  </div>
              </b-field>
            </v-col>
          </v-row>
        </div>
        
                </div>
                <br>
                <b-button expanded rounded type="is-primary" @click="incluirGrupo">Criar Grupo</b-button>
            </div>
        </b-modal>
        
    
 </div>
  
</template>
<style>
#modalChatHeadAluno{
  background: rgb(73, 0, 0);
  font-weight: bolder;
}
#mensagemRecebidaSmAluno{
  background:rgb(255, 254, 254);
  width: 90%;
  height: auto;  
  margin-left: 2%;
  margin-top: 2%;    
  text-align: initial;  
  border-style:groove;  
  font-weight: bolder;
  border-color: green;
  font-size: 120%;
  text-align: left;  
}
#mensagemEnviadaSmAluno{
  background:rgb(255, 255, 255);
  width: auto;  
  height: auto;
  margin: 1%;
  margin-left: 10%;
  margin-top: 5%;  
  text-align: initial; 
  border-style:groove;  
  font-weight: bolder;
  border-color: red;
  font-size: 100%;
  text-align: right;
  text-justify: newspaper;
}

#modalChatHeadAlunoSm{
  background: rgb(73, 0, 0);
  font-weight: bolder;
  height: 5%;
}
#todoChatAlunoSm{
  left: -25%;
  top: 10%;
  width: 150%;  
  height: 150%;
  background: white;
  border-style: solid;
}
#todoChatAluno{
  top: 10%;
  width: 80%;
  left: -13%;  
  height: 140%;
  background: white;
  border-style: solid;  
}
#grupo{
  background: rgb(255, 255, 255);
  height: 500px;
}
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
  background:rgb(255, 255, 255);
  width: auto;  
  height: auto;
  margin: 1%;
  margin-left: 10%;
  margin-top: 5%;  
  text-align: initial; 
  border-style:groove;  
  font-weight: bolder;
  border-color: red;
  font-size: 120%;
  text-align: right;
  text-justify: newspaper;
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
  background:rgb(255, 254, 254);
  width: 90%;
  height: auto;  
  margin-left: 2%;
  margin-top: 2%;    
  text-align: initial;  
  border-style:groove;  
  font-weight: bolder;
  border-color: green;
  font-size: 120%;
  text-align: left;
  
  
}


#chatAreaAluno{  
  background: rgb(255, 255, 255); 
  height: 800px; 
  overflow-y: scroll;
  }


</style>
<script>

import axios from "axios";

 
export default {
  name: 'ChatAluno',
  data() {
    return {
      botMode:true,
      cont:0,
      userGroup:{integrantes:[],nome:[]},
      isCardModalActive:false,
      tituloChat:'Bot',
      selecionado:'nulo',
      //Alunos: [{nome:'Antonio Silva',pefil:'Aluno'},{nome:'Bruno Silva',pefil:'Aluno'},{nome:'Antonio Carlos',pefil:'Aluno'},{nome:'Carlos Antonio',pefil:'Aluno'},{nome:'Fabiana Silva',pefil:'Aluno'},{nome:'Paula Soares',pefil:'Aluno'},{nome:'Maria Clara',pefil:'Aluno'},{nome:'Silvana de Paula',pefil:'Aluno'},{nome:'Silvia Santos',pefil:'Aluno'}],
      Alunos: [],
      Diretores:[],
      Instrutores:[],
      Atendentes:[],
      Todos: [],
      Chats:[],
     
     
     
     Grupos:[{nome:'Café ',perfil:'Grupo'},{nome:'Instrutores',perfil:'Grupo'},{nome:'Geral',pefil:'Grupo'}],
     perfil:0,
      mensagens:[],
      selected: '1',
      selectedItem:'',
       
       msg:'',
       mensagem:{},
       bind:[]
       }
   },
    
  created() {    
    this.nome=localStorage.nome
    this.login=localStorage.login
    this.perfil=localStorage.perfil
    this.todos()
    this.buscarContatos()
    this.$store.dispatch('database/bindChats',this.nome)
  
  },
  mounted() {
			this.scrollToEnd();
		},
	updated() {
      this.scrollToEnd();     
			
		},
  methods: {
    //vaibd() {this.$store.dispatch('database/bindChats').then(item=>{console.log(item.val())})},
    scrollToEnd() {
      
        var container = document.querySelector("#chatAreaAluno");        
        var scrollHeight = container.scrollHeight;
				container.scrollTop = scrollHeight;
			},
    incluirGrupo(){      
      var payload=({nome:this.userGroup.nome,integrantes:this.userGroup.integrantes,perfil:'grupo'})
      payload.integrantes.forEach(element => {
        var msg={ mensagem:"Você foi incluido no grupo.",
        autor:payload.nome,
        destino:element,
        momento:new Date().toLocaleTimeString().substring(0,5),
        integrantes:this.userGroup.integrantes,
        perfil:'grupo'
      }
      this.$store.dispatch('database/inseridor',msg)
        
      });
      // this.$store.dispatch('database/criarGrupo',payload)
      // var msg={ mensagem:"Você foi incluido no grupo.",
      // autor:this.nome,
      // destino:payload.nome,
      // momento:new Date().toLocaleTimeString().substring(0,5)
      // }
      this.grupo()
    },
    grupo(){
      this.isCardModalActive=!this.isCardModalActive
    },
    
    
    todos(){
      axios.get().then(res=>{
        res.data.forEach(element=>{
          this.Todos.push(element.nome)
          switch (element.perfil) {
            case 'Aluno':
              this.Alunos.push(element)              
              break;
            case 'Atendimento':
              this.Atendentes.push(element)              
              break;
            case 'Instrutor':
              this.Instrutores.push(element)              
              break;
            case 'Diretor':
              this.Diretores.push(element)              
              break;
          
            default:
              break;
          }
        this.Alunos=this.Alunos.sort(this.ordenarNome)
        this.Diretores=this.Diretores.sort(this.ordenarNome)
        this.Atendentes=this.Atendentes.sort(this.ordenarNome)
        this.Instrutores=this.Instrutores.sort(this.ordenarNome)
        })
   
        this.Todos=this.Todos.sort()
      })
      
      },

    ordenarNome(a, b) {
      if (a.nome > b.nome) {
        return 1;
        }
        if (a.nome < b.nome) {
          return -1;
          }
          // a must be equal to b
          return 0;
    },

    buscarContatos(){
      
      this.$store.dispatch('database/bindChatsContatos',this.nome).then(item=>{            
        this.Chats=(Object.keys(item.val()))        
        })
        
   },
   

   botResponde(m){    
      var resposta='teste'
      m=m.toLowerCase()
      
      switch (true) {
        case (m.indexOf('agendar')>-1 && m.indexOf('aula')>-1):
        resposta="Ok, vou lhe orientar a agendar uma aula. Para agendar aulas, acesse o menu a sua direita e clique na opção agendar aulas."
          break;
        case (m.indexOf('cancelar')>-1 && m.indexOf('aula')>-1):
        resposta="Tudo bem, para cancelar aulas, acesse o menu a sua direita e clique na opção cancelar aulas."
          break;
        case (m.indexOf('boleto')>-1):
        resposta="Entendido. Para emitir o seu boleto, que pode ser pago em qualquer agencia bancaria ou lotérica, você deve acessar o menu e a opção gerar boletos. Selecione o mês especifico e clique em gerar."
          break;
        case (m.indexOf('resultado')>-1 && m.indexOf('exame')>-1):
        resposta="Entendido. O resultado de exames são disponibilizados no seu perfil no e-condutor.Estamos torcendo por você."
          break;
        case (m.indexOf('agendar')>-1||m.indexOf('aula')>-1):
        resposta="Ok, vou lhe orientar a agendar uma aula. Para agendar aulas, acesse o menu a sua direita e clique na opção agendar aulas."
          break;
        case (m.indexOf('atendente')>-1 || m.indexOf('pessoa') >-1 || m.indexOf('funcionario') >-1):
        resposta="Tudo bem, aguarde que um atendente ira falar com você."
         this.acionarAtendente(m)
          break;
        case (m.indexOf('Obrigado')>-1 || m.indexOf('tchau') >-1 || m.indexOf('vlws') >-1):
        resposta="Estou aqui para ajudar."
       
          break;
        default:
          resposta="Desculpe, eu ainda estou aprendendo e não entendi sua solicitação. Poderia me dizer com outras palavras qual sua solicitação?"
          break;
      }
        this.mensagemChatBot={
        mensagem:resposta,
        autor:'Bot',
        destino:this.nome,
        momento:new Date().toLocaleTimeString().substring(0,5)
      }
     
      this.$store.dispatch('database/inseridor',this.mensagemChatBot)
      this.mensagemChatBot=''

   },
   acionarAtendente(resp){
     this.Atendentes.forEach(element => {
        this.mensagemChat={
        mensagem:resp,
        autor:this.nome,
        destino:element.nome,
        momento:new Date().toLocaleTimeString().substring(0,5)
      }
     
      this.$store.dispatch('database/inseridor',this.mensagemChat)
      this.mensagemChat=''
     
       
     });


 
     

   },

    enviarMensagem(){
 
        this.mensagemChat={
        mensagem:this.msg,
        autor:this.nome,
        destino:this.tituloChat,
        momento:new Date().toLocaleTimeString().substring(0,5)
      }
      this.$store.dispatch('database/inseridor',this.mensagemChat)
      if(this.botMode){
        
        this.botResponde(this.msg)
      }    
      this.msg=''
      
     
      
    },
    
    nomeChat(x){
      
      if(x.nome){
        this.tituloChat=x.nome}        
      else{
        this.tituloChat=x
      }
     
      this.bindChatss()
    },

    bindChatss(){
     
     this.computedChats.forEach(element => {
       Object.keys(element).forEach(element2 => {
         this.bind.push(element[element2])         
       });
     });
      
      },
  },
  watch: {
  computedChats(){
    
  }
  
},
computed: {
     computedChats(){      
       return this.$store.getters['database/GetChat']
        }
        

   }
}

</script>