import React from 'react'

function Column() {
    // const items=[{id:1,title:'Bharath'}]  
  return (
    <React.Fragment>
        {/* {
            items.map(item =>(
                <React.Fragment key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                </React.Fragment>    
            ))
        } */}
        <td>Name</td>
        <td>PhNo.</td>
    </React.Fragment>
  )
}

export default Column
