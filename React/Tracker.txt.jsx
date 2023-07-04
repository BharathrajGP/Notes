import { useState } from "react"

function Tracker()
{
    let[tasklist , setTasklist] = useState(
                        [
                            {id:1 ,employee:"akash",task:"design layout",start:"1/2/2023",end:"25/4/2023"},
                            {id:2 ,employee:"gunda",task:"back end",start:"1/2/2023",end:"25/4/2023"},
                            {id:3 ,employee:"abhi",task:"presentation",start:"1/2/2023",end:"25/4/2023"},
                            {id:4 ,employee:"alex",task:"front end",start:"1/2/2023",end:"25/4/2023"},
                            {id:5 ,employee:"king",task:"data managment",start:"1/2/2023",end:"25/4/2023"},
                        ])
    let addNewTask = (e)=>{
        e.preventDefault();
        let newTask = { employee: document.getElementById("emp").value ,
                        task: document.getElementById("task").value ,
                        start: new Date().toLocaleString() ,
                        end: document.getElementById("end").value
                    }

        let result = tasklist.some( 
            (t,i,a)=>{ return t.employee==newTask.employee && t.task==newTask.task  } );

        if(result)
        {
            alert("task already present")
        }
        else
        {
            let temp = [...tasklist];
            temp.push(newTask);
            setTasklist(temp);
            alert("new task added");
        }
    }

    let deleteTask = (task)=>{
        let temp = tasklist.filter((t)=>{ return t.id != task.id } )
        setTasklist(temp);
        alert("task deleted");
    }
    
    return(
        <div className="tracker">
            <h1> https://ctxt.io/2/AACQwym9Fw </h1>
            <h1>Employee Task Time Tracker</h1>
            <hr />
            <form onSubmit={addNewTask} >
                <input type="text" placeholder="Employee name" id="emp" required />
                <input type="text" placeholder="Task name" id="task" required />
                <input type="date" id="end" />

                <input type="submit"  />
            </form>


            <table border="3px" cellPadding="5px">
                <thead>
                    <tr>
                        <th>Sl no</th>
                        <th>Employee name</th>
                        <th>Task name</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    tasklist.map((t,i)=>{ return(
                        <tr key={t.task+i}>
                            <td>{i+1}</td>
                            <td>{t.employee}</td>
                            <td>{t.task}</td>
                            <td>{t.start}</td>
                            <td>{t.end}</td>
                            <td><button onClick={()=>{deleteTask(t)}}>delete</button></td>
                        </tr>
                    ) })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Tracker