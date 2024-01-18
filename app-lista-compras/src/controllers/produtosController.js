import ProdutoService from '../services/produtosService';

class ProdutosController {

    async buscarProdutos() {
        try {
            const produtosObtidos = await ProdutoService.buscarProdutos();
            console.log(produtosObtidos)
            return produtosObtidos
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    }

    async buscarProdutosPorListaId(listaId) {
        try {
            const response = await ProdutoService.buscarProdutosPorListaId(listaId);
            return response
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
            throw error;
        }
    }

    async adicionarProduto(dados) {
        try {
            await ProdutoService.adicionarProduto(dados);
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
        }
    }

    async editarProduto(produtoId, dados) {
        console.log(`home aqui ${produtoId} e ${dados}`);
        try {
            await ProdutoService.editarProduto(produtoId, dados);
        } catch (error) {
            console.error('Erro ao editar produto:', error);
        }
    }

    async apagarProduto(ProdutoId) {
        try {
            await ProdutoService.apagarProduto(ProdutoId);
        } catch (error) {
            console.error('Erro ao apagar produto:', error);
        }
    }
}

export default new ProdutosController();