import React from "react";
import Card from "./components/Card";

function App(){
    return  <div>
                <h1 className="headingStyle">To-Do App</h1>
                <Card title ="This is title 1" Description = "This is Description - 1"/>
                <Card title ="This is title 2" Description = "This is Description - 2"/>
                <Card title ="This is title 3" Description = "This is Description - 3"/>
                <Card title ="This is title 4" Description = "This is Description - 4"/>
                <Card title ="This is title 5" Description = "This is Description - 5"/>
                <Card title ="This is title 6" Description = "This is Description - 6"/>
            </div>
}
export default App;