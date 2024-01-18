import EditIcon from '@mui/icons-material/Edit';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import listasService from '../../../services/listasService';
import Home from '../../../pages/home/home';
import FormDialog from '../../modais/formDialog/formDialog';

function BotaoEditar({ item, produto, montarCards }) {

    return (
        <div
        className='container-flex'>
            <FormDialog textoBtn={''} item={item} produto={produto} montarCards={montarCards}></FormDialog>
        </div>
    );
}

export default BotaoEditar;