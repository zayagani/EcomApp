import React, { Component } from 'react';
import Form from './Component/Form';
import FormComponent from './Component/FormComponent';
import Bar from './Component/Bar';
import Tabcomp from './Component/Tabcomp';
import List from './Component/List';
import StepComp from './Component/StepComp';
import Profile from './Component/Profile';
import Search from './Component/Search';
import ContextApiForm from "./Component/ContextApiForm";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Routes extends Component {
constructor(){
super()
this.state={ activeItem: 'home' }


}


  render() {
    const { activeItem } = this.state
    return (
      <div className="App">
        <Router>
        <nav style={{background:"#5f0606"}}>



          <ul>
            <li>
              <Link to="/">Form</Link>
            </li>
           {/* <li>
              <Link to="/form">Form</Link>
           </li>*/}
            <li>
              <Link to="/bar">Bar</Link>
            </li>
             <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/tabcomp">TabComp</Link>
            </li>
            <li>
              <Link to="/contextapiform">ContextApi</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
         <Route exact path="/" component={FormComponent} />
          {/*<Route path="/form" component={Form} />*/}
          <Route path="/bar" component={Bar} />
          <Route path="/list" component={List} />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={Search} />
          <Route path="/tabcomp" component={Tabcomp}/>
          <Route path="/contextapiform" component={ContextApiForm}/>
        </Switch>
    </Router>

      </div>
    );
  }
}

export default Routes;
