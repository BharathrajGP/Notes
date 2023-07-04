import React, { Component } from 'react'
import MemoCompo from './MemoCompo'

class ParentCompos extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Bharath'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Bharath'
            })
        },2000)
    }
  render() {
    console.log("Parent compo")
    return (
      <div>
        ParentComponent
        <MemoCompo name={this.state.name}></MemoCompo>
      </div>
    )
  }
}

export default ParentCompos
