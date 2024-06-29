import logo from './logo.svg';
import './App.css';
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import Info from "./Components/Info";
import Service from "./Components/Service";
import Destination from "./Components/Destination";
import Package from "./Components/Package";
import Booking from "./Components/Booking";
import Process from "./Components/Process";
import Team from "./Components/Team";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import axios from 'axios';
import Slider from "react-slick";
import { useEffect,useState } from 'react';
function App() {
  const [services, setServices] = useState([])
  useEffect(() => {
    axios.get('http://localhost/react_original_project/original/behind_scene/applications/services.php')
      .then((res) => {
        setServices(res.data)
      })
  }, [])


  const [destination, setDestination] = useState([])
  useEffect(() => {
    axios.get('http://localhost/react_original_project/original/behind_scene/applications/destination.php')
      .then((res) => {
        setDestination(res.data)
      })
  }, [])


  const [team, setTeam] = useState([])
  useEffect(() => {
    axios.get('http://localhost/react_original_project/original/behind_scene/applications/team.php')
      .then((res) => {
        setTeam(res.data)
      })
  }, [])


  const [packages, setPackages] = useState([])
  useEffect(() => {
    axios.get('http://localhost/react_original_project/original/behind_scene/applications/packages.php')
      .then((res) => {
        setPackages(res.data)
      })
  }, [])
  
  return (
    <>
  {/* Topbar Start */}
  <Topbar address={"47/3/A, Indira Road, Dhaka"} mobile={"01763496921"} email={"minhajndc034@gmail.com"}/>
  {/* Topbar End */}
  {/* Navbar & Hero Start */}
  <Navbar/>
  {/* Navbar & Hero End */}
  {/* About Start */}
  <Info/>
  {/* About End */}
  {/* Service Start */}
  <Service services_list={services}/>
  {/* Service End */}
  {/* Destination Start */}
  <Destination destination_list={destination}/>
  {/* Destination Start */}
  {/* Package Start */}
  <Package packages_list={packages}/>
  {/* Package End */}
  {/* Booking Start */}
  <Booking/>
  {/* Booking Start */}
  {/* Process Start */}
  <Process/>
  {/* Process Start */}
  {/* Team Start */}
  <Team team_list={team}/>
  {/* Team End */}
  {/* Testimonial Start */}
  <Testimonial/>
  {/* Testimonial End */}
  {/* Footer Start */}
  <Footer/>
  {/* Footer End */}
</>

  );
}

export default App;
