import React,{Component} from 'react'

class Tab extends Component{

constructor(){
super()
this.state={}

this.handleClick=this.handleClick.bind(this);


}

handleClick(){
  
}

render(){

return(<div>
<div class="ui top attached tabular menu" onClick={this.handleClick}>
  <a class="item active" data-tab="first">First</a>
  <a class="item" data-tab="second">Second</a>
  <a class="item" data-tab="third">Third</a>
</div>
<div class="ui bottom attached tab segment active" data-tab="first">
  First
</div>
<div class="ui bottom attached tab segment" data-tab="second">
  Second
</div>
<div class="ui bottom attached tab segment" data-tab="third">
  Third
</div>


</div>)

}
}
export default Tab;