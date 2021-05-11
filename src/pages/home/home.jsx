import React from 'react'

import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Link } from 'react-router-dom'

import './home.css'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <ShoppingCartIcon />
        <span className="home-title">Lista de compras</span>
      </div>

      <Link to="/cadastrolista">
        <div className="home-button">
          <Button variant="contained" size="large" disableElevation style={{width: '15rem', marginBottom: '0.5rem'}}>Criar novas listas</Button>
        </div>
      </Link>

      <Link to="/lista">
        <div className="home-button">
          <Button variant="contained" size="large" disableElevation style={{width: '15rem'}}>Ver listas</Button>
        </div>
      </Link>
    </div>
  )
}

export default Home