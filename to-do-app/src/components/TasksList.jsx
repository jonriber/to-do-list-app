import { useTaskContext } from "../contexts/TasksContext"
import Task from "./Task"

function TasksList(){
    const 
        tasks = useTaskContext(),
        taskList = tasks.map((task) => {
            return(
                <>
                    <Task task={task.text}/>
                </>
            )
        });
    
    console.log("TASKS ON TAKS LIST:",tasks);
    return(
        <>
            <ul>
                {tasks.length >0 ?
                taskList:
                null}
            </ul>
        </>
    )
}

export default TasksList