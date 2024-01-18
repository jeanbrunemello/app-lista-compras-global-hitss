import DeleteIcon from '@mui/icons-material/Delete';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import listasService from '../../../services/listasService';
import Home from '../../../pages/home/home';
import { useLocation, useParams } from 'react-router-dom';
import produtosController from '../../../controllers/produtosController';
import listasController from '../../../controllers/listasController';

function BotaoDelete({ produtoId, listaId, montarCards }) {

    async function handleClick() {
        if (produtoId) {
            await produtosController.apagarProduto(produtoId)
            montarCards(listaId);
        } else {
            await listasController.apagarLista(listaId)
            montarCards();
        }
    }

    return (
        <div className='container-flex'>
            <IconButton
                onClick={handleClick}
                className='button-add' color="primary" aria-label="add to shopping cart">
                <DeleteIcon className='button-add-icon' />
            </IconButton>
        </div>
    );
}

export default BotaoDelete;