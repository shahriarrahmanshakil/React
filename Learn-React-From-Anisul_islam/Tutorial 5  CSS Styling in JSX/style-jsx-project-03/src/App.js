import React from 'react';
// import './index.css';


let heading = "ToDo App";
let title = "Call Family";
let Description = "This is Description";
let date = new Date();
let fullDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(); 

// let headingstyle = {
//     textAlign : "center",
//     color : "white",
//     backgroundColor : "gray",
//     fontSize : "3rem",
//     padding : "20px"
// }


function App() {
  return (
    <div>
      <h1 className="headingstyle">{heading}</h1>
      <div className="card">
        <h3 className="cardtitle">{title}</h3>
        <p className="cardbody">{Description}</p>
        <p className="carddate">{fullDate}</p>
      </div>
    </div>
  );
}

export default App;
