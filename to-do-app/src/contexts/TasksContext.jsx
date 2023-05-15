/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useReducer,useContext } from "react"
import tasksReducer from "../reducers/TasksReducer";
// import initialTasks from "../reducers/initialTasks";

export const TasksContext = createContext(null);

export const TasksDispatchContext = createContext(null);

export function TasksProvider({children}){
    const [tasks,dispatch] = useReducer(tasksReducer,[])
    console.log("tasks Reducer:",tasks)
    return(
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

export function useTaskContext (){ return useContext(TasksContext)}

export function useTaskDispatch(){ return useContext(TasksDispatchContext)}
