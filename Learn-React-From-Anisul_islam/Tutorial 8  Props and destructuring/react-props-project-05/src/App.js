import React from 'react';
import Card from './Components/Card';


function App() {
  return (
    <div>
      <h1 className="headingstyle"> To-Do App</h1>
      <Card title = "Title - 01" Description = "This is Description - 01" />
      <Card title = "Title - 02" Description = "This is Description - 02" />
      <Card title = "Title - 03" Description = "This is Description - 03" />
      <Card title = "Title - 04" Description = "This is Description - 04" />
    </div>
  );
}

export default App;
