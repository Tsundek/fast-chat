<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>      
      <p id="sidebarUser">
        <b-icon icon="user" size="is-large" />
          {{nome}}
      </p>
      <br><br>
       <div id="botoes">
  
           <div>
            <v-btn block large rounded dark @click="adicionar"><v-icon large color="blue">mdi-plus-thick</v-icon>
                Adicionar 
              </v-btn>
            </div>
            <br>
            <div>
            <v-btn block large rounded dark ><v-icon large color="orange">mdi-exclamation-thick</v-icon>
               Pendentes
            </v-btn>
            </div>
            <br>
            <div>
            <v-btn block large rounded dark ><v-icon large color="green">mdi-check</v-icon>
               Concluidas
            </v-btn>
            </div>
            <br>
            <div>
            <v-btn block large rounded dark ><v-icon large color="red">mdi-exclamation-thick</v-icon>
              Atrasados
            </v-btn>
            </div>
               <br>
            <div>
            <v-btn block large rounded dark @click="logout()"><v-icon large color="red">mdi-logout</v-icon>
              Logout
            </v-btn>
            </div>
          </div>
    </v-navigation-drawer>

    <v-app-bar color="green" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title><h1>Atividades</h1></v-toolbar-title>
    </v-app-bar>
      <br>
    <v-main>
      
      <v-container>
        <v-row full>
          <v-col
             v-for="(item) in computedAtividades" :key="item" cols="4" >
             <br> <br>
             
            <v-card width='1000' elevation="20" id="todoCard">
              <v-card-title id="atividade">
                <p class="text--primary" :id="item.status">
                 {{item.titulo}} 
                  <v-btn icon @click="concluir(item)" v-if="item.status!=='concluido'"> <v-icon large color="green" >mdi-check</v-icon></v-btn>
                  <v-btn icon @click="reabrir(item)" v-else> <v-icon large color="green" >mdi-restart</v-icon></v-btn>                  
                  <v-btn icon @click="apagar(item)" > <v-icon large color="red" >mdi-delete</v-icon></v-btn> 
                  <br>
                </p>          
              </v-card-title>
              <v-card-text><p style="font-size:200%;">{{item.atividade}}</p>
                <footer id="prazoCard">Prazo: {{item.prazo}}</footer>
              </v-card-text>
            </v-card>

          </v-col>
        </v-row>
        
      </v-container>
    </v-main>
          <b-modal v-responsive.sm.xm v-model="isComponentModalActive" trap-focus destroy-on-hide>
            <v-row > <v-col >
           <div class="modal-card " id="cardSm">
                  <header class="modal-card-head">
                      <p class="modal-card-title">Inserir Atividades</p>
                      <button type="button" class="delete" @click="adicionar"/> 
                  </header>
                
                    <section class="modal-card-body">
                        <b-field label="Responsavel" label-position="on-border" type="is-primary" >
                      <b-autocomplete size='is-small' v-model="responsavel" :data="Todos" clearable @select="option => selected = option" placeholder="Buscar...">
                      
                      </b-autocomplete>
                      </b-field>
                      <b-field label="Titulo" label-position="on-border" type="is-primary" >
                            <b-input v-model="titulo" size='is-small' ></b-input>
                        </b-field>

                        <b-field label="Atividade" label-position="on-border" type="is-primary">
                            <b-input maxlength="200" size="is-small" type="textarea" v-model="atividade"></b-input>
                        </b-field> 
                        </section></div>
                        </v-col><v-col><div>
                  <div id="calendarioSm">
                    
                    <b-datepicker  placeholder="Type or select a date..." icon="calendar-today" inline size="is-small" v-model="prazo"></b-datepicker>
                  </div>              
              
            </div>
            
            </v-col>
          </v-row>
           <b-button type="is-success" expanded rounded size="is-medium" @click="inserirAtividade">Adicionar</b-button>
        </b-modal>    

    <b-modal v-responsive.lg.xl.md v-model="isComponentModalActive" trap-focus destroy-on-hide>
      <div class="modal-card " id="card">
              <header class="modal-card-head">
                  <p class="modal-card-title">Inserir Atividades</p>
                  <button type="button" class="delete" @click="adicionar"/>       
                  
                                   
              </header>
            
              <section class="modal-card-body">
                  <b-field label="Responsavel" label-position="on-border" type="is-primary" >
                <b-autocomplete v-model="responsavel" :data="Todos" clearable @select="option => selected = option" placeholder="Buscar...">
                
                </b-autocomplete>
                </b-field>
                <b-field label="Titulo" label-position="on-border" type="is-primary" >
                      <b-input v-model="titulo" ></b-input>
                  </b-field>

                  <b-field label="Atividade" label-position="on-border" type="is-primary">
                      <b-input maxlength="400" size="is-large" type="textarea" v-model="atividade"></b-input>
                  </b-field> 
            <div id="calendario">
              <p>Prazo</p>
              <b-datepicker  placeholder="Type or select a date..." icon="calendar-today" inline size="is-medium" v-model="prazo" show-week-number></b-datepicker>
            </div>
          <b-button type="is-success" rounded size="is-large" @click="inserirAtividade">Adicionar</b-button>
        </section>
      </div>
  </b-modal>    
  </v-app>
