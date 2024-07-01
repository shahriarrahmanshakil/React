
import React from 'react';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Dashboard from './pages/category/Dashboard'
import Blog from './pages/Blog';
import SecondPage from './pages/SecondPage';
import Sidebar from './components/Sidebar';
import Adduser from './pages/users/Adduser';
import Manageuser from './pages/users/Manageuser';
import Edituser from './pages/users/Edituser';
import AddCategory from './pages/category/AddCategory';
import Myname from './pages/Myname';
import NewCategory from './pages/category/NewCategory';


const App = () => {
  return (
<div className="wrapper">
     <BrowserRouter>
     <Sidebar/>
     <div className='content-wrapper'> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/add-user" element={<Adduser/>}/>
        <Route path="/add-category" element={<AddCategory/>}/>
        <Route path="/manage-user" element={<Manageuser/>}/>
        <Route path="/edit-user" element={<Edituser/>}/>
        <Route path="/new-category" element={<NewCategory />}/>
        {/* nested route */}
        <Route path="/blog" element={<Blog/>}>
            <Route path="second" element={<SecondPage/>}/>
            <Route path="my-name" element={<Myname />}/>
        </Route>
      </Routes>
      </div>
     <Footer/>
    </BrowserRouter>

   </div>
  );
};

export default App;