import React from "react";

class Car extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            speed:0,
            fuel:45
        }
    }

    accelerate =() =>{
        this.setState({speed:this.state.speed +10})
    }
        decelerate =() =>{
        this.setState({speed:this.state.speed -10})
    }
    render(){
        <div>
            <h1>Hi i am just the car of make{this.props.make} and the model {this.props.model} </h1>
            <h2></h2>
        </div>
    }

    Speed <progress value="32" max="110"> {this.state.speed} km/h </progress>
}