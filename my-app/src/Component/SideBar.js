import React,{Component} from 'react'
import '../Css/main.css';

class SideBar extends Component{

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

this.setState({[event.target.name]: event.target.value});
}


handleClick(){


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
<form class="ui form">
  <div class="field">
    <label>First Name</label>
    <input type="text" name="first-name" placeholder="First Name" value={this.handleChange}/>
  </div>
  <div class="field">
    <label>Last Name</label>
  </div>
  <div class="field">
    <div class="ui checkbox">
      <input type="checkbox"/>
      <label>I agree to the Terms and Conditions</label>
    </div>
  </div>
  <button class="ui button" type="submit" onClick={this.handleClick}>Submit</button>
</form>
</div>
)
}
}
export default SideBar;