import Card from './components/Card';
import Data from '../data.json';
import './index.css';

const title = "To-Do App";

// for(let i = 0; i < Data.length; i++){
//   items.push(<Card title={Data[i].title} description={Data[i].Description}/>)
// }

// Data.map((item) => <Card title={item.title} description={item.Description}/> );


function App() {
  return (
    <>
      <h1 className="heading"> {title} </h1>
      {Data.map((item,index)=> <Card key={index} title={item.title} description={item.Description}/> )}
    </>
  )
}

export default App
