import React, { Component } from 'react';
import NoteContainer from './containers/NoteContainer'
import HeaderContainer from './containers/HeaderContainer'


import './App.css';

class App extends Component {


  render() {

    return (
      <div className="App">
        <HeaderContainer />
        <NoteContainer />
      </div>
    );
  }
}

export default App;
