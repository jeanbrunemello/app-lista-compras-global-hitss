import React, { useEffect, useRef, useState } from 'react';
import css from './style.css';
import { Link, useNavigate } from 'react-router-dom';
import listasController from '../../controllers/listasController';
import { TextField } from '@mui/material';
import BotaoEditar from '../../components/botoes/botaoEditar/botaoEditar';
import BotaoDelete from '../../components/botoes/botaoDelete/botaoDelete';
import Titulo from '../../components/titulo/titulo';
import GroceryBagSvg from '../../assets/img/grocery_bag.svg';

const Home = () => {

  return (
    <div className='home-container'>
      <Titulo></Titulo>
      <p>Clique para iniciar</p>
      <div className='imagem-flex'>
        <Link to="/listas">
        <img className='icone-compras' src={GroceryBagSvg} />
        </Link>
      </div>
    </div>
  );
}

export default Home;
