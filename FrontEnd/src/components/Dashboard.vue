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
            <v-btn block large rounded dark ><v-icon large color="red">mdi-logout</v-icon>
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
             v-for="item in atividades" :key="item" cols="4" >
             <br> <br>
            <v-card width='1000' elevation="20">
              <v-card-title>
                <p class="display-1 text--primary" id="prazoCard">
                  <v-btn icon @click="adicionar" > <v-icon large color="green" >mdi-check</v-icon></v-btn>
                  <v-btn icon @click="adicionar"> <v-icon large color="red" >mdi-delete</v-icon></v-btn>      
                  <br>{{item.titulo}}
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

    <b-modal v-model="isComponentModalActive" trap-focus destroy-on-hide>
      <div class="modal-card " id="card">
              <header class="modal-card-head">
                  <p class="modal-card-title">Inserir Atividades</p>
                  <button type="button" class="delete" @click="adicionar"/>       
                                   
              </header>
              <section class="modal-card-body">
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

export default {
  name: 'Dashboard',
  data() {
    
    return {   drawer: null,   
      nome:'',
      login:'',
      perfil:'',
      isComponentModalActive:false,
      prazo: new Date(),
      atividades:[{titulo:'Curso recliclagem',atividade:"Curso de reciclagem com foco nas novas normas de transito.",prazo:'25/12/2019'},
      {titulo:'Curso recliclagem',atividade:"Curso de reciclagem com foco nas novas normas de transito.",prazo:'25/12/2019'},
      {titulo:'Curso recliclagem',atividade:"Curso de reciclagem com foco nas novas normas de transito.",prazo:'25/12/2019'}],
      titulo:'',
      atividade:''  
    
    }
  },
  created() {    
    this.nome=localStorage.nome
    this.login=localStorage.login
    this.perfil=localStorage.perfil
  },
methods: {
 alerta(){
   alert("ok")
 },
 adicionar(){
   this.isComponentModalActive=!this.isComponentModalActive
 },
 inserirAtividade(){
   this.atividades.push({titulo:this.titulo,atividade:this.atividade,prazo:this.prazo.toLocaleDateString()}),
   this.adicionar()
   this.titulo=''
   this.atividade=''
   this.prazo=new Date()
   
   

 }
 
}
}
</script>

