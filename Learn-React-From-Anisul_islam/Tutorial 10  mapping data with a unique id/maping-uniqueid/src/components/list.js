import React from "react"
import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        id : uuidv4(),
      title : "title-01",
      description : "Description-01",
    },
    {
        id : uuidv4(),
      title : "title-01",
      description : "Description-01",
    },
    {
        id : uuidv4(),
      title : "title-01",
      description : "Description-01",
    },
    {
        id : uuidv4(),
      title : "title-01",
      description : "Description-01",
    },
    {
        id : uuidv4(),
      title : "title-01",
      description : "Description-01",
    },
];

const List = () => {
    // console.log(uuidv4());
    return <div>
        {todos.map((todo) => {
            const {id,title,description} = todo;
            return <div key={id}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        })}
    </div>
}
export default List