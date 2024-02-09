import React, { useEffect, useRef, useState } from 'react';
import css from './style.css';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import FormDialog from '../../modais/formDialog/formDialog';
import listasController from '../../../controllers/listasController';
import BotaoEditar from '../../botoes/botaoEditar/botaoEditar';
import BotaoDelete from '../../botoes/botaoDelete/botaoDelete';
import ContainerCard from '../ContainerCard/containerCard';

function ListasCard() {

    const [listas, setListas] = useState([]);
    const [listaOriginal, setListaOriginal] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    const navigate = useNavigate();
    const termoPesquisa = useRef('');

    async function montarCards() {
        try {
            const listas = await listasController.buscarListas();
            setListas(listas);
            setListaOriginal(listas);
        } catch (error) {
            console.error('Erro ao buscar listas:', error);
        }
    }

    const aoInputChange = (event) => {
        termoPesquisa.current = event.target.value;
        if (!termoPesquisa.current) {
            setListas(listaOriginal);
        } else {
            const listasFiltradas = listaOriginal.filter((lista) =>
                lista.nome_lista.toLowerCase().includes(termoPesquisa.current.toLowerCase())
            );
            setListas(listasFiltradas);
        }
        setPesquisa(termoPesquisa.current);
    };
    useEffect(() => {
        montarCards();
    }, []);

    return (
        <div>
            <div className='pesquisa-container'>
                <TextField
                    autoFocus
                    margin="dense"
                    id="nome_produto"
                    name="nome_produto"
                    label="Pesquisar..."
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={aoInputChange}
                    InputProps={{
                        style: {
                            color: 'var(--secondary-color)',
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            color: 'var(--secondary-color)',
                        },
                    }}
                />
            </div>
            <ContainerCard>
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
            </ContainerCard>
        </div>
    );
}

export default ListasCard;