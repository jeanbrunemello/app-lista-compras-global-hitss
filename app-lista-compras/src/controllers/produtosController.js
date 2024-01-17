import produtoService from '../services/produtosService';

class ProdutosController {
    async buscarProdutos() {
        try {
            const produtosObtidos = await produtoService.buscarProdutos();
            console.log(produtosObtidos)
            return produtosObtidos
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    }

    async apagarProduto(ProdutoId) {
        try {
            await produtoService.apagarProduto(ProdutoId);
        } catch (error) {
            console.error('Erro ao apagar produto:', error);
        }
    }

    async buscarProdutosPorListaId(listaId) {
        try {
            const response = await produtoService.buscarProdutoPorListaId(listaId);
            return response
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
            throw error;
        }
    }

    async editarProduto(produtoId, dados) {
        console.log(`home aqui ${produtoId} e ${dados}`);
        try {
            await produtoService(produtoId, dados);
        } catch (error) {
            console.error('Erro ao editar produto:', error);
        }
    }

    async adicionarProduto(dados) {
        try {
            await produtoService.adicionarProduto(dados);
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
        }
    }
}

export default new ProdutosController();