</template>

<style>
#cardSm{
  height: 100%;
  width: 100%;
  text-align: center;
}
#todoCard{
 min-height: 150%;

}
#concluido{
  border-style:outset;
  border-color: rgb(0, 250, 0);  
  width: 100%;
  text-align: center;
  font-size: 110%;
  font-weight: bolder;
  
}
#pendente{
  border-style: outset;
  border-color: rgb(255, 230, 0);  
  width: 100%;
  text-align: center;
  font-size: 110%;
  font-weight: bolder;
}
#atrasado{
  border-style: outset;
  border-color: rgba(255, 0, 0, 0.815);  
  width: 100%;
  text-align: center;
  font-size: 110%;
  font-weight: bolder;
}
#titulo{
  text-align: left;
  font-size: 150%;
  font-weight: bolder;
  height:60%;
}
#botoes{
  right:1%;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0% 0%;
  grid-template-areas:
    ". . . "
    ". . . "
    ". . . ";
}

#sidebarUser{
  text-align: center;
  font-size: 150%;
}

#prazoCard{
  text-align: right;
  font-size: 120%;
  font-weight: bolder;   
}
#atividadeCard{
  text-indent: 5%;  
  
}
#cardTitulo{  
  height: 10px;
  font-size: 100%;
  background:  rgb(255, 255, 255);
  left: 70%;
  
}
#atividades{
  left:20%;
  width: 80%;
  height: 90%;
  max-height: 90%;
  background:  rgb(255, 255, 255);  
  border-style:groove;
  border-color:rgb(28, 211, 28);
  

}
h1{
  text-align: center;
  font-size: 300%;  
  color: aliceblue;
  
}
#add{
  left: 7%;
  top: 5%;
  text-shadow: 25%;
  position: relative;
  
}
#card{
  width: 60%;
  text-align: center;
}
#calendario{
  border-style: groove;
  font-size: 180%;
}


</style>
          
  <script>
import axios from "axios";
export default {
  name: 'Dashboard',
  data() {
    
    return {   drawer: null,   
      nome:'',
      login:'',
      perfil:'',
      isComponentModalActive:false,
      prazo: new Date(),
      atividades:[{titulo:'Curso recliclagem',atividade:"Curso de reciclagem com foco nas novas normas de transito.",prazo:'25/12/2019',status:"pendente"},
      {titulo:'Reunião diretores',atividade:"Reunião para tratar de promoções.",prazo:'19/11/2020',status:"concluido"},
      {titulo:'Encerramento ',atividade:"Organização da confraternização da equipe.",prazo:'25/12/2019',status:"atrasado"}],
      titulo:'',
      atividade:'',
      Todos:[],
      responsavel:''
    
    }
  },
  created() {    
    this.nome=localStorage.nome
    this.login=localStorage.login
    this.perfil=localStorage.perfil
    this.todos()
    this.$store.dispatch('database/bindAtividades',this.nome)
  },
methods: {
  logout(){
    this.$router.replace('/')   
  },
   todos(){
      axios.get().then(res=>{
        res.data.forEach(element=>{
          this.Todos.push(element.nome)
         })
   
        this.Todos=this.Todos.sort()
      })
      
      },
  reabrir(i){
    var pay = ({id:new Date().getTime(),titulo:i.titulo,atividade:i.atividade,prazo:i.prazo,
   status:"pendente",responsavel:i.responsavel,criador:i.criador})
   this.apagar(i)
   this.$store.dispatch('database/inserirAtividade',pay)

  },
  concluir(i){    
    var pay = ({id:new Date().getTime(),titulo:i.titulo,atividade:i.atividade,prazo:i.prazo,
   status:"concluido",responsavel:i.responsavel,criador:i.criador})
   this.apagar(i)
   this.$store.dispatch('database/inserirAtividade',pay)
   
  },
  apagar(i){
     this.$store.dispatch('database/removerAtividade',i)
  },
 adicionar(){
   this.isComponentModalActive=!this.isComponentModalActive
 },
 inserirAtividade(){
   var payload=({id:new Date().getTime(),titulo:this.titulo,atividade:this.atividade,prazo:this.prazo.toLocaleDateString(),
   status:"pendente",responsavel:this.responsavel,criador:this.nome})
   this.$store.dispatch('database/inserirAtividade',payload)
   this.adicionar()
   this.titulo=''
   this.atividade=''
   this.prazo=new Date()
   this.responsavel=''  
 } 
},

computed: {
     computedAtividades(){      
       return this.$store.getters['database/GetAtividades']
        }
        

   }
}
</script>

