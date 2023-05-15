import { useTaskContext } from "../contexts/TasksContext"
import Task from "./Task"

function TasksList(){
    const 
        tasks = useTaskContext(),
        taskList = tasks.length>0? tasks.map((task) => {
            return(
                <>
                    <Task task={task.text}/>
                </>
            )
        }): <h3>Start adding tasks!</h3>
    
    console.log("TASKS ON TAKS LIST:",tasks);
    return(
        <>
            <ul>
                {taskList}
            </ul>
        </>
    )
}

export default TasksList