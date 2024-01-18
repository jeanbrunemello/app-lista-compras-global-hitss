import React, { useEffect, useState } from 'react';
import css from './style.css'
import ButtonDelete from '../button-del/button-del';
import listasService from '../../services/listasService';
import ButtonEdit from '../button-edit/button-edit';
import FormDialog from '../dialog/formDialog';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import listasController from '../../controllers/listasController';

function Cards({ }) {

    const [listas, setListas] = useState([])
    const navigate = useNavigate();

    async function montarCards() {
        try {
            const listas = await listasController.buscarListas();
            setListas(listas);
        } catch (error) {
            console.error('Erro ao buscar listas:', error);
        }
    }

    useEffect(() => {
        montarCards();
    }, []);

    return (
        <div className='card-container'>
            <FormDialog textoBtn={'add'} montarCards={montarCards}></FormDialog>
            {listas.map((lista) => (
                <div key={lista.id} className='card' >
                    <div className="card-nome" onClick={() => navigate(`/listas/${lista.id}`, { state: { nome_lista: lista.nome_lista } })}>
                        <p>{lista.nome_lista}</p>
                    </div>
                    <div className='botao-container'>
                        <div className='botao-edit'>
                            <ButtonEdit item={lista} montarCards={montarCards} ></ButtonEdit>
                        </div>
                        <div className='botao-delete'>
                            <ButtonDelete listaId={lista.id} montarCards={montarCards}></ButtonDelete>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;