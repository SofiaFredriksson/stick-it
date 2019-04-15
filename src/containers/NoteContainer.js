import React from 'react'
import NoteCard from '../components/NoteCard'


class NoteContainer extends React.Component {


  renderNotes() {
    const notes = this.props.notes
    return notes.map((note, index) => <NoteCard key={index} note={note} findColor={this.props.findColor} pageFunc={this.props.pageFunc} setCurrentNote={this.props.setCurrentNote} deleteNote={this.props.deleteNote} findCategory={this.props.findCategory} />)
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
