import React, { useState } from 'react';
import api from '../Services/api';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    
    const [CodigoEditora, setEditora] = useState('');
    const [ISBN, setIsbn] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [Assunto, setAssunto] = useState('');
    const [NomeAutor, setAutor] = useState('');

    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            CodigoEditora,
            ISBN,
            quantidade,
            Assunto,
            NomeAutor
        };

        try {
            console.log(dados);
            const response = await api.post('book', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("o id do livro é " + id);
            // history.push('/');
        } catch (error) {
            alert("Erro ao cadastrar livro " + error.message);
        }
    }

    return (

        <div>
            <div>
                <h1>Cadastro de Livro</h1>

                <form onSubmit={handleCadastro}>

                    <TextField
                        id="NomeAutor"
                        label="Nome do Autor"
                        style={{ margin: 8 }}
                        placeholder=""
                        helperText="Digite o nome completo do autor"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={NomeAutor}
                        onChange={e => setAutor(e.target.value)}
                    />
                    <TextField
                        id="NomeAutor"
                        label="Codigo da Editora"
                        style={{ margin: 8 }}
                        placeholder=""
                        helperText="Código numerico"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={CodigoEditora}
                        onChange={e => setEditora(e.target.value)}
                    />
                    <TextField
                        id="ISBN"
                        label="ISBN"
                        style={{ margin: 8 }}
                        placeholder=""
                        helperText="Código numerico"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={ISBN}
                        onChange={e => setIsbn(e.target.value)}
                    />
                    <TextField
                        id="Quantidade"
                        label="Quantidade"
                        style={{ margin: 8 }}
                        placeholder=""
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={quantidade}
                        onChange={e => setQuantidade(e.target.value)}
                    />
                    <TextField
                        id="Assunto"
                        label="Assunto"
                        style={{ margin: 8 }}
                        placeholder=""
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={Assunto}
                        onChange={e => setAssunto(e.target.value)}
                    />
                    <div className={classes.root}>
                        <Button variant="outlined" className="button" type="submit">Cadastrar Livro</Button>
                    </div>
                </form>


            </div>
        </div>

    );
}

