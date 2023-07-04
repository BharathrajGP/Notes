import React, { useRef } from 'react'

function UseRef() {
    let naanu=useRef();//1.Declared
  return (
    <div>
      <input type='text' ref={naanu} id='a'></input> {/*2. Assigned*/}
      <button onClick={check}>Click</button>
    </div>
  )
  function check(){
    console.log(naanu.current.value)//Accessing the element
    console.log(naanu.current)
  }
  
}

export default UseRef
