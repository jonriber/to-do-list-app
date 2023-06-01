import AddTask from "./AddTask"
import TasksList from "./TasksList";
import { TasksProvider } from "../contexts/TasksContext";
import Test from "./Test";
import Parent from "./Test2";

const ToDoApp = () =>{
    // function handlerChangeTask(task){
    //     dispatch({
    //         type: "changed",
    //         task: task
    //     })
    // }

    // function handlerDeleteTask(id){
    //     dispatch({
    //         type: "deleted",
    //         id:id
    //     })
    // }
    // changeTaskHandler={handlerChangeTask} deleteTaskHandler={handlerDeleteTask}
    const data = {
        apple:1,
        mango:2,
        banana:3
    }
    return(
        <>
            <TasksProvider>
                <h3>Task App Example</h3>
                <AddTask/>
                <TasksList />
                <Test {...data}/>
                <Parent />
            </TasksProvider>
            
        </>
    )
}

export default ToDoApp

