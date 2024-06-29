import React from "react";
import Topbar from "../Components/Topbar";
import Package from "../Components/Package";
import Navbar from "../Components/Navbar";
import Booking from "../Components/Booking";
import Process from "../Components/Process";
import Footer from "../Components/Footer";
function Packages (){
    return(
        <>
            <Topbar/>
            <Navbar/>
            <Package/>
            <Booking/>
            <Process/>
            <Footer/>
        
        </>
    );
}
export default Packages;