import React from 'react'
import { Link } from 'react-router-dom'

function Second() {
    let a=3;
  return (
    <div>
      Second page
      <Link to={`/${a}`}>For Third page</Link>
    </div>
  )
}

export default Second
