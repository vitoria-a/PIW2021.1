import { Router, Route, Redirect } from 'react-router-dom';
import history from './history';
import './App.css';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PaginaPostar } from './components/pages/PaginaPostar/PaginaPostar';
import { Cadastro } from './components/pages/PaginaCadastro/Cadastro';
import { Login } from './components/pages/PaginaLogin/Login';
import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

function App() {
    const [auth, setAuth] = useState({token: localStorage.getItem("token"), nome: localStorage.getItem("nome")});

    const setAuthLS = (newAuth) => {
      setAuth(newAuth);
      localStorage.setItem("token", newAuth.token);
      localStorage.setItem("nome", newAuth.nome);
    }

    return (
      <AuthContext.Provider value={{ auth: auth, setAuth: setAuthLS}}>
        <Router history={history}>
          <Route exact path="/">
          {
            auth.token === null ? <Redirect to="/login" /> : <PaginaPrincipal />
          }
          </Route>

          <Route exact path="/cadastro">
            <Cadastro/>
          </Route>

          <Route exact path="/login">
            <Login/>
          </Route>

          <Route exact path="/postar">
            <PaginaPostar/>
          </Route>
        </Router>
    </AuthContext.Provider>
  );
}

export default App;
