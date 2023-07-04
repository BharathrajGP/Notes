import { memo } from "react"

function Child1()
{
    console.log("child 1 renderd")

    return(
        <div>
            <h1>CHILD 1 COMP</h1>
        </div>
    )    
}
export default memo(Child1)

























// class Child extends Component 
// {

//     render()
//     {
//         console.log("child comp rendered");
//         return(
//             <div>
//                 <h1>This is child class comp - </h1>
//             </div>
//         )
//     }
// }

// export default memo(Child)