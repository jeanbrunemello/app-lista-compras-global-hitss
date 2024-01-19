import React, { useEffect, useRef, useState } from 'react';
import css from '../home/style.css';
import Titulo from '../titulo/titulo';
import ListasCard from '../cards/listasCard/listasCard';
import { useNavigate } from 'react-router-dom';
import listasController from '../../controllers/listasController';
import { TextField } from '@mui/material';
import BotaoEditar from '../botoes/botaoEditar/botaoEditar';
import BotaoDelete from '../botoes/botaoDelete/botaoDelete';

const InputPesquisa = (listaOriginal) => {

    const [listas, setListas] = useState([]);
    const [listaOriginal, setListaOriginal] = useState([]);
    const navigate = useNavigate();
    const termosPesquisa = useRef('');

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
        termosPesquisa = event.target.value;
        if (!termosPesquisa) {
            setListas(listaOriginal);
        } else {
            const listasFiltradas = listaOriginal.filter((lista) =>
                lista.nome_lista.toLowerCase().includes(termosPesquisa.toLowerCase())
            );
            setListas(listasFiltradas);
        }

        setPesquisa(termosPesquisa);
    };
    useEffect(() => {
        montarCards();
    }, []);

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
    );
}

export default InputPesquisa;
