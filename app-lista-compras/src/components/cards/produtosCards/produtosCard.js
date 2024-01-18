import React, { useEffect, useState } from 'react';
import css from './style.css'
import BotaoDelete from '../../botoes/botaoDelete/botaoDelete';
import BotaoEditar from '../../botoes/botaoEditar/botaoEditar';
import { useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import produtosController from '../../../controllers/produtosController';
import FormDialog from '../../modais/formDialog/formDialog';


function ProdutosCard({ obterListaId }) {
  
  const { id: listaId } = useParams();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    montarCards();
    obterListaId(listaId)
  }, []);

  async function montarCards() {
    try {
      const response = await produtosController.buscarProdutosPorListaId(listaId)
      setProdutos(response);
      setProdutos(response.map(item => ({ ...item, iconeComprado: false })));
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleClick = (index) => {
    setProdutos(produtos.map((produto, i) => i === index ? { ...produto, iconeComprado: !produto.iconeComprado } : produto));
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
    </div>
  );
}

export default ProdutosCard;
