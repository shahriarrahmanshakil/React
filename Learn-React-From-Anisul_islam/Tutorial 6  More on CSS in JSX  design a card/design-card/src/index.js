import React from 'react';
import ReactDOM from 'react-dom/client';
// import "./index.css" //import from src/index.css file

const todo_title = "Call Family";
const todo_des = "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript";
const date = new Date();
const full_date = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();

// Style Part
// const headingStyle = {
//   backgroundColor : "gray",
//   color : "white",
//   fontSize : "3rem",
//   textAlign : "center",
//   padding : "16px"
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
         {/* <h1 style={headingStyle}>Todo App</h1> */}
         <h1 className='headingStyle'>Todo App</h1>
            <div className='card'>
                <h3 className='cardTitle'>{todo_title}</h3>
                <p className='cardDes'>{todo_des}</p>
                <p className='time'>{full_date}</p>
            </div>
    </div>
);