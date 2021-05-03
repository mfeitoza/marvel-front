import React, { Component } from 'react'
import Menu from './menu/Menu'
import Home from './home/Home'
import Rodape from './rodape/Rodape'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Categoria from './categoria/Categoria'
import Secretaria from './secretaria/Secretaria'
import Form from './form/Form'
import Form2 from './form2/Form2'
import Form3 from './form3/Form3'
import Form4 from './form4/Form4'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
           <Menu />
           <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/categoria">
                <Categoria />
              </Route>
              <Route path="/secretaria">
                <Secretaria />              
              </Route>
              <Route path="/form">
                <Form/>
              </Route>
              <Route path="/form2">
                <Form2/>
              </Route>
              <Route path="/form3">
                <Form3/>
              </Route>
              <Route path="/form4">
                <Form4/>
              </Route>
           </Switch>
           <Rodape />
        </div>
        </BrowserRouter>
        
    )
  }
}
