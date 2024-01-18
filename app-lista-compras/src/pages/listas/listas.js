import React, { useEffect, useState } from 'react';
import Titulo from '../../components/titulo/titulo';
import css from './style.css';
import Card from '../../components/card/card';
import ListasService from '../../services/listasService';
import ButtonAdd from '../../components/button-add/button-add';
import FormDialog from '../../components/dialog/formDialog';
import ButtonDelete from '../../components/button-del/button-del';
import listasService from '../../services/listasService';
import { Modal } from '@mui/material';


const Listas = () => {
  const [updateFunction, setUpdateFunction] = useState(null);
  const [listas, setListas] = useState([])

  async function buscarListas() {
    try {
      const listasObtidas = await ListasService.buscarListas();
      console.log("DADOS RECEBIDOS:", listasObtidas);
      setListas(listasObtidas);
    } catch (error) {
      console.error('Erro ao buscar listas:', error);
    }
  }

  async function apagarLista(listaId) {
    try {
      await listasService.apagarLista(listaId)
      buscarListas();
    } catch (error) {
      console.error('Erro ao apagar lista:', error);
    }
  }

  async function editarLista(listaId, dados) {
    console.log(`home aqui ${listaId} e ${dados}`)
    try {
      await listasService.editarLista(listaId, dados)
      buscarListas();
    } catch (error) {
      console.error('Erro ao editar lista:', error);
    }
  }

  async function adicionarLista(dados) {
    try {
      await listasService.adicionarLista(dados)
      buscarListas();
    } catch (error) {
      console.error('Erro ao editar lista:', error);
    }
  }



  useEffect(() => {
    buscarListas()
  }, [])

  return (
    <main>
      <Titulo></Titulo>
      <Card listas={listas} buscarListas={buscarListas} apagarLista={apagarLista} editarLista={editarLista}></Card>
      {/* <ButtonAdd texto={'add'}></ButtonAdd> */}
      <FormDialog textoBtn={'add'} adicionarLista={adicionarLista}></FormDialog>
    </main>
  );
}

export default Listas;
