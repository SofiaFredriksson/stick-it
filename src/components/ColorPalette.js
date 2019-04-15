import React, { Component } from 'react';


import CircularColor from 'react-circular-color';


class ExampleComponent extends Component {
  state = {
    color: "white"
  }

  handleColorChange = (color) => {
    this.props.setColor(color)
  }

  render() {
    return (
      <div>
      <CircularColor size={200} onChange={this.handleColorChange} />
      </div>
    );
  }
}

export default ExampleComponent
