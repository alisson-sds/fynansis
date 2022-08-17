import './App.css';

const Register = () => {
    return (
        <div className="App">
            <h1 className='homeImage'>Fake img</h1>
            <form className='loginForm'>
                <label for="fname">email:</label>
                <input type="email" id="fname" name="fname"></input>
                <label for="fname">Usuário:</label>
                <input type="text" id="fname" name="fname"></input>
                <label for="lname">Senha:</label>
                <input type="password" id="lname" name="lname"></input>
            </form>
            <button className='button'>
                Cadastrar
            </button>
        </div>
    )
}

export default Register
