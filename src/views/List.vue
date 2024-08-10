<script setup>
import { onMounted, ref } from 'vue';
import HomeLayout from '../Layout/HomeLayout.vue';
import { deletarProduto, listar } from '../composables/produtos';
import { useGoTo } from '@/composables/Utils';

const produtosTable = ref([]);

const listando = async () => {
    try {
        const teste = await listar();
        console.log(teste);
        produtosTable.value = teste;  // Atualize a propriedade `value` da referência
        console.log(produtosTable.value);
    } catch (error) {
        console.error("Erro ao listar produtos:", error);
    }
};

const deletar =async(id)=>{
  let resp = await deletarProduto(id)
  console.log(resp);
  listando( )
  
}

onMounted(async () => {
    await listando();
});
</script>

<template>
    <HomeLayout>
        <div class="container-75 p-4">
            <button type="button" class="btn btn-success" @click="useGoTo('/criacao-produto/new')">Adicionar</button>
            <table class="table mt-2">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Preco</th>
                        <th scope="col">Code SKU</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in produtosTable" :key="index">
                        <th scope="row">{{ item.id }}</th>
                        <td>{{ item.nome }}</td>
                        <td>{{ item.quantidadeEmEstoque }}</td>
                        <td>{{ item.preco }}</td>
                        <td>{{ item.sku }}</td>
                        <td>
                            <button type="button" class="btn btn-primary"  @click="useGoTo(`/criacao-produto/${item.id}`)">Editar</button>|
                            <button type="button" class="btn btn-danger" @click="deletar(item.id)">Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </HomeLayout>
</template>

<style scoped></style>
