import React from 'react'

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
    .then(this.props.toggle)

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        <button type="submit">Signup</button>
      </form>
    )
  }

}

export default SignUpContainer
