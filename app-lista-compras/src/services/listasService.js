// ListaService.js
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

}

 const listasService = new ListasService();
 export default listasService;