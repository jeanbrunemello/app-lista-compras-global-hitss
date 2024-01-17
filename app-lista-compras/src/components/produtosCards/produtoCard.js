import React, { useEffect, useState } from 'react';
import css from '../card/style.css'
import ButtonDelete from '../button-del/button-del';
import listasService from '../../services/listasService';
import ButtonEdit from '../button-edit/button-edit';
import FormDialog from '../dialog/formDialog';
import { useNavigate, useParams } from 'react-router-dom';
import produtoService from '../../services/produtosService';
import { Chip } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function ProdutoCard({ }) {
  const { id } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [isOutlinedStates, setIsOutlinedStates] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (id) {
        try {
          const response = await produtoService.buscarProdutoPorListaId(id);
          setProdutos(response);
          setIsOutlinedStates(new Array(response.length).fill(false));
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
    fetchData();
  }, [id]);

  const handleClick = (index) => {
    setIsOutlinedStates(isOutlinedStates.map((state, i) => i === index ? !state : state));
  };


  return (
    produtos.map((produto, index) => (
      <div key={produto.id} className='card'>
        <div onClick={() => handleClick(index)}>
          {isOutlinedStates[index] ? <ShoppingCartIcon /> : <AddShoppingCartIcon />}
        </div>
        <p>{produto.nome_lista}</p>
        <div className='botao-container'>
          <div className='botao-edit'>
            <ButtonEdit listaId={produto.id}></ButtonEdit>
          </div>
          <div className='botao-delete'>
            <ButtonDelete></ButtonDelete>
          </div>
        </div>
      </div>
    ))
  );
}

export default ProdutoCard;