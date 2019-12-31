import React, { Component } from 'react';
import Form from './Component/Form';
import SideBar from './Component/SideBar';
import Bar from './Component/Bar';
import Tab from './Component/Tab';
import List from './Component/List';
import Step from './Component/Step';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <nav style={{background:"#5f0606"}}>
          <ul>
            <li>
              <Link to="/">SideBar</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/bar">Bar</Link>
            </li>
             <li>
              <Link to="/list">List</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <SideBar />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/bar">
            <Bar />
          </Route>
          <Route path="/list">
            <List />
          </Route>
        </Switch>
    </Router>

      </div>
    );
  }
}

export default App;
