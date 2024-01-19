import React, { useEffect, useRef, useState } from 'react';
import css from './style.css';
import { useNavigate } from 'react-router-dom';
import listasController from '../../controllers/listasController';
import { TextField } from '@mui/material';
import BotaoEditar from '../../components/botoes/botaoEditar/botaoEditar';
import BotaoDelete from '../../components/botoes/botaoDelete/botaoDelete';
import Titulo from '../../components/titulo/titulo';
import GroceryBagSvg from '../../assets/img/grocery_bag.svg';

const Home = () => {

  return (
    <div>
      <Titulo></Titulo>
      <p>Seu app de listas de mercado</p>
      <div className='imagem-flex'>
        <img className='icone-compras' src={GroceryBagSvg} />
      </div>
    </div>
  );
}

export default Home;
