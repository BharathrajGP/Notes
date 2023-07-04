import React, { Component } from 'react'

 class ClassCom extends Component {
  render() {
    let sty={color:'black', backgroundColor:'red'}
    const val="Naanu Dynamic value of Class Component"
    return (
      <div style={sty}>
        <h1>Naanu class Component</h1>
        {val}
      </div>
    )
  }
}

export default ClassCom
