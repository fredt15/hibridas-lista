import React from "react"

import Home from './pages/home/home'
import Listas from './pages/listas/listas'
import ListaProduto from './pages/listaProduto/listaProduto'
import CadastroItem from './pages/cadastroItem/cadastroItem'
import CadastroLista from './pages/cadastroLista/cadastroLista'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/cadastrolista">
            <CadastroLista />
          </Route>
          <Route path="/lista/:lista/cadastroitem">
            <CadastroItem />
          </Route>
          <Route path="/lista/:lista">
            <ListaProduto />
          </Route>
          <Route path="/lista">
            <Listas />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
