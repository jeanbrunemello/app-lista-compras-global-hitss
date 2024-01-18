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

  async buscarProdutosPorListaId(Listaid) {
    try {
      const response = await axios.get(`${BASE_URL}/${PATH}/${Listaid}`);
      return response.data
    } catch (error) {
      console.error(`Erro ao buscar produtos da lista ${Listaid}:`, error);
      throw error;
    }
  }

  async adicionarProduto(dados) {
    try {
      const response = await axios.post(`${BASE_URL}/${PATH}`, dados);
      return response.data;
    } catch (error) {
      console.error(`Erro ao criar produto: ${dados.produto_nome}`, error);
      throw error;
    }
  }

  async editarProduto(produtoId, dados) {
    try {
      const response = await axios.patch(`${BASE_URL}/${PATH}/${produtoId}`, dados);
      console.log(`service aqui ${produtoId} e ${dados}`)
      return response.data;
    } catch (error) {
      console.error(`Erro ao apagar produto: ${produtoId}`, error);
      throw error;
    }
  }

  async apagarProduto(produtoId) {
    try {
      const response = await axios.delete(`${BASE_URL}/${PATH}/${produtoId}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao apagar produto: ${produtoId}`, error);
      throw error;
    }
  }
}

const produtoService = new ProdutoService();
export default produtoService;