import React, { Component } from 'react'
import MountingWithChild from './MountingWithChild'

export class Mounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Bharathraj'
      }
      console.log('1. Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('2. getDerivedStateFromPropS')
        return null;
    }
    componentDidMount(){
        console.log('4. componentDidMount')
    }
  render() {
    console.log('3. Render')
    return (
      <div>
        mOUNTING
        {/* Child Component */}
        <MountingWithChild></MountingWithChild>
      </div>
    )
  }
}

export default Mounting

