import React from 'react'

const a={
    fontSize:'100px',
    color:'Red',
    fontStyle:'Italic'
}
function Inline() {
  return (
    <div>
      <h2 style={a}>Inline</h2>
    </div>
  )
}

export default Inline
