import React from 'react'

class NoteCard extends React.Component {


  render () {
    return (
      <div style={{backgroundColor: "red"}}>
          <h2 style={{color: "pink"}}>{this.props.note.title}</h2>
                    <p>{this.props.note.content}</p>
                        </div>
    )
  }
}

export default NoteCard
