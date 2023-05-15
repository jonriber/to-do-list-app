/* eslint-disable react/prop-types */
const Task = (props) => {
    console.log("task final:",props)
    return(
        <>
            <li>
                <h5>{props.task.text}</h5>
            </li>
        </>
    )
}

export default Task