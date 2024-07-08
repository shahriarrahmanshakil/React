import Card from './components/Card';
import Data from './data.json';
import './index.css';

const title = "To-Do App";

function App() {
  return (
    <>
      <h1 className="heading"> {title} </h1>
      <Card title = "This is Title - 01" description = "Jeff Bezos, founder and executive chairman of Amazon, is planning on selling shares of his company that are worth almost $5 billion" />
      <Card title = "This is Title - 02" description = "Jeff Bezos, founder and executive chairman of Amazon, is planning on selling shares of his company that are worth almost $5 billion" />
      <Card title = "This is Title - 03" description = "Jeff Bezos, founder and executive chairman of Amazon, is planning on selling shares of his company that are worth almost $5 billion" />
      <Card title = "This is Title - 04" description = "Jeff Bezos, founder and executive chairman of Amazon, is planning on selling shares of his company that are worth almost $5 billion" />
    </>
  )
}

export default App
