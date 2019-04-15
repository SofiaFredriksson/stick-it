import React from 'react'

class NoteCard extends React.Component {

  render () {
    console.log(this.props)
    return (
      <div style={{ backgroundColor: this.props.findColor(this.props.note) }}>
          <h2 style={{color: "black"}}>{this.props.note.title}</h2>
                    <p>{this.props.note.content}</p>
                        </div>
    )
  }
}

export default NoteCard
