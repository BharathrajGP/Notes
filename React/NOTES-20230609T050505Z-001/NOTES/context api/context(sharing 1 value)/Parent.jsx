import { createContext, useState } from "react";
import Child from "./Child";

export let Context = createContext();

const Parent = () => {
    let[count , setCount] = useState(10);
    
    console.log("parent rendered");
    return ( 
        <div>
            <Context.Provider value={count}>
                <h1 onClick={()=>{setCount(count+10)}} >PARENT COMP</h1>
                <Child/>
            </Context.Provider>
        </div>
     );
}
 
export default Parent;