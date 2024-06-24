import React from "react";
import Card from "./Components/card";
import Data from "./data.json";

    function App(){
        // let items = [];
        // for(let i = 0; i < Data.length; i++){
        //     items.push( <Card todo_title= {Data[0].todo_title} todo_des={Data[i].todo_des}/>);
        // }
       
        console.log(Data);
        return <div>
            <h1 className="headingStyle">Todo App</h1> 
            { Data.map((items,index) => <Card key = {index} todo_title= {items.todo_title} todo_des={items.todo_des}/>)}
        </div>
    }
    export default App;




