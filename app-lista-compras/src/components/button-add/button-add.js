import React from 'react';
import css from './style.css'
import { IconButton, ThemeProvider, createTheme } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import theme from '../../assets/themes';

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#FFFF',
//         },
//     },
// });

function buttonAdd(props) {
    return (
            <div className='container-flex'>
                <IconButton className='button-add' color="primary" aria-label="add to shopping cart">
                    <AddIcon className='button-add-icon' /> {props.texto.toUpperCase()}
                </IconButton>
            </div>
    )
}

export default buttonAdd;