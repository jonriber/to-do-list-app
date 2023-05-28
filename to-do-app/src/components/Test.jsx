/* eslint-disable react/prop-types */
import {  useEffect, useRef } from "react"

const Test = () => {

    // const [counter,useCounter] = useState("")
    const testImages = ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Ffundo&psig=AOvVaw3Az-Csj7jZVzfdu2ZGOmFU&ust=1685377566324000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDnmOu2mP8CFQAAAAAdAAAAABAE"]
    useEffect(() => {

    })
    return(

        <>
            <h1>TESTE</h1>
            <div>
                {testImages.map((item) => {
                    return(
                        <LazyElement url={item} key={item}/>
                    )
                })}
            </div>

        </>
    )
}



export default Test

function LazyElement (props){
    console.log("props:",props)

    const
        imgUrl = props.url,
        // altImgText = props.altImgText,
        imgRef = useRef(null);

    
    //useEfect when mounting this lazy component
    useEffect(() => {
        const obs = new IntersectionObserver((items) => {
            items.forEach(item => {
                if(item.isIntersecting){
                    imgRef.current.src = imgUrl
                    obs.unobserve(imgRef.current)
                }
            })
        })

        obs.observe(imgRef.current)

        //cleaning my sideEffect with return
        return() => {
            obs.unobserve(imgRef.current)
        }
    })

    // alt={altImgText}
    
    return(
        <>
            <img ref={imgRef} />
        </>
    )}