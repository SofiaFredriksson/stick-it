import React from 'react'
import { Switch, Route, withRouter } from "react-router-dom"
import './HomeContainer.css'



class HomeContainer extends React.Component {



  render() {
    return (
      <div className="homeContainer">
        <h1>Welcome to Disco Stick It! </h1>
        <button onClick={() => this.props.history.push("/login")}>Login</button>
        <button onClick={() => this.props.history.push("/signup")}>Signup</button>
      </div>
    )
  }

}

export default HomeContainer
