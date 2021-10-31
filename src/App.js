import axios from 'axios';
import { useState } from 'react';
import './styles/App.css';
import Home from './components/Home';
import logo from './svgs/login.svg';
import { IoMdExit } from 'react-icons/io';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Estoque from './components/Estoque';

function App() {
  const [logged, setLogged] = useState(0);
  function Exit(){
    localStorage.removeItem("Token");
    setLogged(0);
  }
  function formSubmit(event){
    event.preventDefault();
    const login = event.target[0].value;
    const password = event.target[1].value;
    axios.post('http://localhost:3333/login', {
      "login": login,
      "senha": password
    })
    .then(function (response) {
      setLogged(1)
      console.log(response)
      localStorage.setItem("Token", response.data.Token)
    })
    .catch(function (error) {
      setLogged(0)
    });
  }
  return (
      logged === 0 ? (
        <div className="bg">
            <div className="login-content">
            <img src={logo} alt="login svg" className="img-login"/>
            <h1>Login</h1>
            <form onSubmit={formSubmit}>
              <input className="input-login" placeholder="Usuario" name="user"/>
              <input className="input-login" placeholder="Senha" type="password" name="password"/>
              <button type="submit" className="button-login">Entrar</button>
            </form>
          </div>
        </div>
      ): logged === 1 ?(
        <div className="bg-home">
          <Router>
            <div className="container-routes">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/estoque">Estoque</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/" onClick={()=>Exit()}>Sair&nbsp;<IoMdExit /></a>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route path="/estoque">
                  <Estoque />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      ):null

  );
}

export default App;
