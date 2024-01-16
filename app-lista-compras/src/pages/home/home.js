import React, { useEffect, useState } from 'react';
import Titulo from '../../components/titulo/titulo';
import css from '../home/style.css';
import Card from '../../components/card/card';
import ListasService from '../../services/listasService';


const conteudoTitulo = 'app lista de compras';

const Home = () => {

  const [listas, setListas] = useState([])

  async function buscarListas() {
    try {
      const listasObtidas = await ListasService.buscarListas();
      console.log("DADOS RECEBIDOS:", listasObtidas);
      setListas(listasObtidas);
    } catch (error) {
      console.error('Erro ao buscar listas:', error);
    }
  }

useEffect(() => {
  buscarListas()
}, [])
  
  return (
<main>
<Titulo titulo={conteudoTitulo}></Titulo>
<Card listas={listas}></Card>
</main>
  );
}

export default Home;
