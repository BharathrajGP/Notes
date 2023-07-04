import React, { useEffect, useState } from 'react'

function UseEffect() {
    let [age,setage]=useState(15)
    let [count,setcount]=useState(0);
    function changeState(){
        setage(age+1);
        setcount(count+1)
    }
    useEffect(()=>{
        console.log("One Callback")
    })
    useEffect(()=>{
        alert("Two")
        console.log("Age : Two")
    },[age])
    useEffect(()=>{
        console.log("Three : Empty")
    },[])
  return (
    <div style={{border:10,borderColor:'black',backgroundColor:'yellow'}}>
      <h1>Age is {age}</h1>
      <h2>{age>=18 ? 'Eligible for voting':`Still a child ruko zara till ${18-age} years`}</h2>
      <h2>{count}</h2>
      <button onClick={changeState}>clickme</button>
    </div>
  )
}

export default UseEffect
