import React, { Component } from 'react';
import { connect } from "react-redux";
import * as courseAction from "../Redux/Action/CreateAction"
import { bindActionCreators } from "redux";
class CoursePage extends Component {

    state = {
        course: {
            title: ""
        }
    }
    handleChange = event => {
        const course = { ...this.state.course, title: event.target.value }
        this.setState({ course })
    }

    handleSubmit = event => {
        this.props.dispatch(courseAction.createCourse(this.state.course))
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add course</h3>
                <input type="text"
                    onChange={this.handleChange}
                    value={this.state.course.title} />

                <input type="submit" value="Submit" />

                {console.log(this.props.course, "course props")}
                {console.log(this.props.course instanceof Array, "instance")}
            </form>
        );
    }
}

function mapStateToProps(state) {

    return {

        course: state.courses

    }

}
export default connect(mapStateToProps)(CoursePage);