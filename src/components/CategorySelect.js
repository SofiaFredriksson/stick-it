import React, { Component } from 'react'

const CategorySelect = (props) => {
  return (
    <select>
      <option value="work">Work</option>
      <option value="social">Social</option>
      <option value="health">Health</option>
      <option value="appointment">Appointment</option>
    </select>
  )
}

export default CategorySelect
