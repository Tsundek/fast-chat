<template>

  
  <div>
 

    

<div class="columns is-gapless">
<div class="column">




<section v-if="true">
    <b-sidebar  type="is-light"  width='500px' fullheight open  >
      <div  class="p-1">

        <b-icon icon="user" size="is-large"> </b-icon>{{nome}}
        </div><br>
        <b-field label="Atividades" custom-class="is-medium has-text-dark"></b-field>
        
          <br>          
         
          <b-menu-item icon="exclamation-circle" label="Pendentes" @click="alerta"></b-menu-item>
          <br>
          <b-menu-item icon="check-circle"  label="Concluidas" ></b-menu-item>
          <br>
          <b-menu-item icon="user" label="Avisos" ></b-menu-item>            
          <br>
          <b-menu-item icon="sign-in-alt" label="Logout" tag="router-link" to="/login"></b-menu-item>
    </b-sidebar>
    
</section>
</div>
<div class="column is-11">

<h1>Atividades</h1>
<section  style="width: auto">
        <b-button id="add" rounded type="is-success" icon-left="plus-circle" inverted size="is-large" @click="adicionar" ></b-button>
          <b-modal v-model="isComponentModalActive" trap-focus destroy-on-hide>
              <div class="modal-card " id="card">
                      <header class="modal-card-head" id="cardTitulo">
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
</section>
<br>


    <div v-for="item in atividades" :key="item">
      <div class="card" id="atividades">
        <p id="tituloCard">{{item.titulo}}</p>
        <p id="atividadeCard">{{item.atividade}}</p>
        <p id="prazoCard">{{item.prazo}}</p>
      </div>
    </div>

    <v-car>aaaaaaaaaaaaaaaaaaaaa</v-car>


    
</div>


</div>

</div>
</template>


<style>


#prazoCard{
  background: rgb(226, 226, 0);
  text-align: right;
  color: blue;
  font-size: 120%;
  font-weight: bolder;
}
#atividadeCard{
  text-indent: 5%;
}
#tituloCard{
  color: blue;
  font-size: 150%;
  font-weight: bolder;
  background: rgba(255, 255, 0, 0.808);
  text-align: center;
}
#atividades{
  left:10%;
  width: 20%;
  min-height: 250%;
  max-height: 250%;
  background: lightgoldenrodyellow;
}
  h1{
    text-align: center;
    font-size: 350%;
    font-style: oblique;
    color: aliceblue;
    background: rgb(0, 0, 88);
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
    
    return {      
      nome:'',
      login:'',
      perfil:'',
      isComponentModalActive:false,
      prazo: new Date(),
      atividades:[{titulo:'Curso recliclagem',atividade:"Curso de reciclagem com foco nas novas normas de transito.",prazo:'25/12/2019'}],
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
   this.atividades.push({titulo:this.titulo,atividade:this.atividade,prazo:this.prazo}),
   this.adicionar()
   this.titulo=''
   this.atividade=''
   this.prazo=new Date()
   console.log(this.atividades)
   

 }
 
}
}
</script>

