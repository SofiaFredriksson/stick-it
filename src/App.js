import React, { Component } from 'react';
import HomePage from './HomePage'
import LoginContainer from './containers/LoginContainer'
import SignUpContainer from './containers/SignUpContainer'
import HomeContainer from './containers/HomeContainer'

import { Switch, Route, withRouter } from "react-router-dom"
import './App.css';


class App extends Component {
  state = {
    user: null,
    toggle: false
  }

  loginUser = (username) => {
    console.log("holdit")
    fetch(`http://localhost:3000/users`)
      .then(resp => resp.json())
      .then(data => this.setState({
        user: data.find(user => user.username === username)
      }, () => this.props.history.push("/homepage")))
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  // renderForm = () => {
  //   if (!this.state.toggle){
  //    return <LoginContainer loginUser={this.loginUser} toggle={this.toggle} />
  //   } else {
  //    return <SignUpContainer toggle={this.toggle} />
  //  }
  //  <HomePage userID={this.state.user.id}/>}
  // }

  render() {
    console.log(this.state.user)
    return (
      <div>
        <Switch>
          <Route
            path="/homepage"
            render={(routerProps) => <HomePage {...routerProps} userID={this.state.user.id}/> }
          />
          <Route
            path="/signup"
            render={(routerProps) => <SignUpContainer {...routerProps} toggle={this.toggle} /> }
          />
          <Route
            path="/login"
            render={(routerProps) => <LoginContainer {...routerProps} loginUser={this.loginUser} toggle={this.toggle} /> }
          />
          <Route
            path="/"
            render={(routerProps) => <HomeContainer {...routerProps}/>}
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
