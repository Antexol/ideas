import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item
const AutoCompleteOption = AutoComplete.Option
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};
const relationships = [
  'matka',
  'ojciec',
  'babcia',
  'dziadek',
  'ciocia',
  'wujek'
]
const relationshipOptions = relationships.map(relationship => (
    <AutoCompleteOption key={relationship}>{relationship}</AutoCompleteOption>
  ));
class Profile extends Component{
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
     label="Nr legitymacji"
     {...formItemLayout}
   >

       <Input value="u12356" disabled />

   </FormItem>
       <FormItem
         label="E-mail"
         {...formItemLayout}
       >

           <Input value="jan@kowalski.pl" disabled />

       </FormItem>
       <FormItem
         label="Imię"
         {...formItemLayout}
       >

           <Input />

       </FormItem>
       <FormItem
         label="Nazwisko"
         {...formItemLayout}
       >

           <Input />

       </FormItem>

       <FormItem
       label="Stopień pokrewieństwa"
          {...formItemLayout}>
       <AutoComplete
           dataSource={relationshipOptions}

         >
           <Input />
         </AutoComplete>
         </FormItem>
       <FormItem>
         {getFieldDecorator('agreement', {
           valuePropName: 'checked',
         })(
           <Checkbox>Oświadczam, że jestem spokrewniony z osobą pełnoletnią, która uczęszczała na zajęcia do Pałacu Młodzieży w Warszawie</Checkbox>
         )}
       </FormItem>
       <FormItem >
         <Button type="primary" htmlType="submit">Dalej</Button>
       </FormItem>
     </Form>
   </Fragment>
 )
 }
 }
 export default Form.create()(Profile);
