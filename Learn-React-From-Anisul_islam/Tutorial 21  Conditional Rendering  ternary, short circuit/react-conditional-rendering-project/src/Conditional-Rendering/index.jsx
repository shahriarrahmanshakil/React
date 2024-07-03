import { Component } from 'react'
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
        const {isSignin} = this.state;
        let element;

        // if(isSignin){
        //     element = <Home />;
        // }else{
        //     element = <Signin />;
        // }

        element = isSignin ? <Home /> : <Signin />

        return(
            <div>
                {element}
            </div>
        );
    }
}
export default Conditional_Rendering
