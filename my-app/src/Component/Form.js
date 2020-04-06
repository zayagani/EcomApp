import React,{Component} from 'react'
import FormComponent from './FormComponent';


class Form extends Component{

constructor(){

super()
this.state={
  username:"",
  password:""

}
this.handleClick=this.handleClick.bind(this);
this.handleLoginClick=this.handleLoginClick.bind(this);
this.handleChange=this.handleChange.bind(this);
}


handleChange(event){
//this.setState({value:event.target.value})
this.setState({[event.target.name]: event.target.value});
}

handleClick(){
alert("hi")
window.location.href="/FormComponent"
}

handleLoginClick(){
  if(this.state.username === "zaya@gmail.com" && this.state.password === "zayagani"){
  alert("login")
  window.location.href="/Bar"
}else{
  alert("fail")
}
}

render(){
return(<div>

<div class="ui placeholder segment">
  <div class="ui two column very relaxed stackable grid">
    <div class="column">
      <div class="ui form">
        <div class="field">
          <label>Username</label>
          <div class="ui left icon input">
            <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}/>
            <i class="user icon"></i>
          </div>
        </div>
        <div class="field">
          <label>Password</label>
          <div class="ui left icon input">
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <i class="lock icon"></i>
          </div>
        </div>
        <div class="ui blue submit button" onClick={this.handleLoginClick}>Login</div>
      </div>
    </div>
    <div class="middle aligned column">
      <div class="ui big button" onClick={this.handleClick}>
        <i class="signup icon"></i>
        Sign Up
      </div>
    </div>
  </div>
  <div class="ui vertical divider">
    Or
  </div>
</div>

</div>

)
}
}
export default Form;