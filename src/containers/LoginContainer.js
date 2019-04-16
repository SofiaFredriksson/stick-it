import React from 'react'

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
    console.log("hello")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        <button type="submit">Login</button>
      </form>
    )
  }

}

export default LoginContainer
