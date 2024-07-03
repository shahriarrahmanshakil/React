import React, { Component } from 'react'
import Home from './Home'
import Signin from './Signin'

class Conditional_Rendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isSignin : false
        }
    }
    
    render() {
        if(this.state.isSignin){
            return <Home />
        }else{
            return <Signin />
        }
    }
}
export default Conditional_Rendering
