import { useRef } from "react"
import { useTaskDispatch } from "../contexts/TasksContext"

const AddTask = () => {
    const 
        taskInputRef = useRef(""),
        dispatch = useTaskDispatch();

    function addTask(e){
        e.preventDefault();
        dispatch({
            type:"added", 
            text:taskInputRef.current.value,
            used:false
        })

        alert("Tarefa Adicionada com sucesso")
        taskInputRef.current.value = ""
    }
    return(
        <>
            <h3>Add a Task:</h3>
            <form onSubmit={(e)=>addTask(e)}>
                <fieldset>
                    <label>New Task</label>
                    <input ref={taskInputRef} type="text" />
                    <button  type="submit">Add</button>
                </fieldset>
            </form>
        </>
    )
}

export default AddTask