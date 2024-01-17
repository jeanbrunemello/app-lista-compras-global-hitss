import React from 'react';
import css from '../card/style.css'
import ButtonDelete from '../button-del/button-del';
import listasService from '../../services/listasService';


function Card({ listas, buscarListas, apagarLista }) {

  if (listas == null || listas.length === 0) {
    return (<p>Não há listas a serem exibidas</p>)
  }

  return (
    listas.map((lista) => (
      <div key={lista.id} className='card' >
        <p>{lista.nome_lista}</p>
        <div className='botao-delete'>
          <ButtonDelete listaId={lista.id} buscarListas={buscarListas} apagarLista={apagarLista}></ButtonDelete>
        </div>
      </div>
    ))
  );
}

export default Card;