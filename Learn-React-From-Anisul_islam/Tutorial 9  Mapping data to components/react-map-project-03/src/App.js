import React from 'react';
import Card from './Components/Card';
import Data from './data.json';

function App() {

  // let items = []
  // for(let i = 0; i < Data.length; i++){
  //     items.push(<Card title = {Data[i].title} Description = {Data[i].Description}/>);
  // }

  return <div>
      <h1 className="headingstyle"> To-Do App</h1>
      {Data.map((item,index) => <Card key={index} title = {item.title} Description = {item.Description}/>)}
    </div>
}

export default App;
