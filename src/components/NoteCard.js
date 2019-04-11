import React from 'react'

class NoteCard extends React.Component {


  render () {
    return (
      <div>
        <h2>{this.props.note.title}</h2>
        <p>{this.props.note.content}</p>
        </div>
    )
  }
}

export default NoteCard
