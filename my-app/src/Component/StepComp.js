import React, { Component } from 'react'
import { Step } from 'semantic-ui-react'
import Crud from './Crud';
import { connect } from "react-redux";

class StepComp extends Component {
  constructor() {
    super()
    this.state = {}
  }

  handleClick = event => {
    // alert(this.props.formdata.formdata.map((dt) => {

    // return <div>{dt.fname}</div>
    // }))

  }
  render() {
    return (
      <React.Fragment>
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
        <input type="submit" value="Submit" onClick={this.handleClick} />
        {console.log(this.props.formdata.formdata, "step form")}
      </React.Fragment>

    )
  }
}
function mapStateToProps(state) {
  return {
    formdata: state
  }
}
export default connect(mapStateToProps)(StepComp);