// ListaService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
const PATH = 'produtos'

class ProdutoService {

  async buscarProdutos() {
    try {
      const response = await axios.get(`${BASE_URL}/${PATH}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      throw error;
    }
  }

  async buscarProdutoPorListaId(id) {
    try {
      const response = await axios.get(`${BASE_URL}/${PATH}/${id}`);
      return response.data
    } catch (error) {
      console.error(`Erro ao buscar produtos da lista ${id}:`, error);
      throw error;
    }
  }

  async adicionarProduto(dados) {
    try {
      const response = await axios.post(`${BASE_URL}/${PATH}`, dados);
      return response.data;
    } catch (error) {
      console.error(`Erro ao criar lista: ${dados.lista_nome}`, error);
      throw error;
    }
  }

  async editarProduto(id, dados) {
    try {
      const response = await axios.patch(`${BASE_URL}/${PATH}/${id}`, dados);
      console.log(`service aqui ${id} e ${dados}`)
      return response.data;
    } catch (error) {
      console.error(`Erro ao apagar lista: ${id}`, error);
      throw error;
    }
  }

  async apagarProduto(id) {
    try {
      const response = await axios.delete(`${BASE_URL}/${PATH}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao apagar lista: ${id}`, error);
      throw error;
    }
  }
}

const produtoService = new ProdutoService();
export default produtoService;