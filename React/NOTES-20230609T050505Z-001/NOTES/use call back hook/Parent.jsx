import { useCallback, useState} from "react"
import { Link } from "react-router-dom";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent()
{
    let [count1 , setCount1] = useState(10);
    let [count2 , setCount2] = useState(100);

    console.log("Parent renderd")

    let changeCount1 = useCallback(()=>{
        setCount1(count1+10);
    } , [count1])

    let changeCount2 = useCallback(()=>{
        setCount2(count2+100);
    } , [count2])

    return(
        <div>
            <h1>PARENT COMP</h1>
            <h1>COUNT1 : {count1}</h1>
            <h1>COUNT2 : {count2}</h1>

            <button onClick={changeCount1}> C1 </button>
            <button onClick={changeCount2}> C2 </button>
            <hr />

            <Child1 count1={count1} changeCount1={changeCount1}/>
            <Child2 count2={count2} changeCount2={changeCount2}/>
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