import React from 'react';
import ReactDOM from 'react-dom/client';

const title = "This is Title";
const Description  = "This is Description";
const date = new Date();
let fulldate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

// const headingStyle = {
//   backgroundColor : "black",
//   color : 'white',
//   fontSize : '3rem',
//   padding : '15px',
// };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
        <h1 className='headingStyle'>To-Do App</h1>
      <div className='card'>
        <p className='title'>{title}</p>
        <p className='Descripttion'>{Description}</p>
        <p className='Date'>{"Date : " + fulldate}</p>
      </div>
  </div>
);
