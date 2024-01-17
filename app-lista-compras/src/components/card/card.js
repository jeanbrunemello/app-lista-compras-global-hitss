import React from 'react';
import css from '../card/style.css'
import ButtonDelete from '../button-del/button-del';
import listasService from '../../services/listasService';
import ButtonEdit from '../button-edit/button-edit';
import FormDialog from '../dialog/formDialog';


function Card({ listas, buscarListas, apagarLista, editarLista }) {

  if (listas == null || listas.length === 0) {
    return (<p>Não há listas a serem exibidas</p>)
  }

  return (
    listas.map((lista) => (
      <div key={lista.id} className='card' >
        <p>{lista.nome_lista}</p>
        <div className='botao-container'>
          <div className='botao-edit'>
            <ButtonEdit listaId={lista.id} buscarListas={buscarListas} editarLista={editarLista}></ButtonEdit>
          </div>
          <div className='botao-delete'>
            <ButtonDelete listaId={lista.id} buscarListas={buscarListas} apagarLista={apagarLista}></ButtonDelete>
          </div>
        </div>
      </div>
    ))
  );
}

export default Card;