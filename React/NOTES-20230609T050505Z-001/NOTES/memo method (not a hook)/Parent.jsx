import { useState} from "react"
import { Link } from "react-router-dom";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent()
{
    console.log("Parent renderd")

    let [count1 , setCount1] = useState(10);

    let changeCount1 = ()=>{
        setCount1(count1+10);
    }

    return(
        <div>
            <h1>PARENT COMP</h1>
            <h1>COUNT1 : {count1}</h1>
            <button onClick={changeCount1}> C1 </button>
            <hr />
            <Child1/>
        </div>
    )
}
export default Parent




























// class Parent extends Component
// {
//     constructor()
//     {
//         super()
//         this.state = { count1 : 10 };
//         console.log("constructor method is executed");
//     }
//     render()
//     {
//         console.log("render method is executed");
//         return(<div>
//                 <h1>This is a class comp</h1>
//                 <h2>COUNT1:  {this.state.count1} </h2>
//                 <button onClick={()=>{ this.setState({count1 : this.state.count1+10}) }}> 
//                     increase C1
//                 </button>
//                 <hr />

//                 <Child/>
//             </div>)
//     }
//     componentDidMount()
//     {
//         console.log("component Did Mount method is executed");
//     }
//     componentDidUpdate()
//     {
//         console.log("component Did Update method is executed");
//     }
//     componentWillUnmount()
//     {
//         console.log("component Will Unmount method is executed");
//     }
// }
// export default Parent