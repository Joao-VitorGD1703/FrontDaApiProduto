import axios from "axios";


export let listar = async ()=>{
    try {
        const resp = await axios.get('https://localhost:7263/api/Produto')
        console.log(resp.data);
        return resp.data
        
    } catch (error) {
        console.log(error);
        
    }
}
export let postar = async (objProduto)=>{
    try {
        const resp = await axios.post('https://localhost:7263/api/Produto', objProduto)
        console.log(resp.data);
        return resp.data
        
    } catch (error) {
        console.log(error);
        
    }
}
export let acharProduto = async (id)=>{
    try {
        const resp = await axios.get(`https://localhost:7263/api/Produto/${id}`)
        console.log(resp.data);
        return resp.data
        
    } catch (error) {
        console.log(error);
        
    }
}
export let atualizarProduto = async (objeto)=>{
    try {
        console.log(objeto);

        const resp = await axios.put(`https://localhost:7263/api/Produto/${objeto.id}`, objeto)
        console.log(resp.data);
        return resp.data
        
    } catch (error) {
        console.log(error);
        
    }
}
export let deletarProduto = async (id)=>{
    try {
        const resp = await axios.delete(`https://localhost:7263/api/Produto/${id}`)
        console.log(resp.data);
        return resp.data
        
    } catch (error) {
        console.log(error);
        
    }
}