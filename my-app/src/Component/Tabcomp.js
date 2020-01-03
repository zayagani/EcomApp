import React,{Component} from 'react'
import { Tab,List,Divider } from 'semantic-ui-react'
import Form from './Form';
import Profile from './Profile';
import StepComp from './StepComp';
import MenuItem from './MenuItem';

class Tabcomp extends Component{

constructor(){
super()
this.state={}

}


render(){
 
  const panes = [
  {
    menuItem: 'Menu',
    pane: { key: 'Menu',  
    content:(<MenuItem />)},
  },
  {
    menuItem: 'Step',
    pane: {
      key: 'Step',
     content:(<StepComp />)
    },
  },
  {
    menuItem: 'Form',
    pane: {
      key: 'Form',
      content: (  <Form /> ),
    },
  },
  {
    menuItem: 'Profile',
    pane: {
     key:"Profile",
     content:( <Profile />)
    },
  },
]
return(<div>
 
<Tab panes={panes} renderActiveOnly={false} />

</div>)

}
}
export default Tabcomp;