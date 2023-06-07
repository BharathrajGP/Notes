import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }

    //   For Method 3:
    // this.clickHandler=this.clickHandler.bind(this)
    }

    // this clickHandler for method 1 to method 3
    // clickHandler()
    // {
        // this.setState({
        //     message:"GoodBye"
        // })
        // console.log(this)
    // }

    // this clickHandler only for method 4
    clickHandler=()=>{
        this.setState({
            message:"GoodBye"
        })
        console.log(this)
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Method 1 Binding in render method */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click_Event_Bind</button> */}

        {/* Method 2: Arrow function in render method */}
        {/* <button onClick={()=>this.clickHandler()}>Click_Event_Bind</button> */}

        {/* Method 3: Binding Event Handler in class Constructor */}
        {/* <button onClick={this.clickHandler}>Click_Event_Bind</button> */}

        {/* Method 4: Using an Arrow function as a class property */}
        <button onClick={this.clickHandler}>Click_Event_Bind</button>
      </div>

    
    )
  }
}

export default EventBind
