import { createContext, useState } from "react";
import Child from "./Child";

export let Context = createContext();
export let Context2 = createContext();


const Parent = () => {
    let[count , setCount] = useState(10);
    let[count2 , setCount2] = useState(100);

    console.log("parent rendered");
    return ( 
        <div>
            <Context.Provider value={count}>
            <Context2.Provider value={count2}>
                <h1 onClick={()=>{setCount(count+10)}} >PARENT COMP</h1>
                <Child/>
            </Context2.Provider>    
            </Context.Provider>
        </div>
     );
}
 
export default Parent;