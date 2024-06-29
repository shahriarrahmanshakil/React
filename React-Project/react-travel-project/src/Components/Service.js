function Service({services_list}){
    return(
        <>
             <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Services
        </h6>
        <h1 className="mb-5">Our Services</h1>
      </div>
      <div className="row g-4">
       {services_list.map((v,i)=>{
        return(
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" key={i}>
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-cog text-primary mb-4" />
              <h5>{v.titile}</h5>
              <p>
                {v.details}
              </p>
            </div>
          </div>
        </div>
        )})}
       
      
      </div>
    </div>
  </div>
        
        </>
    );
}
export default Service;