import React,{Component} from 'react';
import ListDisplay from './ListDisplay';
class List extends Component{

constructor(props){
super()
this.state={data:[]}
}
componentDidMount(){
 fetch('https://my-json-server.typicode.com/dinoreborn/demo/employees')
  //fetch('https://jsonplaceholder.typicode.com/posts')
  .then(result =>result.json())
  .then(data => this.setState({data}, () => console.log('Data fetched....', data)))

}

render(){

return(
<div>

<ListDisplay greet={this.state.data} />
</div>)

}
}

export default List;