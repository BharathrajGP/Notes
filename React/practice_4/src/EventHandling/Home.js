import React from 'react'

function Home() {
    let a=()=>{
        console.log("a")
    }
    let b=(z)=>[
        console.log("b")
    ]
  return (
    <div>
      <button onClick={a}>button A</button>
      <button onClick={()=>{b(5)}}>button B</button>
    </div>
  )
}

export default Home
