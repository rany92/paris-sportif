import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../screens/home'


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/home' component={Home}></Route>
      </Switch>
    </Router>
  )
}

export default Routes