import React, { Component } from 'react';
import NoteContainer from './containers/NoteContainer'
import HeaderContainer from './containers/HeaderContainer'
import NoteForm from './components/NoteForm'
import notes from './dummyData'

import './App.css';

const categories = [
  { name: "Work", color: "red" },
  { name: "Business", color: "blue" },
  { name: "Social", color: "green" }
]

class App extends Component {
  state = {
    page: "default",
    categories: [],
    notes: [],
    user_id: 1
  }

  componentDidMount () {
    fetch(`http://localhost:3000/users/${this.state.user_id}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      notes: data.notes,
      categories: data.categories
    }))
  }

  renderSection = () => {
    switch (this.state.page) {
      case "default":
        return <NoteContainer notes={this.state.notes} />;

      case "new note":
        return <NoteForm pageFunc={this.renderNoteForm} addNote={this.addNote}/>;

      case "edit note":
        return <h1>Hello Edit Note</h1>;

        default:
          return null
    }
  }

  renderNoteForm = (page) =>  {
    this.setState({
      page: page
    })
  }

  addCategory = (category) => {
    this.setState({
      categories: [...this.state.categories, category]
    })
  }

  addNote = (note) => {
    this.setState({
      notes: [...this.state.notes, note]
    })
  }




  render() {
    console.log(this.state)
    return (
      <div className="App">
        <HeaderContainer pageFunc={this.renderNoteForm} addCategory={this.addCategory} categories={this.state.categories}/>
        {this.renderSection()}
      </div>
    );
  }
}

export default App;
