import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useLocation, useHistory } from 'react-router-dom'

import './cadastroItem.css'

const CadastroItem = () => {
  const [actualList, setActualList] = useState(false)
  const [listLocation, setlistLocation] = useState('')
  const [inputValue, setInputValue] = useState('')
  const location = useLocation()
  const history = useHistory()

  const addItem = (newItem) => {
    actualList.push(newItem)
    localStorage.setItem(listLocation, JSON.stringify(actualList))
    history.push(`/lista/${listLocation}`)
  }

  useEffect(() => {
    const effectListLocation = location.pathname.split('/')[2]
    if (!localStorage.getItem(effectListLocation)){
      localStorage.setItem(effectListLocation, JSON.stringify([]))
    }
    setActualList(JSON.parse(localStorage.getItem(effectListLocation)))
    setlistLocation(effectListLocation)
  }, [location.pathname])

  return (
    <div className="cadastro-item-container">
      <div className="cadastro-item-header">
        <ShoppingCartIcon />
        <span className="cadastro-item-title">Novo item de {listLocation}</span>
      </div>

      <TextField
        id="standard-basic"
        label="Nome do produto"
        value={inputValue}
        style={{width: '15rem'}}
        onChange={
          event => setInputValue(event.target.value)
        } />

      <Button variant="contained" size="large" disableElevation style={{width: '15rem', marginBottom: '0.5rem', marginTop: '2rem'}}
        onClick={() => addItem(inputValue)}>
        Cadastrar
      </Button>
      <Button variant="contained" size="large" disableElevation style={{width: '15rem'}}
        onClick={() => history.goBack()}>
        Voltar
      </Button>
    </div>
  )
}

export default CadastroItem