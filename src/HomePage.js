import React, { Component } from 'react';
import NoteContainer from './containers/NoteContainer'
import HeaderContainer from './containers/HeaderContainer'
import NoteForm from './components/NoteForm'
import EditNoteForm from './components/EditNoteForm'
import LoginContainer from './containers/LoginContainer'
import './App.css';


class HomePage extends Component {
  state = {
    page: "default",
    categories: [],
    notes: [],
    user_id: this.props.userID,
    username: null,
    selectedCategoryId: "empty",
    currentNote: {}
  }

  componentDidMount () {
    fetch(`http://localhost:3000/users/${this.state.user_id}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      notes: data.notes,
      categories: data.categories,
      username: data.username
    }))
  }

  renderSection = () => {
    switch (this.state.page) {
      case "default":
        return <NoteContainer findCategory={this.findCategory} findColor={this.findColor} notes={this.state.notes} pageFunc={this.renderPage} setCurrentNote={this.setCurrentNote} deleteNote={this.deleteNote} />;

      case "new note":
        return <NoteForm pageFunc={this.renderPage} action={this.addNote}/>;

      case "edit note":
        return <EditNoteForm pageFunc={this.renderPage} editNote={this.editNote} currentNote={this.state.currentNote}/>;

        default:
          return null
    }
  }

  findCategory = (note) => {
    const category = this.state.categories.find(category => category.id === note.category_id)
    return category.name
  }

  renderPage = (page) =>  {
    this.setState({
      page: page
    })
  }

  addCategory = (category) => {
    fetch('http://localhost:3000/categories', {
	     method: "POST",
       headers: {
	        "Content-Type" : "application/json" },
       body: JSON.stringify({...category, user_id: this.state.user_id})
        })
	       .then(resp => resp.json())
         .then(data => this.setState({categories: [...this.state.categories, data]}))
  }

  addNote = (note) => {
    fetch('http://localhost:3000/notes', {
	     method: "POST",
       headers: {
	        "Content-Type" : "application/json" },
       body: JSON.stringify({...note, category_id: this.state.selectedCategoryId })
        })
	       .then(resp => resp.json())
         .then(data => this.setState({notes: [...this.state.notes, data]}))
  }

  deleteNote = (note) => {
    fetch(`http://localhost:3000/notes/${note.id}`, {method: "DELETE"})
      .then(resp => resp.json())
      .then(deletedNote => this.setState({
        notes: [...this.state.notes.filter(note => note.id !== deletedNote.id)]
      }))
  }

  editNote = (note) => {
    fetch(`http://localhost:3000/notes/${note.id}`, {
      method: "PATCH",
      headers: {
  		"Content-Type" : "application/json"
      },
      body: JSON.stringify({
        note: {
          title: note.title,
          content: note.content
        }
      })
    }).then(resp => resp.json())
      .then(updatedNote => this.setState({
        notes: this.state.notes.map(note => {
          if (note.id !== updatedNote.id) return note;
          return updatedNote;
        })
      }))
  }

  setCurrentNote = (note) => {
    this.setState({currentNote: note}, this.renderPage("edit note"))
  }


  findColor = (note) => {
    const category = this.state.categories.find(cat => cat.id === note.category_id)
    return category.color
  }

  setCategoryId = (category) => {
    this.setState({
      selectedCategoryId: category.id
    })
  }

  render() {
    console.log(this.state.user_id)
    return (
      <div className="App">
        {
          this.state.user_id === null ?
          <LoginContainer />
          :
          <HeaderContainer pageFunc={this.renderPage} addCategory={this.addCategory} setCat={this.setCategoryId} categories={this.state.categories}/>}
        {this.renderSection()}
      </div>
    );
  }
}

export default HomePage;
