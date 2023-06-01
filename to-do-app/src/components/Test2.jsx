/* eslint-disable react/prop-types */
import { Component } from "react"

class Child extends Component{
    constructor(props){
        super(props)
        this.state = {color:props.color}
    }

    render(){

        console.log("rendering child:",this.state)
        return(
            <div style={{color:this.state.color}}>
                Hello World!
            </div>
        )
    }
}

class Parent extends Component{
    constructor(props){
        super(props)
        this.state = {color:"red"}
    }

    render(){
        console.log("parent render:",this.state)
        return(
            <div>
                <Child color ={this.state.color}/>
                <button onClick={() => this.setState({color:"green"})}>Change Color</button>
            </div>
        )
    }
}

export default Parent