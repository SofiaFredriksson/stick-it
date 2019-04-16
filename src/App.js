import React, { Component } from 'react';
import HomePage from './HomePage'
import LoginContainer from './containers/LoginContainer'
import SignUpContainer from './containers/SignUpContainer'
import { Switch, Route, withRouter } from "react-router-dom"
import './App.css';


class App extends Component {
  state = {
    user: null,
    toggle: false
  }

  loginUser = (username) => {
    fetch(`http://localhost:3000/users`)
      .then(resp => resp.json())
      .then(data => this.setState({
        user: data.find(user => user.username === username)
      }))
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  renderForm = () => {
    if (!this.state.toggle){
     return <LoginContainer loginUser={this.loginUser} toggle={this.toggle} />
    } else {
     return <SignUpContainer toggle={this.toggle} />
   }
  }

  render() {
    return (
      <div>
    {this.state.user === null?
        this.renderForm()
      :
      <HomePage userID={this.state.user.id}/>}
    </div>
    )
  }
}

export default App;
