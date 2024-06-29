import React from "react";
import Topbar from "../Components/Topbar";
import Service from "../Components/Service";
import Navbar from "../Components/Navbar";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
function Services (){
    return(
        <>
            <Topbar/>
            <Navbar/>
            <Service/>
            <Testimonial/>
            <Footer/>
        
        </>
    );
}
export default Services;