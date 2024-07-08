import React,{Component} from "react";

class Card2 extends Component{
    render(){
        return(
            <>
            <h1> Card2 Component</h1>
            <p>{this.props.name}</p>
            <p>{this.props.description}</p>
            </>
        )
    }
}
export default Card2;