import React, { useEffect, useState } from 'react';
import Titulo from '../../components/titulo/titulo';
import css from '../home/style.css';
import Card from '../../components/card/card';
import ListasService from '../../services/listasService';
import ButtonAdd from '../../components/button-add/button-add';
import FormDialog from '../../components/dialog/dialog';


const conteudoTitulo = 'app lista de compras';

const Produtos = () => {
//   const [listas, setListas] = useState([])

//   async function buscarProdutosPorListaID() {
//     try {
//       const listasObtidas = await ListasService.buscarListas();
//       console.log("DADOS RECEBIDOS:", listasObtidas);
//       setListas(listasObtidas);
//     } catch (error) {
//       console.error('Erro ao buscar listas:', error);
//     }
//   }

//   useEffect(() => {
//     buscarListas()
//   }, [])

  return (
    <main>
      bateu
    </main>
  );
}

export default Produtos;
