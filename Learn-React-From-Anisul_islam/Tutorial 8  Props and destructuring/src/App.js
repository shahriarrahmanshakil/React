import React from "react";
import Card from "./Components/card";

    function App(){
        return <div>
            <h1 className="headingStyle">Todo App</h1> 
            <Card todo_title="First Title" todo_des="This is first Description"/>
            <Card todo_title="Second Title" todo_des="This is Second Description"/>
            <Card todo_title="Third Title" todo_des="This is Third Description"/>
        </div>
    }
    export default App;




