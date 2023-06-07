import React from 'react'

function Key_As_Index() {
    const names=['Bharath','Arun','Kiran','Bharath']
    const nameList=names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
  return (
    <div>
      {nameList}
    </div>
  )
}

export default Key_As_Index
