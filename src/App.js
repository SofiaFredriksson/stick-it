import React, { Component } from 'react';
import NoteContainer from './containers/NoteContainer'
import HeaderContainer from './containers/HeaderContainer'
import NoteForm from './components/NoteForm'
import notes from './dummyData'
import './App.css';

class App extends Component {
  state = {
    page: "default",
    categories: [],
    notes: [],
    user_id: 1,
    selectedCategoryId: "empty"
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
        return <NoteContainer findColor={this.findColor} notes={this.state.notes} />;

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
    console.log(this.state.selectedCategoryId)
    return (
      <div className="App">
        <HeaderContainer pageFunc={this.renderNoteForm} addCategory={this.addCategory} setCat={this.setCategoryId} categories={this.state.categories}/>
        {this.renderSection()}
      </div>
    );
  }
}

export default App;
