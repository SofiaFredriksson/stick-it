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
    this.props.addNote(this.state)
    this.props.pageFunc("default")
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
        <input name="content" type="text-field" value={this.state.content} onChange={this.handleChange}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default NoteForm
