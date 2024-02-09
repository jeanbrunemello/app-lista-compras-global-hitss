import ListasService from '../services/listasService';

class ListasController {
    async buscarListas() {
        try {
            const listasObtidas = await ListasService.buscarListas();
            console.log(listasObtidas)
            console.log("AQQQQQQQ")
            return listasObtidas
        } catch (error) {
            console.error('Erro ao buscar listas:', error);
        }
    }

    async buscarListaPorId(listaId) {
        try {
            const lista = await ListasService.buscarListaPorId(listaId);
            console.log(lista)
            return lista.data
        } catch (error) {
            console.error('Erro ao buscar listas:', error);
        }
    }

    async apagarLista(listaId) {
        try {
            await ListasService.apagarLista(listaId);
        } catch (error) {
            console.error('Erro ao apagar lista:', error);
        }
    }

    async editarLista(listaId, dados) {
        try {
            await ListasService.editarLista(listaId, dados);
        } catch (error) {
            console.error('Erro ao editar lista:', error);
        }
    }

    async adicionarLista(dados) {
        try {
            await ListasService.adicionarLista(dados);
        } catch (error) {
            console.error('Erro ao adicionar lista:', error);
        }
    }
}

export default new ListasController();