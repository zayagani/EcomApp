import React, { Component } from 'react';
import elliot from '../images/elliot.jpg';
import { connect } from "react-redux";


class Profile extends Component {

  constructor(props) {
    super()
    this.state = {}



  }

  render() {

    return (<div>

      <div class="ui card">
        <div class="image">
          <img src={elliot} />
        </div>
        <div class="content">
          <a class="header">Kristy</a>
          <div class="meta">
            <span class="date">Joined in 2013</span>
          </div>
          <div class="description">
            Kristy is an art director living in New York.
    </div>
        </div>
        <div class="extra content">
          <a>
            <i class="user icon"></i>
      22 Friends
    </a>
        </div>
      </div>

      {console.log(this.props.post.payload, "profie data")}
      {this.props.post.payload.map((dt) => {
        return <div>{dt.Book}</div>

      })}
    </div>)


  }



}

function mapStateToProps(state) {
  debugger;
  return {
    post: state

  }

}

export default connect(mapStateToProps)(Profile);