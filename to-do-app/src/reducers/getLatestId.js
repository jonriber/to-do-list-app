

function getLatestId(tasks){

    // console.log("tasks inside latestID",tasks);
    let id = 0
    if(!(tasks.length>0)) return id
    console.log("testando:",tasks)
    let lastElement = tasks.pop()
    return (lastElement.id)+1

}

export default getLatestId