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
import { useHistory } from 'react-router'

import './listas.css'

const Listas = () => {
  const [actualList, setActualList] = useState(false)
  const history = useHistory()

  const handleDelete = item => {
    localStorage.removeItem(item)
    let newList = actualList.filter(e => e !== item)
    localStorage.setItem('masterListIndex', JSON.stringify(newList))
    setActualList(JSON.parse(localStorage.getItem('masterListIndex')))
  }

  useEffect(() => {
    if (localStorage.getItem('masterListIndex')){
      setActualList(JSON.parse(localStorage.getItem('masterListIndex')))
    } else {
      localStorage.setItem('masterListIndex', JSON.stringify([]))
    }
  }, [])

  const renderList = (listArray => {
    return (
      listArray.map(value => {
        return (
          <div key={value} >
            <ListItem style={{width: '15rem'}}
              onClick={() => history.push(`/lista/${value}`)}>
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
    <div className="listas-container">
      <div className="listas-header">
        <ShoppingCartIcon />
        <span className="listas-title">Suas listas</span>
      </div>

      {
        actualList &&
        <List>
          { renderList(actualList) }
        </List>
      }

      <Button variant="contained" size="large" disableElevation style={{width: '15rem', marginTop: '2rem'}}
        onClick={() => history.push('/')}>
        Voltar
      </Button>
    </div>
  )
}

export default Listas
