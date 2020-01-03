import React ,{Component} from 'react'
import { Step } from 'semantic-ui-react'

class StepComp extends Component{
constructor(){
super()
this.state={}
}

render(){

return(

<Step.Group ordered>
    <Step completed>
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>

    <Step completed>
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>


)
}

}

export default StepComp;