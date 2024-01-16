import React from 'react';
import style from './style.css'



const Titulo = (props) => {
  return (
    <div className='titulo'>
      <h1>{props.titulo.toUpperCase()}</h1>
    </div>
  );
}
export default Titulo;