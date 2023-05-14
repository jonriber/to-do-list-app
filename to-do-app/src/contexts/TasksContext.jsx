/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react"
import tasksReducer from "../reducers/TasksReducer";
import initialTasks from "../reducers/initialTasks";

export const TasksContext = createContext(null);

export const TasksDispatchContext = createContext(null);

export function TasksProvider({children}){
    const [tasks,dispatch] = useReducer(tasksReducer,initialTasks)
    return(
        <>
            <TasksContext.Provider value={tasks}>
                <TasksDispatchContext.Provider value={dispatch}>
                    {children}
                </TasksDispatchContext.Provider>
            </TasksContext.Provider>
        </>
    )
}

export const useContext = () => useContext(TasksContext);

export const useTaskDispatch = () => useContext(TasksDispatchContext);