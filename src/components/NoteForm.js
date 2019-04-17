import React from 'react'
import './NoteForm.css'

class NoteForm extends React.Component {
  state = {
    title: "",
    content: "",
      square: {
          width: 300,
          height: 300,
          backgroundColor: "",
          margin: 8,
          display: "inline-block",
          textAlign: 'center',
          textOverflow: "hidden"
        }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/categories/${this.props.categoryID}`)
      .then(res => res.json())
      .then(data => this.setState({
        square: {
          width: 300,
          height: 300,
          backgroundColor: data.color,
          margin: 8,
          display: "inline-block",
          textAlign: 'center',
          textOverflow: "hidden"
          }
      }))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.content.length > 140) {
      alert("Character Limit Has Been Exceeded.")
    } else if (this.state.content.length === 0) {
      alert("Content field can't be empty")
    } else if (this.state.title.length === 0) {
      alert("Title Can't Be Empty")
    } else {
      this.props.action(this.state)
      this.props.pageFunc("default")
    }
  }

  render() {

    return (
      <div style={this.state.square}>
        <form onSubmit={this.handleSubmit} >
              <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/><br/>
              <textarea name="content" type="text" value={this.state.content} onChange={this.handleChange}/><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default NoteForm
