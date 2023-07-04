import React, { useState } from 'react'

function Ternary() {
    let [age,setage]=useState(10);
    
    function intake(){
        console.log("hi");
        console.log(document.getElementById("newagea").val)
        console.log(document.getElementById("newagea").value)
        setage(document.getElementById('newagea').value)
    }
  return (
    <div>
      <h1>Enter age to check Eligibility for voting</h1>
      <input type='number' id="newagea"></input><br/>
      <button onClick={intake}>Check</button>
      {
        age>=18 ? <h2>You are eligible for voting</h2> : <h2>You are still a child</h2>
      }
      
    </div>
  )
}

export default Ternary
