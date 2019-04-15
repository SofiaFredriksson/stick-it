import React from 'react'
import ColorPalette from './ColorPalette'

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

  setColor = (color) => {
    this.setState({color: color})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.toggleFunc()
    this.props.addCategory(this.state)
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <label></label>
        <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
        <ColorPalette setColor={this.setColor}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default CategoryForm
