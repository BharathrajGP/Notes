import Grandchild from "./Grandchild";

const Child = ({count}) => {
    console.log("child rendered");

    return ( 
        <div>
            <h1>Child COMP</h1>
            <Grandchild count={count}/>
        </div>
     );
}
 
export default Child;