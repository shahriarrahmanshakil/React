import React from 'react';
import ReactDOM from 'react-dom/client';


const Description = "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.";
const desComponents = "Write components with code and markup";
let cdes = "React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.";
const date = new Date();
let fulldate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>First-React-Project-JSX</h1>
    <p>{Description}</p>
    <p><strong>{desComponents}</strong></p>
    <p>{cdes}</p>
    <p>{"Date : " + fulldate}</p>
  </div>
);
