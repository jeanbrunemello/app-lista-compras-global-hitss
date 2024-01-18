import React, { useState } from 'react';
import FormDialog from '../../dialog/formDialog';

function ButtonEdit({ item, produto, montarCards }) {

    return (
        <div
        className='container-flex'>
            <FormDialog textoBtn={''} item={item} produto={produto} montarCards={montarCards}></FormDialog>
        </div>
    );
}

export default ButtonEdit;