import React from 'react';
import Card from './Components/Card';
import Data from './data.json';

const items = [];
// for(let i = 0; i < Data.length; i++){
//   items.push(<Card title = {Data[i].Title} Description = {Data[i].Description} />)
// }
function App() {
  return (
    <div>
      <h1 className="headingstyle"> To-Do App</h1>
      {/* <Card title = {Data[0].Title} Description = {Data[0].Description} /> */}
      {Data.map((item,index) => <Card title = {item.Title} Description = {item.Title} />)}
      {items}
    </div>
  );
}
export default App;
