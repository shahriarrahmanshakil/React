// import React from 'react';
// import ReactDom from 'react-dom';
import './index.css';

const title = "To-Do App";
const description = "This app offers nearly every function you could want in a to-do list app ensconced in a clean, intuitive interface. A subscription is required for reminders and other key features, though.";
const date = new Date();
const fulldate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

function App() {
  return (
    <>
      <h1 className="heading"> {title} </h1>
      <div className="card">
          <h2 className='cardTitle'>Call Family</h2>
          <p className='cardDescription'>{description}</p>
          <p className='cardDate'>{fulldate}</p>
      </div>
    </>
  )
}

export default App
