import EditIcon from '@mui/icons-material/Edit';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import listasService from '../../services/listasService';
import Home from '../../pages/home/home';
import FormDialog from '../dialog/formDialog';

function ButtonEdit({ lista, buscarListas, editarLista, produto, montarCards }) {

    return (
        <div
        className='container-flex'>
            <FormDialog textoBtn={''} lista={lista} produto={produto} editarLista={editarLista} montarCards={montarCards}></FormDialog>
        </div>
    );
}

export default ButtonEdit;