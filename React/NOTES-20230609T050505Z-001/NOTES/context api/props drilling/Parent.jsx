import { useState } from "react";
import Child from "./Child";

const Parent = () => {
    let[count , setCount] = useState(10);
    console.log("parent rendered");
    return ( 
        <div>
            <h1 onClick={()=>{setCount(count+10)}} >PARENT COMP</h1>
            <Child count={count}/>
        </div>
     );
}
 
export default Parent;