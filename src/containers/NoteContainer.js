import React from 'react'
import NoteCard from '../components/NoteCard'


class NoteContainer extends React.Component {


  renderNotes() {
    const notes = this.props.notes
    return notes.map((note, index) => <NoteCard key={index} note={note} findColor={this.props.findColor} />)
  }

  render() {
    return (
      <div className="note-container">
        {this.renderNotes()}
      </div>
    )
  }

}

export default NoteContainer
