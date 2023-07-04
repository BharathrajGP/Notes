import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    let [age,setage]=useState(18)
    function callChild(){
        // return (
        // <Child props={age}></Child>)
        console.log("object");
        <Child props={age}></Child>
    }
  return (
    <div>
      
      {/* <button onClick={()=>{<Child props={age}></Child>}}>Naanu</button> */}
      <Child props={age}></Child>
    </div>
  )
}

export default Parent
