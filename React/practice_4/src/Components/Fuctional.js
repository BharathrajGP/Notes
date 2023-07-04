import React from 'react'

function Fuctional() {
    let val="Naanu Dynamic value of Functional Component"
    function abc(a,b){
        return a+b;
    }
  return (
    <div style={{color:'red',backgroundColor:'yellow'}}>
      <h1>Naanu Functional Component</h1>
      {val}
      {abc(5,5)}
    </div>
  )
}

export default Fuctional
