<template>
  <div id="app">
    <div class="columns">

      <div class="column">
        <ChatBox></ChatBox>
      </div>



      <div class="column">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld  msg="Chat NoName"/>    
      </div>

      <BotaoFlutuante></BotaoFlutuante>

    
    </div>
    

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BotaoFlutuante from './components/BotaoFlutuante.vue'
import ChatBox from './components/ChatBox.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,BotaoFlutuante,ChatBox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
