import React from 'react'
import './CSSMyStyle.css'

function Stylesheet(props) {
    const className=props.primary ? 'primary':''
  return (
    <div>
      <h1 className={className}>Style Sheet</h1>
    {/* Appling poperty of more than one classes */}
      <h1 className={`${className} two`}>Style Sheet</h1>
    </div>
  )
}

export default Stylesheet
