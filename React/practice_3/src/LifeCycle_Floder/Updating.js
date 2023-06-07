import React, { Component } from 'react'

export class Updating extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Bharathraj'
      }
      console.log('1. Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('2. getDerivedStateFromPropS Updating')
        return null;
    }
    shouldComponentUpdate() {
        console.log("3. shouldComponentUpdate updating")
    }
   getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("5. getSnapshotBeforeUpdate")
    return null;
   }
   componentDidUpdate(prevProps,prevState){
    console.log("6. componentDidUpdate")
   }
   changeSate=()=>{
    this.setState({
      name:'Naanu'
    })
   }
  render() {
    console.log('4. Render')
    return (
      <div>
      Updating
      <button onClick={this.changeSate}>Click</button>
      {/* Child Component */}
      {/* <MountingWithChild></MountingWithChild> */}
    </div>
    )
  }
}

export default Updating

