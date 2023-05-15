import getLatestId from "./getLatestId"

function tasksReducer(tasks, action){
    switch(action.type){
        case "added":
            console.log("tasks no reducer:",tasks )
            return[...tasks,{
                id:getLatestId(tasks),
                text: action.text,
                done:false
            }]
        case "changed":
            return tasks.map((t) => {
                if(t.id === action.task.id){
                    return action.task
                }else{
                    return t
                }
            })
        case "deleted":
            return tasks.filter(t => t.id !== action.id)
        default:
            throw Error ("Unknown Action",action.type)
    }       
}

export default tasksReducer;