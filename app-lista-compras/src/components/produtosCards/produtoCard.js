import React, { useEffect, useState } from 'react';
import css from './style.css'
import ButtonDelete from '../button-del/button-del';
import ButtonEdit from '../button-edit/button-edit';
import { useNavigate, useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import produtosController from '../../controllers/produtosController';


function ProdutoCard({ }) {
  const { id: listaId } = useParams();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    montarCards();
  }, []);

  async function montarCards() {
    try {
      const response = await produtosController.buscarProdutosPorListaId(listaId)
      setProdutos(response);
      // Adicione esta linha para alternar o estado de cada item na lista
      setProdutos(response.map(item => ({ ...item, iconeComprado: false })));
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleClick = (index) => {
    setProdutos(produtos.map((produto, i) => i === index ? { ...produto, iconeComprado: !produto.iconeComprado } : produto));
  };

  return (
    produtos.map((produto, index) => (
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
            <ButtonEdit produto = {produto} montarCards={montarCards} listaId={listaId}></ButtonEdit>
          </div>
          <div className='botao-delete'>
            <ButtonDelete listaId = {listaId} produtoId ={produto.id} montarCards={montarCards}></ButtonDelete>
          </div>
        </div>
      </div>
    ))
  );
}

export default ProdutoCard;
