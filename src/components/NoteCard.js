import React from 'react'

class NoteCard extends React.Component {

  handleClick = () => {
    this.props.setCurrentNote(this.props.note)
  }

  render () {

    return (
      <div style={{ backgroundColor: this.props.findColor(this.props.note) }}>
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
