import React, { useState } from 'react';
import Titulo from '../../components/titulo/titulo';
import css from '../home/style.css';
import ProdutosCard from '../../components/cards/produtosCards/produtosCard';




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
      <ProdutosCard obterListaId={obterListaId} obterProduto={obterProduto}/>
    </main>
  );
}

export default Produtos;
