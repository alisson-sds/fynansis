import './App.css';
import { Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1 className='homeImage'>Fake img</h1>
      <div className='loginDiv'>
        <form className='loginForm'>
          <label>Usuário:</label>
          <input type="text"></input>
          <label>Senha:</label>
          <input type="text"></input>
        </form>
        <Link to='/home'>
          <button className='button'>
            Logar
          </button>
        </Link>
        <h3>Não tem uma conta?</h3>
        <Link to='/register'>
          <button className='button'>
            Cadastrar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
