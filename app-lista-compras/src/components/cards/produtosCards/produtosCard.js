import React, { useEffect, useState } from 'react';
import css from './style.css'
import BotaoDelete from '../../botoes/botaoDelete/botaoDelete';
import BotaoEditar from '../../botoes/botaoEditar/botaoEditar';
import { useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import produtosController from '../../../controllers/produtosController';
import FormDialog from '../../modais/formDialog/formDialog';
import Button from '@mui/material/Button';


function ProdutosCard({ obterListaId }) {

  const { id: listaId } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [todosMarcados, setTodosMarcados] = useState(false); // Estado para controlar se todos os ícones estão marcados

  useEffect(() => {
    montarCards();
    obterListaId(listaId)
  }, []);

  async function montarCards() {
    try {
      const response = await produtosController.buscarProdutosPorListaId(listaId)
      setProdutos(response);
      setProdutos(response.map(item => ({ ...item, iconeComprado: item.obtido_produto })));
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const desmarcarTodos = () => {
    setProdutos(produtos => produtos.map(produto => ({
      ...produto,
      iconeComprado: false, // Define o valor de iconeComprado para o valor de todosMarcados
      obtido_produto: false // Define o valor de obtido_produto para o valor de todosMarcados
    })));
  }

  const handleClick = (index) => {

    setProdutos(produtos => produtos.map((produto, i) => i === index ? {
      ...produto,
      iconeComprado: !produto.iconeComprado,
      obtido_produto: produto.iconeComprado
    } : produto));

    const produtoAtualizado = { obtido_produto: produtos[index].obtido_produto }
    produtosController.editarProduto(produtos[index].id, produtoAtualizado);
  };

  return (
    <div className='card-container'>
      <FormDialog textoBtn={'add'} produto={true} listaId={listaId} montarCards={montarCards}></FormDialog>
      {produtos.map((produto, index) => (
        <div key={produto.id} className='card'>
          <div className='card-icone' onClick={() => handleClick(index)}>
            {produto.iconeComprado ? <ShoppingCartIcon className='card-icone_img' /> : <AddShoppingCartIcon className='card-icone_img' />}
          </div>
          <div className='card-conteudo'>
            <p className='card-conteudo_nome'>{produto.nome_produto}</p>
            <div className='card-conteudo_container'>
              <p>Qnt: {`${produto.quantidade_produto}`}</p>
              <p>R$ {`${produto.preco_produto}`}</p>
            </div>
          </div>
          <div className='botao-container'>
            <div className='botao-edit'>
              <BotaoEditar produto={produto} montarCards={montarCards} ></BotaoEditar>
            </div>
            <div className='botao-delete'>
              <BotaoDelete listaId={listaId} produtoId={produto.id} montarCards={montarCards}></BotaoDelete>
            </div>
          </div>
        </div>
      ))}
            <div className='desmarcar-todos' onClick={desmarcarTodos}>
            <Button variant="contained"><AddShoppingCartIcon className='desmarcar-todos_img'/>
        <p>Desmarcar</p></Button>
        
      </div>
    </div>
  );
}

export default ProdutosCard;
