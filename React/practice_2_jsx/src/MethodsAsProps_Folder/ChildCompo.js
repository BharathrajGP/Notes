import React from 'react'

function ChildCompo(props) {
  return (
    <div>
      {/* <button onClick={props.handler}>Greet Parent</button> */}

      {/* Passing parameter from child  */}
      <button onClick={() => props.handler("child")}>Greet Parent</button>
    </div>
  )
}

export default ChildCompo
