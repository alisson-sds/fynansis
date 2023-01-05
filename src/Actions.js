import './Home.css'
import './Actions.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Action = () => {
  const [isOpened, setIsOpened] = useState(false)
  const toggleMenu = () => {
    setIsOpened(!isOpened)
  }

  return (
    <>
      <header>
        <button onClick={toggleMenu} className='btn material-icons' style={{ color: isOpened ? '#244887' : '#cfd3d6' }}>
          menu
        </button>
        <button className='btn material-icons'>account_circle</button>
      </header>

      {isOpened && (
        <div className='sidebar'>
          <a href='/Home'>
            <i className='material-icons'>favorite</i>
            <span>home</span>
          </a>
          <a href='/Actions'>
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
      <div>
        <p1>Novo Investimento:</p1>
        <div className='MainActions'>
          <form className='FormActions'>
            <label>Descrição:</label>
            <input type='text'></input>
            <label>Data da compra:</label>
            <input type='date'></input>
            <label>Valor:</label>
            <input type='number'></input>
            <label>Instituição:</label>
            <input type='text'></input>
          </form>
          <Link to='/'>
            <button className='button'>Registrar</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Action
