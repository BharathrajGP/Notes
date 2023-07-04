import { useContext } from "react";
import { Context } from "./Parent";

const Greatgrandchild = () => {

    console.log("Greatgrandchild rendered");
    let count = useContext(Context);

    return ( 
        <div>
            <h1>Greatgrandchild COMP</h1>
            <h1>COUNT :{count}</h1>
        </div>
     );
}
 
export default Greatgrandchild;