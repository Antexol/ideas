import React, {Component, Fragment} from 'react'
import { Steps, Icon, Row, Col } from 'antd'
import Loadable from 'react-loadable'
import { Switch, Route, Redirect } from 'react-router-dom'
import './style.scss'
const { Step } = Steps
const steps = [
  'profile',
  'idea',
  'done'
]

 export default class LandingPage extends Component{
 constructor(props){
 super(props)
 this.state = {
   current: 0
 }
 }
 getCurrent = () => {
   return steps.indexOf(steps.filter(step => this.props.location.pathname.includes(step))[0])
 }

 render = () => {
   let current = this.getCurrent()
 return (
   <Row>
   <Col offset={6} span={12}>
   <div className="page-wrapper">

   <Steps current={current}>
    <Step title="Uzupełnij profil" icon={<Icon type="user" />} />
    <Step title="Podziel się pomysłem" icon={<Icon type="bulb" />} />
    <Step title="Done" icon={<Icon type="rocket" />} />
  </Steps>
   </div>
    <div className="page-wrapper">
    <Switch>
    <Redirect path={this.props.match.path} exact to="/complete/profile" />

    <Route path={`/complete/profile`} component={Loadable({
        loader: () => import(`./profile`),
        loading: () => <h1>Loading</h1>
      })} />
      <Route path={`/complete/idea`} component={Loadable({
          loader: () => import(`./idea`),
          loading: () => <h1>Loading</h1>
        })} />
        <Route path={`/complete/done`} component={Loadable({
            loader: () => import(`./done`),
            loading: () => <h1>Loading</h1>
          })} />
    </Switch>

    </div>
    </Col>
    </Row>

 )
 }
 }
