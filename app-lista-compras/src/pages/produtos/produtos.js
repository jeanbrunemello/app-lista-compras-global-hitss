import React, { useEffect, useState } from 'react';
import Titulo from '../../components/titulo/titulo';
import css from '../home/style.css';
import ProdutoCard from '../../components/produtosCards/produtoCard';
import FormDialog from '../../components/dialog/formDialog';
import { useParams } from 'react-router-dom';




const Produtos = () => {

  const [listaId, setListaId] = useState(null);
  const [produto, setProduto] = useState(null);
  const [atualizaCards, SetAtualizarCards] = useState(null);

  const obterListaId = (id) => {
    setListaId(id);
  }

  const obterProduto = (produto) => {
    setProduto(produto);
  }

  return (
    <main>
      <Titulo></Titulo>
      {/* <FormDialog textoBtn={'add'} produto={true} listaId={listaId} ></FormDialog> */}
      <ProdutoCard obterListaId={obterListaId} obterProduto={obterProduto}  />
    </main>
  );
}

export default Produtos;
