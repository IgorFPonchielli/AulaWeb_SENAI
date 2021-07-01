import React, { useState, useEffect } from 'react';
//import './style.css';
import api from '../Services/api';

// instalar axios: npm install axios
// criar componente para listar livros

function Livro() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        api.get('books',{}).then(response => {
            setLivros(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Livros</h1>
            <ul>
                {
                    livros.map(livro => (
                        <li>
                            <p>Id: {livro.Codigo}</p>
                            <p>Nome: {livro.NomeAutor}</p>
                            <p>editora: {livro.CodigoEditora}</p>
                            <p>isbn: {livro.isbn}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Livro;