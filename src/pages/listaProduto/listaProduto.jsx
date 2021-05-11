import React, { useEffect, useState } from 'react'

import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import ListItemText from '@material-ui/core/ListItemText'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import { useLocation, useHistory } from 'react-router-dom'

import './listaProduto.css'

const ListaProduto = () => {
  const [actualList, setActualList] = useState(false)
  const [listLocation, setlistLocation] = useState('')
  const location = useLocation()
  const history = useHistory()

  const handleDelete = item => {
    let newList = actualList.filter(e => e !== item)
    localStorage.setItem(listLocation, JSON.stringify(newList))
    setActualList(JSON.parse(localStorage.getItem(listLocation)))
  }

  useEffect(() => {
    const effectListLocation = location.pathname.split('/')[2]
    if (!localStorage.getItem(effectListLocation)){
      localStorage.setItem(effectListLocation, JSON.stringify([]))
    }
    setActualList(JSON.parse(localStorage.getItem(effectListLocation)))
    setlistLocation(effectListLocation)
  }, [location.pathname])

  const renderList = (listArray => {
    return (
      listArray.map(value => {
        return (
          <div key={value}>
            <ListItem style={{width: '15rem'}}>
              <ListItemText primary={value} />
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => handleDelete(value)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </div>
        )
      })
    )
  })

  return (
    <div className="lista-produto-container">
      <div className="lista-produto-header">
        <ShoppingCartIcon />
        <span className="lista-produto-title">{listLocation}</span>
      </div>

      {
        actualList &&
        <List>
          { renderList(actualList) }
        </List>
      }

      <Button variant="contained" size="large" disableElevation style={{width: '15rem', marginBottom: '0.5rem', marginTop: '2rem'}}
        onClick={() => history.push(`/lista/${listLocation}/cadastroitem`)}>
        Cadastrar Produto
      </Button>
      <Button variant="contained" size="large" disableElevation style={{width: '15rem'}}
        onClick={() => history.push('/lista')}>
        Voltar
      </Button>
    </div>
  )
}

export default ListaProduto
