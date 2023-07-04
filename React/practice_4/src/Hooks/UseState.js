import React, { useState } from 'react'

function UseState() {
    let [age,setage]=useState(15);
    function changeState(){
        setage(age+1);
    }
  return (
    <div style={{border:10,borderColor:'black',backgroundColor:'green'}}>
      <h1>Age is {age}</h1>
      <h2>{age>=18 ? 'Eligible for voting':`Still a child ruko zara till ${18-age} years`}</h2>
      <button onClick={changeState}>clickme</button>
    </div>
  )
}

export default UseState
