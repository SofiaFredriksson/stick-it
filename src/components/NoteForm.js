import React from 'react'

class NoteForm extends React.Component {
  state = {
    title: "",
    content: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.action(this.state)
    this.props.pageFunc("default")
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/><br/>
        <textarea name="content" type="text" value={this.state.content} onChange={this.handleChange}/><br/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default NoteForm
