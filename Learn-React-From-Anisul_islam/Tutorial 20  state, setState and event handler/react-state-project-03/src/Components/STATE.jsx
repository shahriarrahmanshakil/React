import { Component } from 'react'

export default class STATE extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            count : 1
      }
    }

    incriment = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    decriment = () => {
        this.setState({
            count : this.state.count - 1
        })
    }
    
    render() {
        const {count} = this.state //Destructuring
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={this.incriment}> + </button>
        <button onClick={this.decriment}> - </button>
      </div>
    )
  }
}
