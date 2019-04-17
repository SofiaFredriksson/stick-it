import React from 'react'
import { Form, TextArea, Grid } from 'semantic-ui-react'

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
      <div>
      <Grid>
        <Form onSubmit={this.handleSubmit} >
          <Grid.Row>
            <Grid.Column width={8}>
              <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/><br/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <TextArea name="content" type="text" value={this.state.content} onChange={this.handleChange}/><br/>
            </Grid.Column>
          </Grid.Row>
          <button type="submit">Submit</button>
        </Form>
      </Grid>
      </div>
    )
  }
}

export default NoteForm
