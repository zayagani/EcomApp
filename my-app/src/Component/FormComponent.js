import React,{Component} from 'react'
import '../Css/main.css';
import List from './List';
import { Button, Checkbox, Form } from 'semantic-ui-react'

class FormComponent extends Component{

constructor(){
super()
this.state={
  fname:"",
  lname:"",
  isChecked:false
  
}

this.handleClick=this.handleClick.bind(this);
this.toggleChange=this.toggleChange.bind(this);
this.handleChange=this.handleChange.bind(this);

}

handleChange(event){

this.setState({[event.target.name]: event.target.value});
}
toggleChange(){
  this.setState({isChecked: !this.state.isChecked})
}

handleClick(e){
  e.preventDefault()
  if(this.state.fname=="" || this.state.lname==""){
alert("please fill all th field")
}
  else if(!this.state.isChecked){
    alert("please agree term and condition")
  }
  else{
    window.location.href="/List"   
  }

}



render(){

return(<div>

<Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' name="fname" placeholder="First Name" value={this.state.fname} onChange={this.handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' name="lname" placeholder="First Name" value={this.state.lname} onChange={this.handleChange}/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' checked={this.state.isChecked} onChange={this.toggleChange} />
    </Form.Field>
    <Button type='submit' onClick={this.handleClick}>Submit</Button>
  </Form>
</div>
)
}
}
export default FormComponent;