import React, { useEffect, useState } from 'react';
import css from '../card/style.css'
import ButtonDelete from '../button-del/button-del';
import listasService from '../../services/listasService';
import ButtonEdit from '../button-edit/button-edit';
import FormDialog from '../dialog/formDialog';
import { useNavigate, useParams } from 'react-router-dom';

function Card({ listas, buscarListas, apagarLista, editarLista }) {
  const navigate = useNavigate();
  
  return (
    listas.map((lista) => (
      <div key={lista.id} className='card' onClick={() => navigate(`/listas/${lista.id}`, { state: { nome_lista: lista.nome_lista } })}>
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