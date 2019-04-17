import React from 'react'

class NoteCard extends React.Component {
  state = {
    square: {
        width: 300,
        height: 300,
        backgroundColor: this.props.findColor(this.props.note),
        margin: 8,
        display: "inline-block",
        textAlign: 'center',
        textOverflow: "hidden"
      }
    }

  handleClick = () => {
    this.props.setCurrentNote(this.props.note)
  }

  render () {

    return (
      <div style={{...this.state.square, backgroundColor: this.props.findColor(this.props.note)}} >
        <small>{this.props.findCategory(this.props.note)}</small>
          <h2 style={{color: "black"}}>
            {this.props.note.title}
          </h2>
          <p>
            {this.props.note.content}
          </p>
          <button onClick={this.handleClick}>Edit</button>
          <button onClick={() => this.props.deleteNote(this.props.note)}>Delete</button>
        </div>
    )
  }
}

export default NoteCard
