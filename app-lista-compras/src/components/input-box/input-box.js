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


function InputBox() {

    return (
        <div>
            <TextField id="standard-basic" className='input--text' label="Digite seu produto" variant="standard" />
        </div>

    )
}

export default InputBox;