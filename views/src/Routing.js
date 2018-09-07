import React, {Component} from 'react'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { Login, CompleteProfile } from './pages'
 export default class App extends Component{
 constructor(props){
 super(props)
 }
 render = () => {
 return (
  <Switch>
  <Route path="/" exact component={LandingPage} />
  <Route path="/login" component={Login} />
  <Route path="/complete" component={CompleteProfile} />
  </Switch>
 )
 }
 }
