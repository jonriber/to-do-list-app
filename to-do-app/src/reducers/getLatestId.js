

function getLatestId(tasks){
    let id = 0
    if(!(tasks.length>0)) return id
    let lastElement = tasks.pop()
    return (lastElement.id)+1

}

export default getLatestId