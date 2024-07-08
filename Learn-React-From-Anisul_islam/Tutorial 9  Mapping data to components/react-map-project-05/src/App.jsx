import Card from './components/Card';
<<<<<<< HEAD
import Data from './data.json';
=======
import Data from '../data.json';
>>>>>>> 97b9c7c38d91c88a566bfa81be61bf7fb4a9e2c4
import './index.css';

const title = "To-Do App";

<<<<<<< HEAD
=======
// for(let i = 0; i < Data.length; i++){
//   items.push(<Card title={Data[i].title} description={Data[i].Description}/>)
// }

// Data.map((item) => <Card title={item.title} description={item.Description}/> );


>>>>>>> 97b9c7c38d91c88a566bfa81be61bf7fb4a9e2c4
function App() {
  return (
    <>
      <h1 className="heading"> {title} </h1>
<<<<<<< HEAD
      <Card title = "This is Title - 01" description = "Jeff Bezos, founder and executive chairman of Amazon, is planning on selling shares of his company that are worth almost $5 billion" />
      <Card title = "This is Title - 02" description = "Jeff Bezos, founder and executive chairman of Amazon, is planning on selling shares of his company that are worth almost $5 billion" />
      <Card title = "This is Title - 03" description = "Jeff Bezos, founder and executive chairman of Amazon, is planning on selling shares of his company that are worth almost $5 billion" />
      <Card title = "This is Title - 04" description = "Jeff Bezos, founder and executive chairman of Amazon, is planning on selling shares of his company that are worth almost $5 billion" />
=======
      {Data.map((item,index)=> <Card key={index} title={item.title} description={item.Description}/> )}
>>>>>>> 97b9c7c38d91c88a566bfa81be61bf7fb4a9e2c4
    </>
  )
}

export default App
