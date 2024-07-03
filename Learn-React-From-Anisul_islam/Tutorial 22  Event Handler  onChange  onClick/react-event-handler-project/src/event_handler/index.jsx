import { Component } from 'react'

class Event_Handler extends Component {
    handleClicked = () =>{
        console.log("clicked");
    }
    
  render() {
    return (
      <div>
        <button onClick={this.handleClicked}>Clicked</button>
      </div>
    )
  }
}
export default Event_Handler
 