import React,{Component} from 'react';
import elliot from '../images/elliot.jpg';
import square from '../images/square.png';

class Bar extends Component{

render(){

  return (
    <div>
      <div class="ui move reveal">
      <div class="visible content">
      <img src={square} class="ui small image"/>
    </div>
  <div class="hidden content">
    <img src={elliot} class="ui small image"/>
  </div>
</div>
</div>
  );
};
}
export default Bar;