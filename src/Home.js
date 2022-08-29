import './Home.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const api = axios.create({})

const Home = () => {
  const [isOpened, setIsOpened] = useState(false)
  const toggleMenu = () => {
    setIsOpened(!isOpened)
  }

  const [isLoading, setIsLoading] = useState(false)

  const [coins, setCoins] = useState([])

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const response = await api.get(
          'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,GBP-BRL,DOGE-BRL'
        )
        setCoins(response.data)
      } catch (error) {
        console.error(error)
      }
      setIsLoading(false)
    }

    getData()
  }, [])

  return (
    <>
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <>
          <header>
            <button
              onClick={toggleMenu}
              className='btn material-icons'
              style={{ color: isOpened ? '#244887' : '#cfd3d6' }}
            >
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
                  <tr>
                    <td>Cod moeda|</td>
                    <td>BRL|</td>
                    <td>Alta|</td>
                    <td>Baixa|</td>
                    <td>Últ. Atualização|</td>
                  </tr>
                  {Object.values(coins).map((moedas) => {
                    return (
                      //key é importante em um loop, mas a explicação fica pra próx
                      <tr key={moedas.code}>
                        <td>{moedas.code}</td>
                        <td>{moedas.codein}</td>
                        <td>{moedas.high}</td>
                        <td>{moedas.low}</td>
                        <td>{moedas.create_date}</td>
                      </tr>
                    )
                  })}
                </div>
                <div className='detailBlock'>
                  <i className='material-icons'>monetization_ona</i>
                  <span>Aplicações</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Home
