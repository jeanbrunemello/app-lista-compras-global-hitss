import React, { useState }from 'react';
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
                  id={idValor}
                  name={nameValor}
                  label={labelValor}
                  type={typeValor}
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