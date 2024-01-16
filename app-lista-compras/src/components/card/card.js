import React from 'react';
import css from '../card/style.css'
import ButtonDelete from '../button-del/button-del';
import listasService from '../../services/listasService';


function Card({ listas, updateFunction}) {

  if (listas == null || listas.length === 0) {
    return (<p>Não há listas a serem exibidas</p>)
  }

  async function apagarLista(listaId){
    await listasService.apagarListaPorId(listaId)
    updateFunction();
}

  return (
    listas.map((lista) => (
      <div key={lista.id} className='card' >
        <p>{lista.nome_lista}</p>
        <div className='botao-delete'
        onClick={() => apagarLista(lista.id)}
        >
        <ButtonDelete listaId={lista.id} ></ButtonDelete>
        </div>
      </div>
    ))
  );
}

export default Card;