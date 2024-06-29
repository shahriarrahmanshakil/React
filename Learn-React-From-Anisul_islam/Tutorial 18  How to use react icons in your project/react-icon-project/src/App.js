import React from 'react';
import { FaAccessibleIcon, FaAngleDoubleRight } from "react-icons/fa";
import './index.css';

function App() {
  return (
    <div className="App">
      <h1 className="text">Hello World</h1>
      <FaAccessibleIcon className='accessible'/> 
      <FaAngleDoubleRight className='angleright' />
    </div>
  );
}

export default App;
