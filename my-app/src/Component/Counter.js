import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement, reset, onchange, fetchArticleDetails } from '../Redux/Action/CounterAction';

class Counter extends Component {

  constructor() {
    super();
  }

  increment = () => {
    debugger;
    this.props.increment(this.state);
  }
  decrement = () => {
    debugger;
    this.props.decrement(this.state);
  }
  render() {
    return (<div>
      <h2>Counter</h2>
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{this.props.count.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    </div>)
  }
}
function mapStateToProps(state) {
  debugger;
  console.log(this.state, "count state")
  return {
    count: state.count
  };
}

const mapDispatchToProps = {
  increment,
  decrement
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//export default Counter;