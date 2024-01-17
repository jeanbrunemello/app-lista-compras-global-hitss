import ListasService from '../services/listasService';

class ListasController {
    async buscarListas() {
        try {
            const listasObtidas = await ListasService.buscarListas();
            console.log(listasObtidas)
            return listasObtidas
            // console.log("DADOS RECEBIDOS:", listasObtidas);
            // setListas(listasObtidas);
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

    async apagarLista(listaId, buscarListas) {
        try {
            await ListasService.apagarLista(listaId);
            buscarListas();
        } catch (error) {
            console.error('Erro ao apagar lista:', error);
        }
    }

    async editarLista(listaId, dados, buscarListas) {
        console.log(`home aqui ${listaId} e ${dados}`);
        try {
            await ListasService.editarLista(listaId, dados);
            buscarListas();
        } catch (error) {
            console.error('Erro ao editar lista:', error);
        }
    }

    async adicionarLista(dados, buscarListas) {
        try {
            await ListasService.adicionarLista(dados);
            buscarListas();
        } catch (error) {
            console.error('Erro ao adicionar lista:', error);
        }
    }
}

export default new ListasController();