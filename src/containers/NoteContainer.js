import React from 'react'
import NoteCard from '../components/NoteCard'
import notes from '../dummyData'

class NoteContainer extends React.Component {

  render() {

    return (
      <div className="note-container">
        {notes.map(note => <NoteCard key={note.id} note={note} />)}
      </div>
    )
  }

}

export default NoteContainer
