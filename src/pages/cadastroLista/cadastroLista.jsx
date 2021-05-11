import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useHistory } from 'react-router'

import './cadastroLista.css'

const CadastroLista = () => {
  const [inputValue, setInputValue] = useState('')
  const history = useHistory()
  let actualList = []

  const createList = (newItem) => {
    actualList.push(newItem)
    localStorage.setItem('masterListIndex', JSON.stringify(actualList))
    history.push(`/lista/${newItem}`)
  }

  useEffect(() => {
    if (!localStorage.getItem('masterListIndex')){
      localStorage.setItem('masterListIndex', JSON.stringify([]))
    }
    actualList = JSON.parse(localStorage.getItem('masterListIndex'))
  })

  return (
    <div className="cadastro-lista-container">
      <div className="cadastro-lista-header">
        <ShoppingCartIcon />
        <span className="cadastro-lista-title">Lista de compras</span>
      </div>

      <TextField
        id="standard-basic"
        label="Nome da lista"
        value={inputValue}
        style={{width: '15rem', marginBottom: '2rem'}}
        onChange={
          event => setInputValue(event.target.value)
        } />

      <Button variant="contained" size="large" disableElevation style={{width: '15rem', marginBottom: '0.5rem'}}
        onClick={() => createList(inputValue)}>
        Criar
      </Button>
      <Button variant="contained" size="large" disableElevation style={{width: '15rem'}}
        onClick={() => history.goBack()}>
        Voltar
      </Button>
    </div>
  )
}

export default CadastroLista