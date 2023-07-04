import { memo } from "react";
import Grandchild from "./Grandchild";

const Child = () => {
    console.log("child rendered");

    return ( 
        <div>
            <h1>Child COMP</h1>
            <Grandchild/>
        </div>
     );
}
 
export default memo(Child);