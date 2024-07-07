import Card from './components/Card';
import './index.css';

const title = "To-Do App";

function App() {
  return (
    <>
      <h1 className="heading"> {title} </h1>
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  )
}

export default App
