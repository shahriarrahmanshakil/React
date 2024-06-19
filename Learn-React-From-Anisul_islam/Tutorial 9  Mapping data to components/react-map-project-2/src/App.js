import React from "react";
import Card from "./components/Card";
import Data from "./Data.json";

// let items = [];
// for(let x = 0; x < Data.length; x++){
//     items.push(<Card title = {Data[x].title} Description = {Data[x].Description}/>);
// }

function App(){
    return  <div>
                <h1 className="headingStyle">To-Do App</h1>
                {Data.map((item,index) => <Card key = {index} title = {item.title} Description = {item.Description}/>)}
            </div>
}
export default App;