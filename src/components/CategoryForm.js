import React from 'react'

class CategoryForm extends React.Component {
  state = {
    name: "",
    color: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.toggleFunc()
    this.props.addCategory(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
        <input name="color" type="text" value={this.state.color} onChange={this.handleChange}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default CategoryForm
