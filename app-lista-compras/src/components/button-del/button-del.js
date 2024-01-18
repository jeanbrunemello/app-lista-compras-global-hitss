import DeleteIcon from '@mui/icons-material/Delete';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import listasService from '../../services/listasService';
import Home from '../../pages/home/home';
import { useLocation, useParams } from 'react-router-dom';
import produtosController from '../../controllers/produtosController';

function ButtonDelete(props) {

    return (
        <div className='container-flex'>
            <IconButton
                //onClick={ () => {props.apagarLista(props.listaId)}}
                onClick={props.produtoId ? () => { 
                    produtosController.apagarProduto(props.produtoId). then(()=> props.montarCards(props.listaId))
                    } : () => props.apagarLista(props.listaId)}
                className='button-add' color="primary" aria-label="add to shopping cart">
                <DeleteIcon className='button-add-icon' />
            </IconButton>
        </div>
    );
}

export default ButtonDelete;