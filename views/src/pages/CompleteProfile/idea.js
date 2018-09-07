import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import TagGroup from './TagGroup'
const FormItem = Form.Item
const { TextArea } = Input;
const AutoCompleteOption = AutoComplete.Option
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};
const categories = [
    'pieczarki',
    'organiacja imprez',
    'bibioteka'
]
const categoryOptions = categories.map(category => (
    <AutoCompleteOption key={category}>{category}</AutoCompleteOption>
  ));
class Idea extends Component{
 constructor(props){
 super(props)
 }
handleSubmit = () => {
  this.props.history.push('/complete/idea')
}
 render = () => {
     const { getFieldDecorator } = this.props.form;
 return (
   <Fragment>
   <Form onSubmit={this.handleSubmit} layout="vertical">
   <FormItem
     label="Pomysł na innowację"
     {...formItemLayout}
   >

       <TextArea rows={12}  />

   </FormItem>
   <FormItem >
       <TagGroup />
   </FormItem>

       <FormItem >
         <Link to="/complete/profile"><Button htmlType="button">Wróć</Button></Link>
         <Button type="primary" htmlType="submit">Dalej</Button>
          <Link to="/complete/done"><Button htmlType="button">Wypełnij później</Button></Link>
       </FormItem>
     </Form>
   </Fragment>
 )
 }
 }
 export default Form.create()(Idea);
