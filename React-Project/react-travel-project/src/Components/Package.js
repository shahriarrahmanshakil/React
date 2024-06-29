function Package({packages_list}){
    return(
        <>
            <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Packages
        </h6>
        <h1 className="mb-5">Awesome Packages</h1>
      </div>
      <div className="row g-4 justify-content-center">
        {packages_list.map((v,i)=>{
          return(
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={i}>
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src={`http://localhost/react_original_project/original/behind_scene/applications/pictures/${v.photo}`} alt={v.place_name} />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  {v.place_name}
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">${v.price}</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                {v.details}
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          )
        })}
       
        
      </div>
    </div>
  </div>
        
        </>
    );
}
export default Package;