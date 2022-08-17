import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='homeImage'>Fake img</h1>
      <form className='loginForm'>
        <label for="fname">Usuário:</label>
        <input type="text" id="fname" name="fname"></input>
        <label for="lname">Senha:</label>
        <input type="text" id="lname" name="lname"></input>
      </form>
      <button className='button'>
        Logar
      </button>
      <h3>Não tem uma conta?</h3>
      <button className='button'>
        Cadastrar
      </button>
    </div>
  );
}

export default App;
