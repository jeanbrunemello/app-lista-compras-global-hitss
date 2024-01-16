import React from 'react';
import css from '../card/style.css'


function Card({listas}) {

  return (
    
      listas.map((lista, index) => (

      <div key={lista.id} className='card'>
        <p>{lista.nome_lista}</p>
      </div>
      ))

  );
}

export default Card;