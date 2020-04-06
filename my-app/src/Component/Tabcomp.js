import React, { Component } from 'react'
import { Tab, List, Divider } from 'semantic-ui-react'
import Form from './Form';
import Profile from './Profile';
import StepComp from './StepComp';
import MenuItem from './MenuItem';
import Crud from './Crud';
import Counter from './Counter';
import CoursePage from "./CoursePage";

class Tabcomp extends Component {

  constructor() {
    super()
    this.state = {}

  }




  render() {


    const panes = [
      {
        menuItem: 'Menu',
        pane: {
          key: 'Menu',
          content: (<MenuItem />)
        },
      },
      {
        menuItem: 'Step',
        pane: {
          key: 'Step',
          content: (<StepComp />)
        },
      },
      {
        menuItem: 'Form',
        pane: {
          key: 'Form',
          content: (<Form />),
        },
      },
      {
        menuItem: 'Profile',
        pane: {
          key: "Profile",
          content: (<Profile />)
        },
      }, {
        menuItem: 'Crud',
        pane: {
          key: "Crud",
          content: (<Crud />)
        },
      },

      {
        menuItem: "Counter",
        pane: {
          key: "Counter",
          content: (
            <Counter />
          )
        }
      },


      {
        menuItem: "CoursePage",
        pane: {
          key: "CoursePage",
          content: (
            <CoursePage />
          )
        }
      }

    ]
    return (<div>

      <Tab panes={panes} renderActiveOnly={false} />

    </div>)

  }
}
export default Tabcomp;