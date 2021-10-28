import './App.css';
import logo from './svgs/login.svg';

function App() {
  function formSubmit(event){
    event.preventDefault();
  }
  return (
    <div className="bg">
      <div className="login-content">
        <img src={logo} alt="login svg" className="img-login"/>
        <h1>Login</h1>
        <form onSubmit={formSubmit}>
          {/* <label>Usuario</label> */}
          <input className="input-login" placeholder="Usuario" name="user"/>
          {/* <label>Senha</label> */}
          <input className="input-login" placeholder="Senha" name="password"/>
          <button type="submit" className="button-login">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
