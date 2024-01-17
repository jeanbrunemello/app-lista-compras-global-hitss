import EditIcon from '@mui/icons-material/Edit';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import listasService from '../../services/listasService';
import Home from '../../pages/home/home';
import FormDialog from '../dialog/formDialog';

function ButtonEdit({listaId, buscarListas, editarLista}) {
 var listaId = listaId
    return (
        <div onClick={()=> listaId = listaId} className='container-flex'>
            {/* <IconButton
                
                className='button-add' color="primary" aria-label="add to shopping cart">
                <EditIcon className='button-add-icon' />
            </IconButton> */}
            <FormDialog textoBtn={''} listaId={listaId} editarLista={editarLista}></FormDialog>
        </div>
    );
}

export default ButtonEdit;