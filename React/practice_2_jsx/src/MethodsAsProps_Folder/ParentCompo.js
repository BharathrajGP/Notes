import React, { Component } from 'react'
import ChildCompo from './ChildCompo'

class ParentCompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"Parent"
      }
      this.parent=this.parent.bind(this)
    }
    // parent(){
    //     alert("Hello, "+this.state.parentName)
    // }

    // Passing parameter from the child
    parent(child){
        alert("Hello, "+this.state.parentName+" From "+child)
    }
  render() {
    return (
      <div>
        <ChildCompo handler={this.parent}></ChildCompo>{/*Importing child component */}
      </div>
    )
  }
}

export default ParentCompo
