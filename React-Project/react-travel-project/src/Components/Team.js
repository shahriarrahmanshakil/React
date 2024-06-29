function Team({team_list}){
    return(
        <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Travel Guide
        </h6>
        <h1 className="mb-5">Meet Our Guide</h1>
      </div>
      <div className="row g-4">
        {team_list.map((v,i)=>{
          return(
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src={`http://localhost/react_original_project/original/behind_scene/applications/pictures/${v.photo}`} alt={v.name} />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">{v.name}</h5>
                <small>{v.designation}</small>
              </div>
            </div>
          </div>
          )
        })}
       
      </div>
    </div>
  </div>
    );
}
export default Team;