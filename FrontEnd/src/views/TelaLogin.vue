<template>
    <div id="login">
        <div>
            <Login/>
        </div>
    </div>
</template>

<script>
import Login from  '../components/Login.vue'


export default {
  name: 'TelaLogin',
  components: {
    
    Login
  },
   data(){
      return {
          ExibirChat:false,
          ExibirDashboard:false,          
          bgColor: '#009900',
          position: 'bottom-left',
        
          
          fabActions: [
              {
                  icon:'dashboard',
                  name:'dashboard'
              },
             {             
                icon: 'chat',
                name: 'chatBox',                
              }
          ],
          users:['a']
      }
  },
  created(){
      this.Exibir=false


      //this.bd()
  },

  methods:{
      dashboard(){
         // alert('dashboard clicado');
          this.ExibirDashboard=!this.ExibirDashboard
        
      },
      chatBox(){
         // alert('chat clicado');
          this.ExibirChat=!this.ExibirChat
         
          },
     /* bd(){
        axios.get('/2').then(res => {
          
          this.users.push(res.data)
        })
      }*/
  }
    
}
</script>

<style>
#login{
  text-align: center;  
  background: gray;
}
</style>
