import React, { useEffect, useState } from 'react';
import Titulo from '../../components/titulo/titulo';
import css from '../home/style.css';

import ProdutoCard from '../../components/produtosCards/produtoCard';


const conteudoTitulo = 'app lista de compras';

const Produtos = () => {


  return (
    <main>
      <Titulo titulo={conteudoTitulo}></Titulo>
      <ProdutoCard/>
    </main>
  );
}

export default Produtos;
