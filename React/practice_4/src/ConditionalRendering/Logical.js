import React, { useState } from 'react'

function Logical() {
    let [age,setage]=useState(19);
    function intake(){
        console.log("hi");
        console.log(document.getElementById("newage").val)
        console.log(document.getElementById("newage").value)
        setage(document.getElementById('newage').value)
    }

  return (
    <div>
      {age>=18 && <h1>Eligible for voting</h1>}
      <input type='number' id='newage'></input>
      <button onClick={intake}>Input</button>
    </div>
  )
}

export default Logical
