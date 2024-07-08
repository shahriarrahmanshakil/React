import Card1 from "./Components/Card1"
import Card2 from "./Components/Card2"

function App() {
  return (
    <>
      <h1>Class Components</h1>
      <Card1 name = "This is Card1 Functional Component" description = "functional component is very usefull in React" />
      <Card2 name = "This is Card2 Class Component" description = "Class Component is older version used in React"/>
    </>
  )
}
export default App
