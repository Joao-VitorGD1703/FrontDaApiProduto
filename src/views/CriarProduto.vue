<script setup>
import { acharProduto, atualizarProduto, postar } from '@/composables/produtos';
import { useGoTo } from '@/composables/Utils';
import HomeLayout from '@/Layout/HomeLayout.vue';
import { createToaster } from '@meforma/vue-toaster';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
let idDaRota = route.params.id;
// Defina o objeto produto como reativo
let objProduto = reactive({
    id: '',
    nome: '',
    descricao: '',
    preco: '',
    qtd: '',
    sku: '',
    marca: '',
});

let save = async (e) => {
    e.preventDefault();
    if(idDaRota == 'new'){
        let res = await postar(objProduto)
        console.log(res);
        createToaster("alterado com sucesso!")
    }else{
        console.log(objProduto);
        let res = await atualizarProduto(objProduto)
        console.log(res);
        createToaster("Criado com sucesso!")
    }
    useGoTo('/')
};

let searchProduto = async (idDaRota) => {
    console.log(idDaRota);
    let resp = await acharProduto(idDaRota)
    console.log(resp);
    
    objProduto.id = resp.id
    objProduto.nome = resp.nome
    objProduto.descricao = resp.descricao
    objProduto.preco = resp.preco
    objProduto.qtd = resp.quantidadeEmEstoque
    objProduto.sku = resp.sku
    objProduto.marca = resp.marca
    

};
onMounted(() => {
    if (route.params.id != 'new') {
        console.log('1');
        searchProduto(idDaRota);
    }else{
        console.log('2');
        
    }
})
</script>

<template>
    <HomeLayout>
        <div class="container w-75 mt-5">
            <h2>Formulário de Produto</h2>
            <!-- Adicione o evento @submit ao formulário -->
            <form @submit="save">
                <div class="mb-3">
                    <label for="id" class="form-label">ID</label>
                    <input type="number" v-model="objProduto.id" class="form-control" id="id" value="1">
                </div>

                <div class="mb-3">
                    <label for="nome" class="form-label">Nome</label>
                    <input type="text" v-model="objProduto.nome" class="form-control" id="nome"
                        value="Produto Exemplo mudei">
                </div>

                <div class="mb-3">
                    <label for="descricao" class="form-label">Descrição</label>
                    <textarea class="form-control" v-model="objProduto.descricao" id="descricao"
                        rows="3">Descrição do produto exemplo.</textarea>
                </div>

                <div class="mb-3">
                    <label for="preco" class="form-label">Preço</label>
                    <input type="number" step="0.01" v-model="objProduto.preco" class="form-control" id="preco"
                        value="99.99">
                </div>

                <div class="mb-3">
                    <label for="quantidadeEmEstoque" class="form-label">Quantidade em Estoque</label>
                    <input type="number" v-model="objProduto.qtd" class="form-control" id="quantidadeEmEstoque"
                        value="10">
                </div>

                <div class="mb-3">
                    <label for="sku" class="form-label">SKU</label>
                    <input type="number" v-model="objProduto.sku" class="form-control" id="sku" value="123456">
                </div>

                <div class="mb-3">
                    <label for="marca" class="form-label">Marca</label>
                    <input type="text" v-model="objProduto.marca" class="form-control" id="marca" value="Marca Exemplo">
                </div>

                <button type="submit" class="btn btn-primary">Salvar</button>
            </form>
        </div>
    </HomeLayout>
</template>


<style scoped></style>
