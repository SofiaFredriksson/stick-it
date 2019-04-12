import React from 'react'

const CategorySelect = (props) => {

  const renderCategories = () => props.categories.map((category, index) => <option key={index} value="category.name">{category.name}</option>)

  return (
    <select>
      {renderCategories()}
    </select>
  )
}

export default CategorySelect

//need categories
