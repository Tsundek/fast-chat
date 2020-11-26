<template>

<div>
     
                       
<Dashboard />
                        
<Chat  id="chat" v-if="exibeChat" />
<v-btn v-responsive.sm.xm id="btnSm" elevation="24" fab large @click="abreChat"><v-icon x-large>mdi-chat</v-icon></v-btn>
<v-btn v-responsive.lg.xl.md id="btn" elevation="24" fab large @click="abreChat"><v-icon x-large>mdi-chat</v-icon></v-btn>
 
  
</div>
</template>
<style>
#btnSm{
  position: fixed;
  right: 5%;
  top: 10%;
}
#btn{
  left: 20%;
  bottom: 150px;
}
#chat{
  position:absolute;
  float: left;
  left: 25%;
  top: 15%;
  height: 50%;
  width: 50%;
  }

</style>

<script>
import Dashboard from "../components/Dashboard.vue"
import Chat from "../components/Chat.vue"
export default {
  name: 'TelaDashboard',
  components:{
    Dashboard,
    Chat
  },
  data() {
    return {    
      exibeChat:false  
    
    }
  },
  created() {
    
    
                    
   
  },
  methods: {
    abreChat(){
      this.exibeChat=!this.exibeChat
      
    }
  },
  


}
</script>

