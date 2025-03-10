import React from 'react'

const Dashboardpage = () => {
    return (
      <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="row">
              <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                <h3 className="font-weight-bold">Welcome Admin</h3>
                <h6 className="font-weight-normal mb-0">
                  All systems are running smoothly! 
                </h6>
              </div>
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="">
              <div className="card-people mt-auto">
                <img src="img/carousel-1.jpg" alt="people" />
               
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin transparent">
          <div className="row">
  <div className="col-md-6 mb-4 stretch-card transparent">
    <a href="/drivingdash" className="card card-tale text-decoration-none">
     
        <div className="card-body">
          <h4 className="mb-4" style={{ color: "white" }}>Driving License</h4>
       
        </div>
      
    </a>
  </div>
  <div className="col-md-6 mb-4 stretch-card transparent">
    <a href="/learnerdash" className="card card-dark-blue text-decoration-none">
     
        <div className="card-body">
          <h4 className="mb-4" style={{ color: "white" }}>Learner Licenses</h4>
  
        </div>
      
    </a>
  </div>
</div>

              <div className="row">
                <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                <a href="/vehicaldash" className="card card-light-blue text-decoration-none">
                 
                    <div className="card-body">
                    <h4 className="mb-4" style={{ color: "white" }}>Vehicle Registration</h4>

                    
                    </div>
                  </a>
                </div>
                <div className="col-md-6 stretch-card transparent">
                  
                  <a href='/insurancedash' className="card card-light-danger text-decoration-none">
                    <div className="card-body">
                      <h4 className="mb-4" style={{ color: "white" }}>Insurance</h4>
                 
                    </div>
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* content-wrapper ends */}
      
    </div>
      );
}

export default Dashboardpage