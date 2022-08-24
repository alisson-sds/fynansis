import './Home.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const [isOpened, setIsOpened] = useState(false)
  const toggleMenu = () => {
    setIsOpened(!isOpened)
  }
  return (
    <>
      <header>
        <button onClick={toggleMenu} className='btn material-icons'>
          menu
        </button>
        <button onClick={toggleMenu} className='btn material-icons'>
          account_circle
        </button>
      </header>
      {isOpened && (
        <div className='sidebar'>
          <a href='#'>
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
      )}
    </>
  )
}

export default Home
