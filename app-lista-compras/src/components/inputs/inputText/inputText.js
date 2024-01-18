import React, { useState }from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import css from './style.css';


const styles = {
    root: {
      background: "black"
    },
    input: {
      color: "white"
    }
  };


function InputText(idValor, nameValor, labelValor, typeValor) {

    return (
        <div>
            <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="nome_produto"
                  name="nome_produto"
                  label="Digite um nome"
                  type="text"
                  fullWidth
                  variant="standard"
                  InputProps={{
                    style: {
                      color: 'var(--secondary-color)',
                    },
                  }} InputLabelProps={{
                    style: {
                      color: 'var(--secondary-color)',
                    },
                  }}
                />
        </div>
    )
}

export default InputText;