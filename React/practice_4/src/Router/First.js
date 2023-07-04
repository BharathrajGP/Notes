import React from 'react'
import { Link } from 'react-router-dom'

function First() {
    let a=2;
  return (
    <div>
      first page
      <Link to={`${a}`}>For Second page</Link>
    </div>
  )
}

export default First
