import { Button, TextField } from "@mui/material";
import InputText from "../../components/inputs/inputText/inputText"
import Titulo from "../../components/titulo/titulo"
import css from './style.css';
import ContainerCard from "../../components/cards/ContainerCard/containerCard";
import { useState } from "react";

function Login() {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const onUsuarioChange = (event) => {
        setUsuario(event.target.value);
    };

    const onSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    const onEntrarClick = () => {
        console.log('Usuário:', usuario);
        console.log('Senha:', senha);
    }

    return (

        <div >
            <Titulo texto="Login" />
            <ContainerCard>
                <div className="border">

                <TextField
                        value={usuario}
                        onChange={onUsuarioChange}
                        autoFocus
                        required
                        margin="dense"
                        id="usuarioInput"
                        name="usuarioInput"
                        label="email"
                        type="email"
                        fullWidth
                        variant="standard"
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
                    <TextField
                        value={senha}
                        onChange={onSenhaChange}
                        required
                        margin="dense"
                        id="senhaInput"
                        name="senhaInput"
                        label="senha"
                        type="password"
                        fullWidth
                        variant="standard"
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
                    <div className="btnContainer">

                        <Button size="medium" variant="contained" onClick={onEntrarClick}>Entrar</Button>
                    </div>
                </div>
            </ContainerCard>
        </div>
    )
}

export default Login