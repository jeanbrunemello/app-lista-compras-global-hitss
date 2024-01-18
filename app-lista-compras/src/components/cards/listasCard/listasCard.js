import React, { useEffect, useState } from 'react';
import css from './style.css'
import BotaoDelete from '../../botoes/botaoDelete/botaoDelete';
import BotaoEditar from '../../botoes/botaoEditar/botaoEditar';
import FormDialog from '../../modais/formDialog/formDialog';
import { useNavigate} from 'react-router-dom';
import listasController from '../../../controllers/listasController';

function ListasCard() {

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
                            <BotaoEditar item={lista} montarCards={montarCards} ></BotaoEditar>
                        </div>
                        <div className='botao-delete'>
                            <BotaoDelete listaId={lista.id} montarCards={montarCards}></BotaoDelete>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListasCard;