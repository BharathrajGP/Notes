import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLog:true
      }
    }
    
  render() {
    // A) if/else
    // if(this.state.isLog){
    //     return(
    //         <div>Welcome 2</div>
    //     )
    // }
    // else
    // {
    //     return(
    //         <div>Welcome 1</div>
    //     )
    // }

    // B)Element Variable
    // let message
    // if(this.state.isLog)
    // {
    //     message=<div>Welcome True</div>
    // }
    // else{
    //     message=<div>Welcome False</div>
    // }
    // return message;


    //  C) Ternary operator
    // return(
    //     this.state.isLog ? <div>Welcome True</div>: <div>Welcome False</div>
    // )

    
    //  D) short-circuit operator approach
    //      -> If left hand side is true it is going to evaluate the RHS else it won't evaluate the RHS
    
    return this.state.isLog && <div>Welcome True</div>;
  }
}

export default User
