function Destination({ destination_list }) {
  return (
    <>
      <div className="container-xxl py-5 destination">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Destination
            </h6>
            <h1 className="mb-5">Popular Destination</h1>
          </div>
          <div className="row g-3">
          {destination_list.map((v,i)=>{
              return(
                <div className="col-lg-7 col-md-6">
                <div className="row g-3">
                  <div
                    className="col-lg-12 col-md-12 wow zoomIn"
                    data-wow-delay="0.1s"
                  >
                    <a className="position-relative d-block overflow-hidden" href="">
                      <img className="img-fluid" src={`http://localhost/react_original_project/original/behind_scene/applications/pictures/${v.photo}`} alt={v.place_name} />
                      <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                        {v.sticker}% OFF
                      </div>
                      <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                        {v.place_name}
                      </div>
                    </a>
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
export default Destination;