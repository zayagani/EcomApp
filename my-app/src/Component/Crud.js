import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { connect } from "react-redux";
import { createData } from "../Redux/Action/CrudAction"
class Crud extends Component {

  constructor() {

    super();
    this.state = {
      title: "",
      Book: "",

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleClick() {
    alert(this.state.title + "" + this.state.Book)
 //dispatch an acition with state goto action folder in readx
    this.props.createData(this.state);
  }
  render() {
    return (<div>
      <Form>
        <Form.Field>
          <label>Title</label>
          <input name="title" placeholder="First Name" value={this.state.title} onChange={this.handleChange} onBlur={this.validateName} />
        </Form.Field>
        <Form.Field>
          <label>Book</label>
          <input name="Book" placeholder="First Name" value={this.state.Book} onChange={this.handleChange} />
        </Form.Field>
        <Button type='submit' onClick={this.handleClick}>Submit</Button>
      </Form>
      {console.log(this.props.postdata.payload, "post data")}

      {console.log(this.props.postdata.payload instanceof Array, "post chck")}
      {this.props.postdata.payload.map((d) => {
        return <div>{d.Book}</div>

      })}
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    postdata: state
  }

}

const mapDispatchToProps = {
  //createData is action
  createData
}
//CREATE_DATA
export default connect(mapStateToProps, mapDispatchToProps)(Crud);