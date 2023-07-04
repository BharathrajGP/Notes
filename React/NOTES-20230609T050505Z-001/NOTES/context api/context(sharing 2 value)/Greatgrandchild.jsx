import { useContext } from "react";
import { Context } from "./Parent";
import { Context2 } from "./Parent";

const Greatgrandchild = () => {

    console.log("Greatgrandchild rendered");
    let count = useContext(Context);
    let count2 = useContext(Context2);

    

    return ( 
        <div>
            <h1>Greatgrandchild COMP</h1>
            <h1>COUNT1 :{count}</h1>
            <h1>COUNT2 :{count2}</h1>

        </div>
     );
}
 
export default Greatgrandchild;