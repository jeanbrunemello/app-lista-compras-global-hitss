import React, { useEffect, useState } from 'react';
import style from './style.css'
import { useParams } from 'react-router-dom';
import listasController from '../../controllers/listasController';


const Titulo = ({}) => {
  const { id } = useParams();
  const [titulo, setNomeLista] = useState('app lista de compras');

  useEffect(() => {
    async function obterNomeLista() {
      try {
        const lista = await listasController.buscarListaPorId(id);
        if (lista != "") setNomeLista(`Lista ${lista.nome_lista}`);
      } catch (error) {
        console.error('Erro ao obter o nome da lista:', error);
      }
    }

    obterNomeLista();
  }, [id]);

  return (
    <div className='titulo'>
      <h1>{titulo.toUpperCase()}</h1>
    </div>
  );
}
export default Titulo;