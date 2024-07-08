import React, {Component} from "react";

class Card2 extends Component{
    render(){
        return(
            <>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
            </>
        )
    }
}
export default Card2;