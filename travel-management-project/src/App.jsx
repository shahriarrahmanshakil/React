
// import React from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
// import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SecondPage from './pages/SecondPage';
// import Sidebar from './components/Sidebar';
import Adduser from './pages/users/Adduser';
import Manageuser from './pages/users/Manageuser';
import Edituser from './pages/users/Edituser';
import AddCategory from './pages/category/AddCategory';
import Myname from './pages/Myname';
import NewCategory from './pages/category/NewCategory';
import Home from './portal/portal_pages/Home';
import About from './portal/portal_pages/About';
import Services from './portal/portal_pages/Services';
import Packages from './portal/portal_pages/Packages';
import Contacts from './portal/portal_pages/Contact';
import Register from './portal/portal_components/Register';
import Login from './portal/portal_components/Login';
import Servic from './pages/Servic';
import Team from './pages/Team';
import Client from './pages/Client';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/Packages" element={<Packages />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/servic" element={<Servic />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/contact" element={<Contact/>}/>
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
    </BrowserRouter>

  );
};

export default App;