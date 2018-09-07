import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd'

import './style.scss'
const FormItem = Form.Item;

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{
          marginTop: '20vh'
        }}>
      <Row>
      <Col span={6} offset={9}>
        <h1>Logowanie</h1>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem validateTrigger='onBlur'>
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: 'Proszę wpisać email' },
              { type: 'email', message: 'To nie jest poprawny adres email'}
            ],
          })(
            <Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }}/>}
            placeholder="Email"
            type="email"
            size="large"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Proszę wpisać hasło!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" size="large"  />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" size="large" className="login-form-button">
            Zaloguj
          </Button>
        </FormItem>
                  <a className="login-form-forgot" href="">Przypomnij hasło</a>
      </Form>
    </Col>
  </Row>
  </div>
    );
  }
}

export default Form.create()(LoginForm)
