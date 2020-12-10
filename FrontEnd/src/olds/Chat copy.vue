<template>
<div>
  
  <v-row>
    <v-col>
     
      <div class="modal-card" id="contatos" style=" overflow:auto;">
      
          <header class="modal-card-head" id="modalChatHead">
                  <span class="modal-card-title" style="color: aliceblue;">Contatos</span>                  
          </header>
        <section>
        
        <b-field>
            <b-autocomplete v-model="name" :data="Todos" clearable @select="option => selected = option" placeholder="Busca...">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
        </section>
        
        <b-menu>
          <b-menu-list v-model="selecionado">      
            <b-menu-item :active="!isActive" style="border-style:groove;">
              <template slot="label">          
                <v-icon>mdi-account</v-icon>Diretores
              </template>
              <b-menu-item v-for="diretor in Diretores" :key="diretor" :label="diretor.nome" :value="diretor" @click="nomeChat(diretor)"></b-menu-item>
            </b-menu-item>
            
            <b-menu-item  :active="!isActive" style="border-style:groove;">
              <template slot="label">          
                <v-icon>mdi-account</v-icon>Instrutores
              </template>
              <b-menu-item v-for="instrutor in Instrutores" :key="instrutor" :label="instrutor.nome" @click="nomeChat(instrutor)"></b-menu-item>
            </b-menu-item>

            <b-menu-item :active="!isActive" style="border-style:groove;">
              <template slot="label">          
                <v-icon>mdi-account</v-icon>Alunos
              </template>
              <b-menu-item v-for="aluno in Alunos" :key="aluno" :label="aluno.nome" @click="nomeChat(aluno)"></b-menu-item>
            </b-menu-item>
            <b-menu-item :active="!isActive" style="border-style:groove;">
              <template slot="label">          
                <v-icon>mdi-account</v-icon>Atendimento
              </template>
              <b-menu-item v-for="atendente in Atendentes" :key="atendente" :label="atendente.nome" @click="nomeChat(atendente)"></b-menu-item>
            </b-menu-item>  

              
            <b-menu-item :active="!isActive" style="border-style:groove;">
              <template slot="label">          
                <v-icon>mdi-account</v-icon>Grupos
              </template>
              <b-menu-item @click="grupo()" label="+ Criar grupo"></b-menu-item>
              <b-menu-item v-for="grupo in Grupos" :key="grupo" :label="grupo.nome" :value="grupo" @click="nomeChat(grupo)"></b-menu-item>
              
            </b-menu-item>
            





          </b-menu-list>             
        </b-menu>
        <v-divider></v-divider>
        <b-menu>
          <p style="background:darkblue; color:white; text-align:center"> Conversas</p>
          <b-menu-list>
            <b-menu-item v-for="user in Chats" :key="user" :label="user" @click="nomeChat(user)"></b-menu-item>
            <br>
              
          </b-menu-list>
                        
        </b-menu>

  
    </div>
      
    </v-col>
    <v-col >
       <div v-responsive.sm.xm class="modal-card" id="todoChatSm" v-if="!false">
           
                <header class="modal-card-head" id="modalChatHead">
                  <p class="modal-card-title" style="color: aliceblue;">{{tituloChat}}</p>
                  
                </header>
                
                <div  id="chatArea"><div v-for="msg in computedChats" :key="msg" >
                
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

      <div v-responsive.lg.xl.md class="modal-card" id="todoChat" v-if="!false">
           
                <header class="modal-card-head" id="modalChatHead">
                  <p class="modal-card-title" style="color: aliceblue;">{{tituloChat}}</p>
                  
                </header>
                
                <div  id="chatArea"><div v-for="msg in computedChats" :key="msg" >
                
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
    </v-col>
    


  </v-row>
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
#todoChatSm{
  left: 10%;
  bottom: 100%;
  width: 100%;  
  height: 80%;
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
  overflow-y: scroll;
  }


</style>
<script>

import axios from "axios";

 
export default {
  name: 'Chat',
  data() {
    return {
      file:null,
      cont:0,
      userGroup:{integrantes:[],nome:[]},
      isCardModalActive:false,
      tituloChat:'Chat',
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
				var container = document.querySelector("#chatArea");
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

    enviarMensagem(){
 
        this.mensagemChat={
        mensagem:this.msg,
        autor:this.nome,
        destino:this.tituloChat,
        momento:new Date().toLocaleTimeString().substring(0,5)
      }
      this.$store.dispatch('database/inseridor',this.mensagemChat)
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