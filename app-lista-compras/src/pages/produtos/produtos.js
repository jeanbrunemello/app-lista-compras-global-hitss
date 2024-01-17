import React, { useEffect, useState } from 'react';
import Titulo from '../../components/titulo/titulo';
import css from '../home/style.css';

import ProdutoCard from '../../components/produtosCards/produtoCard';




const Produtos = () => {


  return (
    <main>
      <Titulo></Titulo>
      <ProdutoCard/>
    </main>
  );
}

export default Produtos;
