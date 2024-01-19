import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import produtosController from '../../../controllers/produtosController';
import listasController from '../../../controllers/listasController';

export default function FormDialog({ textoBtn, item, produto, listaId, montarCards }) {

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
            style: {
              backgroundColor: 'var(--primary-color)',
              color: 'var(--secondary-color)'
            },
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              if (produto) {
                const formJson = {
                  nome_produto: formData.get('nome_produto'),
                  quantidade_produto: parseInt(formData.get('quantidade_produto')),
                  preco_produto: parseFloat(formData.get('preco_produto'))
                }
                produtosController.editarProduto(produto.id, formJson).then(() => montarCards())
              } else {
                listasController.editarLista(item.id, formJson).then(() => montarCards());
              }
              handleClose();
            },
          }}
        >
          <DialogTitle>Editar</DialogTitle>
          <DialogContent>
            <DialogContentText>

            </DialogContentText>
            {produto ? (
              <>
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
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="quantidade_produto"
                  name="quantidade_produto"
                  label="Quantidade"
                  type="number"
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
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="preco_produto"
                  name="preco_produto"
                  label="R$"
                  type="number"
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
              </>
            ) : <TextField
              autoFocus
              required
              margin="dense"
              id="nome_lista"
              name="nome_lista"
              label="Digite um novo nome "
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
            />}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Voltar</Button>
            <Button type="submit">Enviar</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment >
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
            style: {
              backgroundColor: 'var(--primary-color)',
              color: 'var(--secondary-color)'
            },
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              if (produto) {
                const formJson = {
                  nome_produto: formData.get('nome_produto'),
                  quantidade_produto: parseInt(formData.get('quantidade_produto')),
                  preco_produto: parseFloat(formData.get('preco_produto')),
                  listas_compras_id: listaId
                }
                console.log(formJson)
                produtosController.adicionarProduto(formJson).then(() => montarCards())
              } else {
                listasController.adicionarLista(formJson).then(() => montarCards())
              }

              handleClose();
            },
          }}
        >
          <DialogTitle>Adicionar nova lista</DialogTitle>
          <DialogContent>
            <DialogContentText>

            </DialogContentText>
            {produto ? (
              <>
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
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="quantidade_produto"
                  name="quantidade_produto"
                  label="Quantidade"
                  type="number"
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
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="preco_produto"
                  name="preco_produto"
                  label="R$"
                  type="number"
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
              </>
            ) :
              <TextField
                autoFocus
                required
                margin="dense"
                id="nome_lista"
                name="nome_lista"
                label="Digite um novo nome "
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
            }
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