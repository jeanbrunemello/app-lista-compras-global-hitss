// ListaService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
const PATH = 'produtos'

class ProdutoService {

  async buscarListas() {
    try {
      const response = await axios.get(`${BASE_URL}/${PATH}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar listas:', error);
      throw error;
    }
  }

  async buscarProdutoPorListaId(id) {
    try {
      const response = await axios.get(`${BASE_URL}/${PATH}/${id}`);
      return response.data
    } catch (error) {
      console.error('Erro ao buscar listas:', error);
      throw error;
    }
  }

  async adicionarLista(dados) {
    try {
      const response = await axios.post(`${BASE_URL}/${PATH}`, dados);
      return response.data;
    } catch (error) {
      console.error(`Erro ao criar lista: ${dados.lista_nome}`, error);
      throw error;
    }
  }

  async editarLista(id, dados) {
    try {
      const response = await axios.patch(`${BASE_URL}/${PATH}/${id}`, dados);
      console.log(`service aqui ${id} e ${dados}`)
      return response.data;
    } catch (error) {
      console.error(`Erro ao apagar lista: ${id}`, error);
      throw error;
    }
  }

  async apagarLista(id) {
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