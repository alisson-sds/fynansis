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
            <i className='material-icons'>favorite</i>
            <span>home</span>
          </a>
          <a href='#'>
            <i className='material-icons'>paid</i>
            <span>Nova Transação</span>
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
    </>
  )
}

export default Home
