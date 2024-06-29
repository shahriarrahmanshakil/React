import React from 'react';
import Button from 'react-bootstrap/Button';
import NavScrollExample from './Components/Navbar';
import Card from './Components/Card';
import HorizontalExample from './Components/List';
import Modal from './Components/Modal'

function App() {
  return (
    <div>
      <NavScrollExample />
      <Card />
      <Card />
      <HorizontalExample />
      <h1>Hello Bangladesh</h1>
      <Modal />
      <Button className='m-5'>Click</Button>
    </div>
  );
}

export default App;
