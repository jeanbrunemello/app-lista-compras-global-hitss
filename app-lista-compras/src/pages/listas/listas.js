import React, { useEffect, useState } from 'react';
import Titulo from '../../components/titulo/titulo';
import css from './style.css';
import Cards from '../../components/cards/card';



const Listas = () => {

  return (
    <main>
      <Titulo></Titulo>
      <Cards></Cards>
    </main>
  );
}

export default Listas;
