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
    this.props.loginUser(this.state.username)
  }

  handleClick = () => {
    this.props.toggle()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        <button type="submit">Login</button>
        <button onClick={this.handleClick}>Signup</button>
      </form>
    )
  }

}

export default LoginContainer
