import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log("Button clicked from Class Compo")
    }
  render() {
    return (
      <div>
        {/* this key word is mandatory in class component */}
        <button onClick={this.clickHandler}>ClassClick</button>
      </div>
    )
  }
}

export default ClassClick
