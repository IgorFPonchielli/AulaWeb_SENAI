import React, { useState, useEffect } from 'react';
import api from '../Services/api';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// instalar axios: npm install axios
// criar componente para listar livros

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function ListarLivros() {
    const classes = useStyles();

    const [livros, setLivros] = useState([]);

    async function handleDeleteLivro(id) {
        try {
            await api.delete(`book/${id}`, {});
            setLivros(livros.filter(livro => livro.Codigo !== id));
        } catch (error) {
            alert('Erro ao deletar livro');
        }
    }

    useEffect(() => {
        api.get('books', {}).then(response => {
            setLivros(response.data);
        });
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Codigo</StyledTableCell>
                        <StyledTableCell align="right">Autor</StyledTableCell>
                        <StyledTableCell align="right">Codigo da Editora</StyledTableCell>
                        <StyledTableCell align="right">ISBN</StyledTableCell>
                        <StyledTableCell align="right">Assunto</StyledTableCell>
                        <StyledTableCell align="right">Deletar</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {livros.map((livro) => (
                        <StyledTableRow key={livro.Codigo}>
                            <StyledTableCell component="th" scope="row">
                                {livro.Codigo}
                            </StyledTableCell>
                            <StyledTableCell align="right">{livro.NomeAutor}</StyledTableCell>
                            <StyledTableCell align="right">{livro.CodigoEditora}</StyledTableCell>
                            <StyledTableCell align="right">{livro.ISBN}</StyledTableCell>
                            <StyledTableCell align="right">{livro.Assunto}</StyledTableCell>
                            <StyledTableCell align="center">
                            <Button variant="outlined" color="secondary" type="button" onClick={() => handleDeleteLivro(livro.Codigo)}>Excluir</Button></StyledTableCell >
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

//export default ListarLivros;