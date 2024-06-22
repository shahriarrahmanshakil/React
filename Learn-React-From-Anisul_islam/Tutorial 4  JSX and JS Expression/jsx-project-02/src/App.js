const react = "Learning React js";
const js = "React JS is JavaScript Libary";
const fw = "React js is javascript frontned framework";
const date = new Date();
const fullDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(); 


function App() {
  return (
    <div>
      <h1>{react}</h1>
      <p>{js}</p>
      <p>{fw}</p>
      <strong>{fullDate}</strong>
    </div>
  );
}

export default App;
