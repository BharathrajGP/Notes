import React from "react";

const Naanu =(props)=>{
    return(
        <div>
            <h1>
                Hello {props.name} is {props.age} years old
            </h1>
            {props.children}{/* Accessing for child tags*/}
        </div>
    )
}

export default Naanu;