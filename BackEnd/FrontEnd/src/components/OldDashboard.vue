<template>
<section>
    
  <div class="columns is-mobile box">
     <div class="column">
        <b-menu>
    <b-menu-list label="Contatos">
      
      <b-menu-item pack="fas" icon="settings" :active="isActive" expanded>
        <template slot="label" slot-scope="props">Funcionarios<b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon></template>
        <b-menu-item><template slot="label">Instrutor 1 </template></b-menu-item>
        <b-menu-item><template slot="label">Instrutor 2 </template></b-menu-item>
        <b-menu-item><template slot="label">Diretor </template></b-menu-item>
      </b-menu-item>
      <b-menu-item icon="settings" :active="isActive" expanded>
        <template slot="label" slot-scope="props">
          Alunos
          <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
        </template>
        <b-menu-item><template slot="label">Instrutor 1 </template></b-menu-item>
        <b-menu-item><template slot="label">Instrutor 2 </template></b-menu-item>
        <b-menu-item><template slot="label">Diretor </template></b-menu-item>
      </b-menu-item>
      </b-menu-list>
  </b-menu>
     </div>
     
     <div class="column is-half is-offset-one-quarter " >
       <div>Chat NoName 
          
      <div class="tile is-parent">
        <article class="tile is-child notification is-warning">
          <p class="title">Area do chat</p>          
          <figure class="image is-4by3">
            espaço vazio para dar altura
          </figure>
        </article>
        </div>      
          <footer class="footer"> <b-input></b-input></footer>                    
        </div>      
      </div>
      
        
</div>
     
                       
                         

                        
                    
                

</section>
</template>

<script>
export default {
  name: 'Dashboard',
  
  }
</script>
<style scoped>
div{
  background-color:lightgray;
}
</style>
