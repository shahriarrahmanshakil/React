const title = "Car Family";
const Description = "Thsi is Description";
const date = new Date();
const fullDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

function App() {
  return (
    <div>
        <h1 className="headingStyle">To-Do App</h1>
        <div className="cardbody">                                                       
          <h3 className="title">{title}</h3>
          <p className="description">{Description}</p>
          <p className = "date0">{fullDate}</p>
        </div>

        <div className="cardbody">                                                       
          <h3 className="title">{title}</h3>
          <p className="description">{Description}</p>
          <p className = "date0">{fullDate}</p>
        </div>
        <div className="cardbody">                                                       
          <h3 className="title">{title}</h3>
          <p className="description">{Description}</p>
          <p className = "date0">{fullDate}</p>
        </div>
        <div className="cardbody">                                                       
          <h3 className="title">{title}</h3>
          <p className="description">{Description}</p>
          <p className = "date0">{fullDate}</p>
        </div>
    </div>
  );
}

export default App;
