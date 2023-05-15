/* eslint-disable react/prop-types */
const Task = ({task}) => {
    console.log("task final:",task)
    return(
        <>
            <li>
                <h5>{task}</h5>
            </li>
        </>
    )
}

export default Task