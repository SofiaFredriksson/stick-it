import React from 'react'
import { withRouter } from "react-router-dom"
import './HomeContainer.css'

class SignUpContainer extends React.Component {


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
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username: this.state.username})
    })
    .then(resp => resp.json())
    .then(() => this.props.history.push("/login"))

  }



  render() {

    return (
      <div className="homeContainer">
        <h1>Welcome to Disco Stick It! </h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
          <button type="submit">Signup</button>
          <button onClick={() => this.props.history.push("/login")}>Login</button>
        </form>
      </div>
    )
  }

}

export default withRouter(SignUpContainer)
