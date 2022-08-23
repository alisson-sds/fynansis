import './Home.css';
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <input type="checkbox" id="check"></input>
            <label htmlFor="check">
                <i id="btn">+</i>
                <i id="cancel">X</i>
            </label>
            <div className="sidebar">
                <header>Menu</header>
                <a href='#' className="active">
                    <i>-</i>
                    <span>Home</span>
                </a>
                <a href='#'>
                    <i>-</i>
                    <span>Nova Transação</span>
                </a>
                <a href='#'>
                    <i>-</i>
                    <span>Histórico</span>
                </a>
                <a href='#'>
                    <i>-</i>
                    <span>Dados</span>
                </a>
            </div>
        </>
    )
}

export default Home
