import React, { Component } from 'react'
import RegularCompo from './RegularCompo'
import PureCompo from './PureCompo'

class ParentCompo extends Component {
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
        <RegularCompo name={this.state.name}></RegularCompo>
        <PureCompo name={this.state.name}></PureCompo>
      </div>
    )
  }
}

export default ParentCompo
