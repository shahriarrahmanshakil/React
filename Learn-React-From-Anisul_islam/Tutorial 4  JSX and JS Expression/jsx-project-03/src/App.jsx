const heading = "To-Do App";
const details = "React is javascript libary";


function App() {
  return (
    <>
     <h1>{heading}</h1>
     <p>{details}</p>
     <p>{new Date().getFullYear()}</p>
    </>
  )
}

export default App
