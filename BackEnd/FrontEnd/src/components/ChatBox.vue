  
<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-6 my-5">

                <div class="card">
                    <h2 class="card-header bg-success rounded text-white">Chat E-Condutor</h2>
                    <div class="card-body">
                        <div class="form-group">
                            <b-input class="form-control mr-sm-2" type="search" placeholder="Pesquisar"/>
                            <p class="text-center font-weight-bold mt-5 mb-4">Dúvidas frequentes</p>
                            <p class="text-center text-secondary">Clique no assunto abaixo para verificar a melhor solução.</p>
                            <div class="list-group my-5">
                                <!---->
                                <a class="list-group-item list-group-item-action" href="#">1 - Segunda via de boleto</a>
                                <a class="list-group-item list-group-item-action" href="#">2 - Verificar hora e dia das minhas aulas</a>
                                <a class="list-group-item list-group-item-action" href="#">3 - Agendar aula</a>
                                <a class="list-group-item list-group-item-action" href="#">4 - Outro</a>
                            </div>
                            <label class="font-weight-bold my-3">Nenhuma das opções?</label>
                            <button type="button" class="btn-lg btn-block btn-success rounded">Clique aqui para falar com um atendente</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ChatBox',
  
  }
</script>

