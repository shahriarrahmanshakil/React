const title = "To-Do App";
const description = "This app offers nearly every function you could want in a to-do list app ensconced in a clean, intuitive interface. A subscription is required for reminders and other key features, though.";
const date = new Date();
const fulldate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

function App() {
  return (
      <>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{fulldate}</p>
      </>
  )
}

export default App
