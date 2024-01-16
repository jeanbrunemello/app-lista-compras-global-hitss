import React from 'react';
import Titulo from '../../components/titulo/titulo';
import Card from '../../components/card/card';
import css from '../home/style.css';
import NavMenu from '../../components/navMenu/navMenu';

const conteudoTitulo = 'app lista de compras';

const Home = () => {
  return (
<main>
<Titulo titulo={conteudoTitulo}></Titulo>
</main>
  );
}

export default Home;
