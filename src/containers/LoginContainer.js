import React from 'react'
import { Switch, Route, withRouter } from "react-router-dom"
import './HomeContainer'

class LoginContainer extends React.Component {
  state = {
    username: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.loginUser(this.state.username)
  }


  render() {

    return (
      <div className="homeContainer">
        <h1>Welcome to Disco Stick It! </h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
          <button type="submit">Login</button>
          <button onClick={() => this.props.history.push("/signup")}>Signup</button>
        </form>
      </div>
    )
  }

}

export default withRouter(LoginContainer)
