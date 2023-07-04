import Greatgrandchild from "./Greatgrandchild";

const Grandchild = ({count}) => {
    console.log("Grandchild rendered");

    return ( 
        <div>
            <h1>Grandchild COMP</h1>
            <Greatgrandchild count={count}/>
        </div>
     );
}
 
export default Grandchild;