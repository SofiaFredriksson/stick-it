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
    fetch(`http://localhost:3000/users`)
      .then(resp => resp.json())
      .then(data => {
        if (data.some(user => user.username === username)) {
          this.setState({
            user: data.find(user => user.username === username)}, (data) => {
                  this.props.history.push("/homepage")
                  localStorage.setItem("user", this.state.user.id)
                })
            } else {
              alert("invalid")
            }
          })
  }



  render() {
    console.log(this.state.user)
    return (
      <div className="App">
        <Switch>
          <Route
            path="/homepage"
            render={(routerProps) => <HomePage {...routerProps} userID={localStorage.getItem('user')}/> }
          />
          <Route
            path="/signup"
            render={(routerProps) => <SignUpContainer {...routerProps}  /> }
          />
          <Route
            path="/login"
            render={(routerProps) => <LoginContainer {...routerProps} loginUser={this.loginUser}  /> }
          />
          <Route
            path="/"
            render={(routerProps) => <HomeContainer {...routerProps}/>}
          />
        </Switch>
        {
          localStorage.getItem("user") &&
          <button style={{position:"fixed",
                  bottom: "0",
                  right: "0"
                  }}
                  onClick={() =>  {
                    localStorage.removeItem("user")
                    this.props.history.push("/")
                  }}>Sign Out</button>

        }
      </div>
    )
  }
}

export default withRouter(App);
