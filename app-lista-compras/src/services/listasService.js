import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
const PATH = 'listas'

class ListasService {

  async buscarListas() {
    try {
      const response = await axios.get(`${BASE_URL}/${PATH}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar listas:', error);
      throw error;
    }
  }

  async buscarListaPorId(id) {
    try {
      const response = await axios.get(`${BASE_URL}/${PATH}/${id}`);
      return response
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

const listasService = new ListasService();
export default listasService;