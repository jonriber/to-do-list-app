import { useRef } from "react"
import { useTaskDispatch } from "../contexts/TasksContext"

const AddTask = () => {
    const 
        taskInputRef = useRef(""),
        dispatch = useTaskDispatch();

    function addTask(e){
        e.preventDefault();
        console.log("RODANDO A FUNCTION DE ADICIONAR $$$$",taskInputRef.current.value)
        dispatch({
            type:"added",
            id: 0, 
            text:taskInputRef.current.value,
            used:false
        })
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