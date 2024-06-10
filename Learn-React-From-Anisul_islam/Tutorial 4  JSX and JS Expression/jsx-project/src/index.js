import React from 'react';
import ReactDOM from 'react-dom/client';

const todo_title = "Call Family";
const todo_des = "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript";
const date = new Date();
const full_date = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
         <h1>Todo App</h1>
         <h3>{todo_title}</h3>
         <p>{todo_des}</p>
         <p>{full_date}</p>
    </div>
);