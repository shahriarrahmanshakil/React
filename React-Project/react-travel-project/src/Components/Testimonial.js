import React from "react";
import Slider from "react-slick";
import { useState,useEffect } from "react";

function Testimonial(){
  const [clients, setClients] = useState([])
  useEffect(() => {
    fetch("http://localhost/react_original_project/original/behind_scene/applications/clients.php")
      .then((response) => response.json())
      .then((d) => setClients(d))
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }
    return(
        <>
             <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="text-center">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Testimonial
        </h6>
        <h1 className="mb-5">Our Clients Say!!!</h1>
      </div>
      <Slider {...settings}>
     
        {clients.map((v,i)=>{
          return(
          <div className="owl-carousel testimonial-carousel position-relative">
            <div className="testimonial-item bg-white text-center border p-4" key={i}>
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src={`http://localhost/react_original_project/original/behind_scene/applications/pictures/${v.photo}`} alt={v.customer_name}
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">{v.customer_name}</h5>
            <p>{v.address}</p>
            <p className="mb-0">
            {v.details}
            </p>
          </div>
        </div> 
        )})}
       
     
      </Slider>
    </div>
  </div>
        
        </>
    );
}
export default Testimonial;