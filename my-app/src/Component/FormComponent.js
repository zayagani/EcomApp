import React, { Component } from 'react'
import '../Css/main.css';
import List from './List';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { connect } from "react-redux";
import { formData } from "../Redux/Action/FormAction"

class FormComponent extends Component {

  constructor() {
    super()
    this.state = {
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      isChecked: false,
      fnameError: ""

    }

    this.handleClick = this.handleClick.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {

    this.setState({ [event.target.name]: event.target.value });
  }
  toggleChange() {
    this.setState({ isChecked: !this.state.isChecked })
  }


  validateEmail = () => {
    const { fname } = this.state;
    this.setState({
      emailError:
        fname.length > 3 ? null : 'Email must be longer than 3 characters'
    });
  }


  handleClick(e) {
    debugger;
    this.validateEmail();
    e.preventDefault()

    if (this.state.fname == "" || this.state.lname == "" || this.state.email == "" || this.state.mobile == "") {
      alert("please fill all th field")
    }
    else if (!this.state.isChecked) {
      alert("please agree term and condition")

    }
    else if (this.state.mobile.length != 10) {
      alert("mobile number must be 10 digit")
    }
    else {
      //dispatch an action formData to the action folder
      this.props.formData(this.state)
       window.location.href="/List"   
    }

  }



  render() {

    return (<div>

      <Form>
        <Form.Field>
          <label>First Name</label>
          <input name="fname" placeholder="First Name" value={this.state.fname} onChange={this.handleChange} onBlur={this.validateName} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input name="lname" placeholder="First Name" value={this.state.lname} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Mobile</label>
          <input name="mobile" placeholder="Mobile" value={this.state.mobile} onChange={this.handleChange} />
        </Form.Field>


        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' checked={this.state.isChecked} onChange={this.toggleChange} />
        </Form.Field>
        <Button type='submit' onClick={this.handleClick}>Submit</Button>
      </Form>
      {console.log(this.props.formdata.formdata, "formdata")}

      {this.props.formdata.formdata.map((d) => {

        return <div>{d.fname}</div>


      })}
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {

    formdata: state
  }
}

const mapDispatchToProps = {

  formData
}
export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);