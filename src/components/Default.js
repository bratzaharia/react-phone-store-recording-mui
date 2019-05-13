import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Page not found</h3>
        <h4>The requested URL <span style={{color: "red"}}>{ this.props.location.pathname }</span> was not found!</h4>
      </div>
    )
  }
}
