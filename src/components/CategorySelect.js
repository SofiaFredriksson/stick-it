import React from 'react'

class CategorySelect extends React.Component {
  state = {
    value: "Health"
  }

 renderCategories = () => this.props.categories.map((category, index) => <option key={index} value={category.name}> {category.name} </option>)

 handleSubmit = (e) => {
  e.preventDefault()
  this.props.pageFunc("new note")
  const category = this.props.categories.find(category => category.name === this.state.value)
  this.props.setCat(category)
 }

 handleChange = (event) => {
   this.setState({
     value: event.target.value
   })
 }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChange}>
          {this.renderCategories()}
        </select>
      <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default CategorySelect

//need categories
