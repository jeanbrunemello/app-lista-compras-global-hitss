import React, { useEffect, useState } from 'react';
import Titulo from '../../components/header/titulo/titulo';
import css from './style.css';
import Cards from '../../components/cards/listasCard/listasCard';




const Listas = () => {

  return (
    <div>
      <Titulo></Titulo>
      <Cards></Cards>
    </div>
  );
}

export default Listas;
