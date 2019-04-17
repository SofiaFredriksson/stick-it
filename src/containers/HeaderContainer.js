import React, { Component } from 'react'
import CategorySelect from '../components/CategorySelect'
import CategoryForm from '../components/CategoryForm'
import './HeaderContainer.css'


class HeaderContainer extends Component {
  state = {
    toggle: false,
    searchTerm: "",
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

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, () => this.props.searchBar(this.state.searchTerm))
  }


  render() {
    console.log(this.state)
    return (
      <div className="header-container">
        <h1>Welcome to Disco Stick-It</h1>
        <input placeholder="Search By Title" name="Search" type="text" value={this.state.searchTerm} onChange={this.handleChange}/><br/>
        {this.renderPage()}
      </div>
    )
  }
}

export default HeaderContainer
