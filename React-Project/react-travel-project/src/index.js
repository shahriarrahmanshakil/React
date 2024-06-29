import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Packages from './Pages/Packages';
import Contact from './Pages/Contact';
import Fake from './Pages/Fake';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ServicesInsert from './admin_pannel/ServicesInsert';
import ServicesEdit from './admin_pannel/ServicesEdit';
import ServicesList from './admin_pannel/ServicesList';
import DestinationInsert from './admin_pannel/DestinationInsert';
import DestinationList from './admin_pannel/DestinationList';
import DestinationEdit from './admin_pannel/DestinationEdit';
import PackagesInsert from './admin_pannel/PackagesInsert';
import PackagesEdit from './admin_pannel/PackagesEdit';
import PackagesList from './admin_pannel/PackagesList';
import TeamInsert from './admin_pannel/TeamInsert';
import TeamEdit from './admin_pannel/TeamEdit';
import TeamList from './admin_pannel/TeamList';
import ClientsInsert from './admin_pannel/ClientsInsert';
import ClientsEdit from './admin_pannel/ClientsEdit';
import ClientsList from './admin_pannel/ClientsList';
import DashBoard from './admin_pannel/DashBoard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/packages' element={<Packages/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services-insert' element={<ServicesInsert/>}/>
      <Route path='/services-edit/:id' element={<ServicesEdit/>}/>
      <Route path='/services-list' element={<ServicesList/>}/>
      <Route path='/destination-insert' element={<DestinationInsert/>}/>
      <Route path='/destination-list' element={<DestinationList/>}/>
      <Route path='/destination-edit/:id' element={<DestinationEdit/>}/>
      <Route path='/packages-insert' element={<PackagesInsert/>}/>
      <Route path='/packages-edit/:id' element={<PackagesEdit/>}/>
      <Route path='/packages-list' element={<PackagesList/>}/>
      <Route path='/team-insert' element={<TeamInsert/>}/>
      <Route path='/team-edit/:id' element={<TeamEdit/>}/>
      <Route path='/team-list' element={<TeamList/>}/>
      <Route path='/clients-insert' element={<ClientsInsert/>}/>
      <Route path='/clients-edit/:id' element={<ClientsEdit/>}/>
      <Route path='/clients-list' element={<ClientsList/>}/>
      <Route path='/dashboard' element={<DashBoard/>}/>

      <Route path='*' element={<Fake/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
