import './App.css';
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div className="App">
            <h1 className='homeImage'>Fake img</h1>
            <div className='loginDiv'>
                <form className='loginForm'>
                    <label>Email:</label>
                    <input type="text"></input>
                    <label>Usuário:</label>
                    <input type="text"></input>
                    <label>Senha:</label>
                    <input type="password"></input>
                    <label>Confirma senha:</label>
                    <input type="password"></input>
                </form>
                <Link to='/'>
                    <button className='button'>
                        Cadastrar
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Register
