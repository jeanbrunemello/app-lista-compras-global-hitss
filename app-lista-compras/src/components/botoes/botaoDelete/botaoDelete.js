import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import React from 'react';
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