<template>
<div>
  
  <div v-responsive.lg.xl.md class="modal-card" id="todoChat" >
    <v-row>
      <v-col id='contatosArea' lg="3"> 
        <div id="contatosTitulo">Contatos</div>
        <section>        
        <b-field>
            <v-autocomplete outlined dense prepend-icon="mdi-account-search" v-model="name" :items="Todos" clearable @select="option => selected = option">
            </v-autocomplete>
        </b-field>
        </section>
        <div style="overflow-y: scroll;height:450px">
          <b-menu >
              <b-menu-list v-model="selecionado">      
                <b-menu-item :active="!isActive" id="contatoMenu"  >
                  <template slot="label">          
                    <v-icon>mdi-account</v-icon>Diretores
                  </template>
                  <b-menu-item v-for="diretor in Diretores" :key="diretor" :label="diretor.nome" :value="diretor" @click="nomeChat(diretor)"></b-menu-item>
                </b-menu-item>
                
                <b-menu-item  :active="!isActive" id="contatoMenu">
                  <template slot="label">          
                    <v-icon>mdi-account</v-icon>Instrutores
                  </template>
                  <b-menu-item v-for="instrutor in Instrutores" :key="instrutor" :label="instrutor.nome" @click="nomeChat(instrutor)"></b-menu-item>
                </b-menu-item>

                <b-menu-item :active="!isActive" id="contatoMenu" v-if="perfil!='Instrutor'">
                  <template slot="label">          
                    <v-icon>mdi-account</v-icon>Alunos
                  </template>
                <b-menu-item v-for="aluno in Alunos" :key="aluno" :label="aluno.nome" @click="nomeChat(aluno)"></b-menu-item>
               </b-menu-item>
               <b-menu-item :active="!isActive" id="contatoMenu">
                <template slot="label">          
                <v-icon>mdi-account</v-icon>Atendimento
                </template>
                <b-menu-item v-for="atendente in Atendentes" :key="atendente" :label="atendente.nome" @click="nomeChat(atendente)"></b-menu-item>
               </b-menu-item>                    
               <b-menu-item :active="!isActive" id="contatoMenu">
                <template slot="label">          
                  <v-icon>mdi-account</v-icon>Grupos
                  </template>
                  <b-menu-item @click="grupo()" label="+ Criar grupo"></b-menu-item>
                  <b-menu-item v-for="grupo in Grupos" :key="grupo" :label="grupo.nome" :value="grupo" @click="nomeChat(grupo)"></b-menu-item> 
              </b-menu-item>
              <v-divider></v-divider>
              <b-menu>
                <p style="background:darkblue; color:white; text-align:center;"> Conversas</p>
                <b-menu-list>
                  <b-menu-item v-for="user in Chats" :key="user" :label="user" @click="nomeChat(user)"></b-menu-item>
                  <br>
                </b-menu-list>              
              </b-menu>
            </b-menu-list>             
          </b-menu>
        </div>
      </v-col>
      <v-col id='chatArea'>
        <div id="chatTitulo">{{tituloChat}}</div>
          <div  id="chatMsgs">
            <div v-for="msg in computedChats" :key="msg" >
              <div v-for="m in msg" :key="m" >
                <v-card id="msgRecebida" v-if="m.autor==tituloChat" >
                  {{m.mensagem}}<p id="hora">{{m.autor}} {{m.momento}}</p>                                
                </v-card>         
                <v-card id="msgEnviada" v-if="m.destino==tituloChat" >
                    {{m.mensagem}}<p id="horaEnviada">{{m.autor}} {{m.momento}}</p>                                
                </v-card>
              </div>
            </div>          
          </div>
          <v-divider></v-divider>
          <div id="sender">
            <b-field type="is-primary" >
              <b-input size="is-large" @keyup.enter.native="enviarMensagem" type="search" v-model="msg" expanded rounded/>
              <p class="control">   
              <b-button size="is-large" @click="enviarMensagem" class="button is-success" rounded><b-icon icon="paper-plane" /></b-button>
              </p>          
            </b-field>
          </div>      
      </v-col>
    </v-row>      
  </div>
   <div v-responsive.sm.xm class="modal-card" id="todoChatSmXm" v-if="!false">
    <v-row>
      <v-col id='contatosAreaSmXm' xm='3' sm="3"> 
        <div id="TituloSmXm">Contatos</div>
        <section>        
        <b-field>
            <v-autocomplete outlined dense prepend-icon="mdi-account-search" v-model="name" :items="Todos" clearable @select="option => selected = option">
            </v-autocomplete>
        </b-field>
        </section>
        <div style="overflow-y: scroll;height:200px">
          <b-menu >
              <b-menu-list v-model="selecionado">      
                <b-menu-item :active="!isActive" id="contatoMenuSmXm"  >
                  <template slot="label">          
                    <v-icon>mdi-account</v-icon>Diretores
                  </template>
                  <b-menu-item v-for="diretor in Diretores" :key="diretor" :label="diretor.nome" :value="diretor" @click="nomeChat(diretor)"></b-menu-item>
                </b-menu-item>
                
                <b-menu-item  :active="!isActive" id="contatoMenuSmXm">
                  <template slot="label">          
                    <v-icon>mdi-account</v-icon>Instrutores
                  </template>
                  <b-menu-item v-for="instrutor in Instrutores" :key="instrutor" :label="instrutor.nome" @click="nomeChat(instrutor)"></b-menu-item>
                </b-menu-item>

                <b-menu-item :active="!isActive" id="contatoMenuSmXm" v-if="perfil!='Instrutor'">
                  <template slot="label">          
                    <v-icon>mdi-account</v-icon>Alunos
                  </template>
                <b-menu-item v-for="aluno in Alunos" :key="aluno" :label="aluno.nome" @click="nomeChat(aluno)"></b-menu-item>
               </b-menu-item>
               <b-menu-item :active="!isActive" id="contatoMenuSmXm">
                <template slot="label">          
                <v-icon>mdi-account</v-icon>Atendimento
                </template>
                <b-menu-item v-for="atendente in Atendentes" :key="atendente" :label="atendente.nome" @click="nomeChat(atendente)"></b-menu-item>
               </b-menu-item>                    
               <b-menu-item :active="!isActive" id="contatoMenuSmXm">
                <template slot="label">          
                  <v-icon>mdi-account</v-icon>Grupos
                  </template>
                  <b-menu-item @click="grupo()" label="+ Criar grupo"></b-menu-item>
                  <b-menu-item v-for="grupo in Grupos" :key="grupo" :label="grupo.nome" :value="grupo" @click="nomeChat(grupo)"></b-menu-item> 
              </b-menu-item>
              <v-divider></v-divider>
              <b-menu>
                <p style="background:darkblue; color:white; text-align:center;"> Conversas</p>
                <b-menu-list>
                  <b-menu-item id="contatoMenuSmXm" v-for="user in Chats" :key="user" :label="user" @click="nomeChat(user)"></b-menu-item>
                  <br>
                </b-menu-list>              
              </b-menu>
            </b-menu-list>             
          </b-menu>
        </div>
      </v-col>
      <v-col id='chatAreaSmXm'>
        <div id="TituloSmXm">{{tituloChat}}</div>
          <div  id="chatMsgsSmXm">
            <div v-for="msg in computedChats" :key="msg" >
              <div v-for="m in msg" :key="m" >
                <v-card id="msgRecebida" v-if="m.autor==tituloChat" >
                  {{m.mensagem}}<p id="horaSmXm">{{m.autor}} {{m.momento}}</p>                                
                </v-card>         
                <v-card id="msgEnviada" v-if="m.destino==tituloChat" >
                    {{m.mensagem}}<p id="horaEnviadaSmXm">{{m.autor}} {{m.momento}}</p>                                
                </v-card>
              </div>
            </div>          
          </div>
          
          <div id="senderSmXm">
            <b-field type="is-primary" >
              <b-input size="is-small" @keyup.enter.native="enviarMensagem" type="search" v-model="msg" expanded rounded/>
              <p class="control">   
              <b-button size="is-small" @click="enviarMensagem" class="button is-success" rounded><b-icon icon="paper-plane" /></b-button>
              </p>          
            </b-field>
          </div>      
      </v-col>
    </v-row>      
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
  #horaEnviada{
    font-size: 60%;
    text-align: start;
  }
  #hora{
    font-size: 60%;
  }
  #msgRecebida{
    background: rgb(88, 0, 0);
    color: rgb(255, 255, 255);
    font-size: 150%;
    font-weight: 600;
    letter-spacing: 3px;
    text-align:start;  
    margin-right:40% ;
    border-radius: 50%;
    margin-top: 1%;
    margin-bottom: auto;
    margin-left: 10px;
    border-radius: 25px;  
    padding: 10px;
    position: relative;  
  }
  #msgEnviada{
    background: rgb(0, 128, 21);
    color: rgb(255, 255, 255);
    font-size: 150%;
    font-weight: 600;
    letter-spacing: 3px;
    text-align:end;  
    margin-left:40% ;
    border-radius: 50%;
    margin-top: 1%;
    margin-bottom: auto;
    margin-right: 10px;
    border-radius: 25px;  
    padding: 10px;
    position: relative;  
  }
  #sender{
    position:static;
    top: 1%;
    }
  #chatMsgs{
    height: 420px;
    width: 100%;
    margin-left: -1%;
    overflow-y: scroll;
    background:rgba(0, 150, 7, 0.065); 
    }
  #contatoMenu{
    border-style: inset;
    font-weight: bolder; 
  }

  #contatosTitulo{
    font-weight: bolder;  
    text-align: center;
    font-size: 220%;
    border-bottom: solid;
    border-color: darkred;
    width: 105%;
    color: darkgreen;  
  }
  #chatTitulo{
    font-weight: bolder;  
    text-align:initial;
    font-size: 220%;
    border-bottom: solid;
    margin-left: -2%;
    width: 110%;
    border-color: darkred;
    color: darkgreen;

  }
  #contatosArea{
    height: 700px;
    background:rgba(250, 250, 210, 0.39);
  }
  #chatArea{
    border-left: groove;
    border-color: darkred;
    }
  #todoChat{
    top: 20%;
    width: 100%;    
    height: 120%;
    right: 10%;  
    background-image: url("fundo4.jpg");
    background-repeat:repeat;  
    border-radius: 5%;
    border-style: groove;
  }
  #todoChatSmXm{
    top: 5%;
    width: 150%;    
    height: 130%;
    right: 35%;  
    background-image: url("fundo4.jpg");
    background-repeat:repeat;  
    border-radius: 5%;
    border-style: groove;
  }




  #contatosAreaSmXm{
    height: 700px;
    background:rgba(250, 250, 210, 0.39);
  }
  #TituloSmXm{
    font-weight: bolder;  
    text-align:center;
    font-size: 100%;
    border-bottom: solid;
    margin-left: -2%;
    width: 110%;
    border-color: darkred;
    color: darkgreen;

  }
  #contatoMenuSmXm{
    border-style: inset;
    font-weight: bolder; 
    font-size: 65%;
  }
  #chatAreaSmXm{
    border-left: groove;
    border-color: darkred;
    }

  #msgRecebida{
    background: rgb(88, 0, 0);
    color: rgb(255, 255, 255);
    font-size: 80%;
    font-weight: 600;
    letter-spacing: 3px;
    text-align:start;  
    margin-right:40% ;
    border-radius: 50%;
    margin-top: 1%;
    margin-bottom: auto;
    margin-left: 10px;
    border-radius: 25px;  
    padding: 10px;
    position: relative;  
  }
  #msgEnviada{
    background: rgb(0, 128, 21);
    color: rgb(255, 255, 255);
    font-size: 80%;
    font-weight: 600;
    letter-spacing: 3px;
    text-align:end;  
    margin-left:40% ;
    border-radius: 50%;
    margin-top: 1%;
    margin-bottom: auto;
    margin-right: 10px;
    border-radius: 25px;  
    padding: 10px;
    position: relative;  
  }
  #chatMsgsSmXm{
    height: 150px;
    width: 100%;
    margin-left: -1%;
    overflow-y: scroll;
    background:rgba(0, 150, 7, 0.065); 
    
    }
  #horaEnviadaSmXm{
    font-size: 50%;
    text-align: start;
  }
  #horaSmXm{
  font-size: 50%;
 }
 </style>
<script>

import axios from "axios";

 
export default {
  name: 'Chat',
  data() {
    return {
      
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
      Grupos:[{nome:'Café ',perfil:'Grupo'},{nome:'Instrutores',perfil:'Grupo'},{nome:'Geral',pefil:'Grupo'},{nome:'Grupo de teste ',perfil:'Grupo'}],
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
				var container = document.querySelector("#chatMsgs");
				var scrollHeight = container.scrollHeight;
        container.scrollTop = scrollHeight;

        var container2 = document.querySelector("#chatMsgsSmXm");
				var scrollHeight2 = container2.scrollHeight;
				container2.scrollTop = scrollHeight2;
			},
    incluirGrupo(){      
      var payload=({nome:this.userGroup.nome,integrantes:this.userGroup.integrantes,perfil:'grupo'})
      this.Grupos.push({nome:payload.nome})
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