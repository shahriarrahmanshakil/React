import React,{Component} from 'react'

class STATE extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 1
      }
    }
    Decriment = () => {
       this.setState({
            count : this.state.count - 1
       })
    }

    Incriment = () => {
        this.setState({
            count : this.state.count + 1
       })
    }
    
    render(){
        const {count} = this.state
        return(
            <div>
                Count : {count}
                <br />
                <button onClick={this.Decriment} disabled={count == 0}> - </button>
                <button onClick={this.Incriment}>+</button>
            </div>
        )
    }
}
export default STATE;