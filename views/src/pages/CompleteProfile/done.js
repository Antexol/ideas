import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon} from 'antd'
 export default class Done extends Component{
 constructor(props){
 super(props)
 }
 render = () => {
 return (
<Fragment>
<h1><Icon type="share-alt" theme="outlined" style={{fontSize: '2em'}}/> Już prawie...</h1>

<h2>1.11 rozpocznie się głosowanie na najlepsze pomysły. Do tego czasu możesz edytować swój pomysł
 podzielic się z innymi wiadomością o konkursie - udostępnij post z hashtagiem</h2>
 <h1><code>#zmieniajmyrazempalac</code></h1>
    <Link to="/complete/idea"><Button htmlType="button">Wróć</Button></Link>
</Fragment>
 )
 }
 }
