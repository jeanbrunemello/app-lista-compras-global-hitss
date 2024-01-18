import React, { useState } from 'react';
import css from './style.css'
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ModalComponent from '../../modais/formDialog/formDialog';

function BotaoAdd(props) {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
            <div className='container-flex'>
                <IconButton className='button-add' color="primary" aria-label="add to shopping cart">
                    <AddIcon className='button-add-icon' /> {props.texto.toUpperCase()}
                </IconButton>
                <ModalComponent open={open} handleClose={handleClose} />
            </div>
    )
}

export default BotaoAdd;