import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { formToJSON } from 'axios';
import { Home } from '@mui/icons-material';

export default function FormDialog({ textoBtn, adicionarLista, editarLista, listaId }) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (textoBtn != "add") {
    return (
      <React.Fragment>
        <div className='container-flex'>
          <Button className='button-add' variant="text" onClick={handleClickOpen}>
            <EditIcon className='button-add-icon' />
          </Button>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              console.log(formJson)
              console.log(` form dialog ${listaId}`)

              editarLista(listaId, formJson)
              handleClose();
            },
          }}
        >
          <DialogTitle>Editar nome</DialogTitle>
          <DialogContent>
            <DialogContentText>

            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="nome_lista"
              name="nome_lista"
              label="Digite um novo nome para a lista..."
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Voltar</Button>
            <Button type="submit">Enviar</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className='container-flex'>
          <Button className='button-add' variant="text" onClick={handleClickOpen}>
            <AddIcon className='button-add-icon' /> {textoBtn.toUpperCase()}
          </Button>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              adicionarLista(formJson)
              handleClose();
            },
          }}
        >
          <DialogTitle>Adicionar nova lista</DialogTitle>
          <DialogContent>
            <DialogContentText>

            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="nome_lista"
              name="nome_lista"
              label="Digite um nome para a lista..."
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Voltar</Button>
            <Button type="submit">Enviar</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}