import React from 'react'
import './NoteCard.css'

class NoteCard extends React.Component {
  state = {
    square: {
        width: 300,
        height: 300,
        backgroundColor: this.props.findColor(this.props.note),
        margin: 12,
        display: "inline-block",
        textAlign: 'center',
        textOverflow: "hidden",
        boxShadow: "10px 20px 30px fuchsia"
      }
    }

  handleClick = () => {
    this.props.setCurrentNote(this.props.note)
  }

  render () {

    return (
      <div style={{...this.state.square, backgroundColor: this.props.findColor(this.props.note)}} >
        <h2>{this.props.findCategory(this.props.note)}</h2>
          <h1 style={{color: "black"}}>
            {this.props.note.title}
          </h1>
          <h3>
            {this.props.note.content}
          </h3>
          <button onClick={this.handleClick}>Edit</button>
          <button onClick={() => this.props.deleteNote(this.props.note)}>Delete</button>
        </div>
    )
  }
}

export default NoteCard
