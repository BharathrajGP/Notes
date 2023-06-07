import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
      this.state = {
         count:0
      }
    }
    
    increment(){
        //We can,t modify the state directly if we do means it won't render the UI so setState() is used
        //update based on current State
        this.setState({
            count:this.state.count+1
        },
        ()=>{
            console.log("Value",this.state.count)
        })
        console.log(this.state.count)

        //update based on previous State
    }

  render() {
    return (
      <div>
        <div>count -{this.state.count}</div>
        <button onClick={()=>this.increment()}>Increment</button>
      </div>
      
    )
  }
}

export default Counter
