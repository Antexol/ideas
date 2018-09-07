import React, {Component} from 'react'
import { Layout, Menu } from 'antd'
import Routing from './Routing'
import { Link, BrowserRouter as Router } from 'react-router-dom'
const { Header, Content, Footer } = Layout

 export default class App extends Component{
 constructor(props){
 super(props)
 }
 render = () => {
 return (
      <Router>
   <Layout style={{
              height: '100vh'
   }}>
     <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background:'white' }}>
       <Menu
         theme="light"
         mode="horizontal"
         defaultSelectedKeys={['2']}
         style={{ lineHeight: '64px' }}
       >
         <Menu.Item key="1">
          <Link to="/">Przeglądaj</Link>
         </Menu.Item>
         <Menu.Item key="login">
         <Link to="/login">Zaloguj</Link>
         </Menu.Item>
       </Menu>
     </Header>
     <Content style={{
        padding: '0 50px',
         marginTop: 64
        }}>
     <Routing />
     </Content>
     <Footer style={{ textAlign: 'center' }}>
       ©2018 Pracownia Projektowania Stron Internetowych w Pałacu Młodzieży w Warszawie
     </Footer>
   </Layout>
        </Router>
 )
 }
 }
