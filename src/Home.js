import './Home.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const [isOpened, setIsOpened] = useState(false)
  const toggleMenu = () => {
    setIsOpened(!isOpened)
  }
  const mudaFunc = (valor) => {
    if (valor) {
    } else {
    }
  }
  return (
    <>
      <header>
        <button onClick={toggleMenu} className='btn material-icons' style={{ color: isOpened ? '#244887' : '#cfd3d6' }}>
          menu
        </button>
        <button className='btn material-icons'>account_circle</button>
      </header>
      <div className='content'>
        {isOpened && (
          <div className='sidebar'>
            <a href='#'>
              <i className='material-icons'>favorite</i>
              <span>home</span>
            </a>
            <a href='#'>
              <i className='material-icons'>paid</i>
              <span>Ações</span>
            </a>
            <a href='#'>
              <i className='material-icons'>manage_search</i>
              <span>Histórico</span>
            </a>
            <a href='#'>
              <i className='material-icons'>query_stats</i>
              <span>Avançado</span>
            </a>
          </div>
        )}
        <div className='infoBlock'>
          <div className='mainData'>
            <div className='block'>
              <i className='material-icons'>percent</i>
              <span>18,95</span>
              <hr /> Rendimento
            </div>
            <div className='block'>
              <i className='material-icons'>payments</i>
              <span>R$17.000</span>
              <hr /> Investido
            </div>
            <div className='block'>
              <i className='material-icons'>wallet</i>
              <span>R$4.000</span>
              <hr /> Carteira
            </div>
          </div>
          <div className='details'>
            <div className='detailBlock'>
              <i className='material-icons'>price_change</i>
              <span>Cotação</span>
            </div>
            <div className='detailBlock'>
              <i className='material-icons'>monetization_ona</i>
              <span>Aplicações</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
