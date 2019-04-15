import React, { Component } from 'react'
import CategorySelect from '../components/CategorySelect'
import CategoryForm from '../components/CategoryForm'


class HeaderContainer extends Component {
  state = {
    toggle: false
  }

  toggleFunc = () => {
    this.setState({ toggle: !this.state.toggle})
  }

  renderPage() {
    if (!this.state.toggle) {
      return (
        <span>
        <button onClick={this.toggleFunc}>NEW CATEGORY</button>
        <CategorySelect categories={this.props.categories} pageFunc={this.props.pageFunc} setCat={this.props.setCat} />
        </span>
      )
      } else {
        return <CategoryForm addCategory={this.props.addCategory} toggleFunc={this.toggleFunc}/>
      }
  }


  render() {

    console.log(this.state)

    return (
      <div className="header-container">
        <h1>Welcome to Stick-It</h1>
        {this.renderPage()}
      </div>
    )
  }
}

export default HeaderContainer
