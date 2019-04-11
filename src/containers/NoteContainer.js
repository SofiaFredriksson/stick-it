import React from 'react'
import NoteCard from '../components/NoteCard'
import notes from '../dummyData'

class NoteContainer extends React.Component {

  render() {

    return (
      <div>
        {notes.map(note => <NoteCard note={note} />)}
      </div>
    )
  }

}

export default NoteContainer
