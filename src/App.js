import axios from 'axios';
import { useState } from 'react';
import './App.css';
import logo from './svgs/login.svg';

function App() {
  const [logged, setLogged] = useState(0);
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
    })
    .catch(function (error) {
      setLogged(0)
    });
  }
  return (
    <div className="bg">
      {logged === 0 ? (
            <div className="login-content">
            <img src={logo} alt="login svg" className="img-login"/>
            <h1>Login</h1>
            <form onSubmit={formSubmit}>
              <input className="input-login" placeholder="Usuario" name="user"/>
              <input className="input-login" placeholder="Senha" type="password" name="password"/>
              <button type="submit" className="button-login">Entrar</button>
            </form>
          </div>
      ): logged === 1 ?(<div className="login-content">
        <h1>Logado</h1>
    </div>):null}
    </div>
  );
}

export default App;
