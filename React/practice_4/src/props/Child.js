import React from 'react'

function Child({props}) {
  return (
    <div>
        {console.log("Parent")}
      <h1>Age is {props}</h1>
    </div>
  )
}

export default Child
