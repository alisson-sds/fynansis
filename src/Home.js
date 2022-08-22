import './Home.css';
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <input type="checkbox" id="check"></input>

            <div className="sidebar">
                <header>Menu</header>
                <a href='#'>
                    <span>Home</span>
                </a>
                <a href='#' class='active'>
                    <span>Nova Transação</span>
                </a>
                <a href='#' class='active'>
                    <span>Histórico</span>
                </a>
                <a href='#' class='active'>
                    <span>Dados</span>
                </a>
            </div>
        </div>
    )
}

export default Home
