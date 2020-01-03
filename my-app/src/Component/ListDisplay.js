import React,{Component} from 'react';
import Profile from './Profile';
import { Input } from 'semantic-ui-react';

class ListDisplay extends Component{
constructor(props){
super(props)
    this.state={id:""}
}

handleClick(id){

    this.setState({id})
    window.location.href="/Profile";
}

render(){

return(
<div>



  
<table class="ui celled table">
  <thead>
    <tr><th>Id</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
  </tr></thead>
{this.props.greet.map((x)=>(
    <tbody>
    <tr onClick={this.handleClick.bind(this,x.id)}>
      <td data-label="Id">{x.id}</td>
     <td data-label="First Name">{x.first_name}</td>
      <td data-label="Last Name">{x.last_name}</td>
      <td data-label="Email">{x.email}</td>
    </tr>
  </tbody>
))}
</table>
</div>)
}
}
export default ListDisplay;