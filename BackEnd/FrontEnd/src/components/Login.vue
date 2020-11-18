<template>

<div class="card column is-half is-offset-one-quarter">  
  
  <div id="titulo"><strong>FastChat</strong></div>
  <form v-on:keyup.enter="validar()">
    <div >    
      <br>
      <b-field type="is-primary" label="Login" custom-class="is-large">
        <b-input rounded  v-model="login" size="is-large"></b-input>
      </b-field>
    
      <b-field type="is-primary" label="Senha" custom-class="is-large" >
        <b-input rounded type="password" v-model="senha" size="is-large"  v-on:keyup.enter="validar"></b-input>     
      </b-field>
      <p>
        <b-button class="button is-success" @click="validar" rounded>Confirmar</b-button>
      </p>
  </div>
   </form>
 </div>
 

</template>

<script>
import axios from "axios";



export default {
  name: 'Login',
  components:{

  },
  data() {
    return {
      login:'',
      senha:'',
      usuario:'a',
      
    }
  },

  methods: {
    validar: function(){
      axios.get('/login/'+this.login).then(res => {
        
          
          if (this.senha==res.data[0].senha) {
            this.usuario = res.data
           
            this.$router.replace('/Dashboard')      
          }
          localStorage.nome= this.usuario[0].nome
          localStorage.perfil = this.usuario[0].perfil
          localStorage.login = this.usuario[0].login
          

    
        
      })
      },
    
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
template{
  background: black;
}
.card{
  background:rgba(0, 98, 163, 0.281);
  height: 45%;  
  position: fixed;
  top: 30%;
  border-radius: 5%;
  border-style:groove;
}
#titulo{
  text-align:center;
  font-style: italic;
  
  height: 25%;
  font-size: 350%;
  border-radius: 5%;
  border-style:groove;
  color: rgb(15, 0, 49);
  
}
</style>
