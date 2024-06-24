import React from "react"
import { v4 as uuidv4 } from 'uuid';



const todos = [
    {
      todoTitle : "todo title - 01",
      todoDescription : "todo Description - 01",
    },
    {
      todoTitle : "todo title - 02",
      todoDescription : "todo Description - 02",
    },
    {
      todoTitle : "todo title - 03",
      todoDescription : "todo Description - 03",
    },
    {
      todoTitle : "todo title - 04",
      todoDescription : "todo Description - 04",
    }
  
  ];
    

function List(){
    return <div>
       {todos.map((todo) => {
        return <div key={uuidv4()}>
            <h1>{todo.todoTitle}</h1>
            <h4>{todo.todoDescription}</h4>
        </div>
       })}
    </div>
}
export default List;