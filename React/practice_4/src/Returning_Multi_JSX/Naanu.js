import React, { useState } from 'react'

function Naanu() {
    let [name]=useState(['HitMan','Gill','King','Ajju','SKY'])
  return (
    <div>
      {
        name.map((name)=>{
            return(<div key={name}>
                <h1>{name}</h1>
            </div>)
          })
      }
    </div>
  )
}

export default Naanu
