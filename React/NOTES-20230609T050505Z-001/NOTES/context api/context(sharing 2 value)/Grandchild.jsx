import { memo, useContext } from "react";
import Greatgrandchild from "./Greatgrandchild";
import { Context } from "./Parent";

const Grandchild = () => {
    console.log("Grandchild rendered");
    let count = useContext(Context);

    return ( 
        <div>
            <h1>Grandchild COMP</h1>
            <h1>COUNT : {count}</h1>
            <Greatgrandchild/>
        </div>
     );
}
 
export default memo(Grandchild);