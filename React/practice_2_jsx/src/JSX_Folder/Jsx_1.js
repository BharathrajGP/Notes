import React from 'react';

// Using JSX library
// const Hello=()=>{
//     return(
//         <div>
//             <h1>I'm Bharath</h1>
//         </div>
//     )
// }


// Without using JSX
//   -> For this purpose React library provides a createElement(String->Which_Specifies_the_HTML_tag_to Render,Additional Property[Object of key value pair that will be applied to the element or adding id and class name to a tag],Chlidren for HTML Element) method which accept minimum of 3 parameter
const Hello=()=>{
    return React.createElement('div',{id:"naanu",className: "FirstClass"},React.createElement('h1',null,'Im Bharath'))
}

export default Hello;


// -> Each JSX element is just syntactic sugar for calling React.CreateElement() for this purpose only import React is needed
//  -> JSX Difference from normal html
//      * Class => className
//      * for => htmlFor
//      * onclick => onClick
//      * tabindex => tabIndex