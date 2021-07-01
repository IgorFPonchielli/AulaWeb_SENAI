import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import HelloMessage from './HelloMessage';
import Teste from './paginas/Teste';
import Livro from './paginas/Livro';
import ListarLivro from './paginas/ListarLivros';
import CadLivro from './paginas/CadLivros';
import Usuario from './paginas/Usuario'
import Login from './paginas/Login'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={HelloMessage}/>
                <Route path="/teste" component={Teste}/>
                <Route path="/listarlivros" component={Livro}/>
                <Route path="/listarlivros2" component={ListarLivro}/>
                <Route path="/cadlivros" component={CadLivro}/>
                <Route path="/usuario" component={Usuario}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;