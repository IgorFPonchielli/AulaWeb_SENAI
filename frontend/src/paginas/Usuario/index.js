import React, { useState } from 'react';
import api from '../Services/api';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));
export default function CadastroLivro() {

    const classes = useStyles();
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [Telefone, setTelefone] = useState('');

    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            Nome,
            Email,
            Senha,
            Telefone
        };

        try {
            console.log(dados);
            const response = await api.post('user', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("o id do usuario é " + id);
            // history.push('/');
        } catch (error) {
            alert("Erro ao cadastrar usuario " + error.message);
        }
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <div>
                    <div>
                        <h1>Cadastrar Usuario</h1>

                        <form onSubmit={handleCadastro}>
                            <div className={classes.root}>
                                <TextField
                                    id="Nome"
                                    label="Nome Completo"
                                    style={{ margin: 8, width: '100%' }}
                                    placeholder=""
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={Nome}
                                    onChange={e => setNome(e.target.value)}
                                />
                            </div>
                            <div className={classes.root}>
                                <TextField
                                    id="Email"
                                    label="E-mail"
                                    style={{ margin: 8, width: '48%' }}
                                    placeholder=""
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={Email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <TextField
                                    id="Senha"
                                    label="Senha"
                                    style={{ margin: 8, width: '48%' }}
                                    placeholder=""
                                    margin="normal"
                                    type="password"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={Senha}
                                    onChange={e => setSenha(e.target.value)}
                                />
                            </div>
                            <div className={classes.root}>
                                <TextField
                                    id="Telefone"
                                    label="Telefone"
                                    style={{ margin: 8, width: '48%' }}
                                    placeholder="+55 47 992766776"
                                    margin="normal"
                                    inputProps={{ maxLength: 15 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={Telefone}
                                    onChange={e => setTelefone(e.target.value)}
                                />
                            </div>
                            <div className={classes.root}>
                                <Button style={{ margin: 8 }} variant="outlined" className="button" type="submit">Cadastrar Usuario</Button>
                            </div>
                        </form>


                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
}

