export default function Portfolio() {
  return (
    <section>
      <h2 className="port text-black fw-bolder fs-1 text-center mb-5">
        portfolio component
      </h2>
      
        

      <div className="row container mx-auto gy-3 gx-">
        
        <div className="col-md-4 mb-4">
          <div className="img-wrap position-relative overflow-hidden">
            <img className="w-100 d-block" src="/Images/port1.png" alt="" />
            <div className="overlay d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-plus fa-3x text-white"></i>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="img-wrap position-relative overflow-hidden">
            <img className="w-100 d-block" src="/Images/port2.png" alt="" />
            <div className="overlay d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-plus fa-3x text-white"></i>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="img-wrap position-relative overflow-hidden">
            <img className="w-100 d-block" src="/Images/port3.png" alt="" />
            <div className="overlay d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-plus fa-3x text-white"></i>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="img-wrap position-relative overflow-hidden">
            <img className="w-100 d-block" src="/Images/port1.png" alt="" />
            <div className="overlay d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-plus fa-3x text-white"></i>
            </div>
          </div>
        </div>
 
        <div className="col-md-4 mb-4">
          <div className="img-wrap position-relative overflow-hidden">
            <img className="w-100 d-block" src="/Images/port2.png" alt="" />
            <div className="overlay d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-plus fa-3x text-white"></i>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="img-wrap position-relative overflow-hidden">
            <img className="w-100 d-block" src="/Images/port3.png" alt="" />
            <div className="overlay d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-plus fa-3x text-white"></i>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}