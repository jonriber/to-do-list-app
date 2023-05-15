import AddTask from "./AddTask"
// import TaskList from "./TaskList"
import { TasksProvider } from "../contexts/TasksContext";

const ToDoApp = () =>{
    
    // function handlerAddTask(e,text){
    //     e.preventDefault();
    //     console.log("ADD NEW TASK HANDLER!!!");
    //     setNextId((nextId) => nextId +1);
    //     dispatch({
    //         type: 'added',
    //         id: nextId,
    //         text: text,
    //     })
    // }

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
    return(
        <>
            <TasksProvider>
                <h3>Task App Example</h3>
                <AddTask/>
                {/* <TaskList /> */}
            </TasksProvider>
            
        </>
    )
}

export default ToDoApp

