import React from 'react'

function MemoCompo({name}) {
    console.log("Rendering Compo")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoCompo)
