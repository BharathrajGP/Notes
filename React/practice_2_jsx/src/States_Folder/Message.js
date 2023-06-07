// Create class component
import React, { Component } from "react";

class Message extends Component {
    constructor()
    {
        super()
        this.state={
            message:"Welcome Bhai"
        }
    }
    changeMessage()
    {
        //this setState() accept the object(i.e., new state of an component) as an argument
        this.setState({
            message:"Thanking You for clicking"
        })
    }
  render() {
    return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Click</button>
        </div>
    );
  }
}

export default Message;