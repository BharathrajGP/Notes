import { memo } from "react"

function Child2({count2 , changeCount2})
{
    console.log("child 2 renderd")

    return(
        <div>
            <h1>CHILD 2 COMP</h1>
            <h2>COUNT2 : {count2} </h2>
            <button onClick={changeCount2}>c2</button>
        </div>
    )    
}
export default memo(Child2)

























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