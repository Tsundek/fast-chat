<template>

  
  <div>
 

    

<div class="columns is-gapless">
<div class="column is-1">
<br>


<section v-if="true">
    <b-sidebar  type="is-light"  width='500px' fullheight open  ><br>
      <p id="sidebarUser">
        <b-icon icon="user" size="is-large" />
          {{nome}}
      </p>
      
        <br>
        
        <b-field style="font-weight: bolder; font-size:300%">Atividades</b-field>        
          <br>        
         <div>
              <b-button class="button is-dark" expanded  inverted @click="adicionar">  
                <b-icon pack="fas" icon="plus-circle" size="is-medium" style="color:green" />
                <span style="font-weight:bolder; font-size:150%"> Adicionar</span>
            </b-button>
            <br><br>
           <b-button class="button is-dark" expanded inverted>  
                <b-icon pack="fas" icon="exclamation-circle" size="is-medium" style="color:yellow" />
                <span style="font-weight:bolder; font-size:150%"> Pendente</span>
            </b-button>
            <br><br>
            <b-button class="button is-dark" expanded inverted>  
                <b-icon pack="fas" icon="check-circle" size="is-medium" style="color:green" />
                <span style="font-weight:bolder; font-size:150%"> Concluidos</span>
            </b-button>   
            <br><br>
            <b-button class="button is-dark" expanded inverted>  
                <b-icon pack="fas" icon="exclamation-circle" size="is-medium" style="color:red" />
                <span style="font-weight:bolder; font-size:150%"> Atrasados</span>
            </b-button>   
            <br><br>
            <b-button class="button is-dark" expanded inverted style="top:100%">  
                <b-icon pack="fas" icon="sign-out-alt" size="is-medium" />
                <span style="font-weight:bolder; font-size:150%"> logout</span>
            </b-button>      
          </div>
          
          
    </b-sidebar>
    
</section>
</div>
<div class="column is-11">

<h1>Atividades</h1>
<section  style="width: auto">        
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
</section>
<br>

<div class="container">
    <div  v-for="item in atividades" :key="item">
      <div class="modal-card " id="atividades">
              <header class="modal-card-head" id="cardTitulo">                  
                <b-button class="button is-success" inverted style="top:100%">  
                  <b-icon pack="fas" icon="check" size="is-medium" />
                </b-button>  

                <b-button class="button is-danger" inverted style="top:100%">  
                  <b-icon pack="fas" icon="trash" size="is-medium" />
                </b-button>
              </header>
              <p class="modal-card-title">{{item.titulo}}</p>
              <section class="modal-card-body" id="atividadeCard" >
                <b-field type="is-primary">{{item.atividade}}</b-field>
              </section>
              <footer class="modal-card-foot"><b-field type="is-primary" id="prazoCard">{{item.prazo}}</b-field></footer>
      </div>
      <br>
    </div>
  </div>
    </div>
</div>
</div>
</template>


<style>
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
  background: rgb(255, 255, 255);  
  font-size: 120%;
  font-weight: bolder;
  text-indent: 200%;
  
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
      atividades:[{titulo:'Curso recliclagem',atividade:"Curso de reciclagem com foco nas novas normas de transito.",prazo:'25/12/2019'},
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

