import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <div>
             <h1>Class Component</h1>
             <h1>Hi, {this.props.name} is {this.props.age} years old</h1>
             {this.props.children}
    </div>;
  }
}

export default Welcome;
