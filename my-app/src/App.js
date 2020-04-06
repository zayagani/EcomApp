import React, { Component } from 'react';
import Routes from './Routes';
import Form from './Component/Form';
import {Provider} from "react-redux";
//import {createStore} from "redux";
import configureStore from "./Redux/configureStore";
//import Reducer from './Redux/Reducer/index'

const store=configureStore();
//const store=createStore(Reducer);
console.log(store,"tore")

class App extends Component {

  render() {
    return (
     <Provider store={store}>
      <div className="App">
    
      <Routes />

      </div>
      </Provider>
   
    );
  }
}

export default App;
