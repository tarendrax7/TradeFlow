import React from "react";

function Hero() {
  return (
    <section id="supportHero">
      <div className="container-fluid px-5">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1>Support Portal</h1>
          </div>

          <div className="col-md-4 text-end">
            <button className="btn ticket-btn">
              My tickets
            </button>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <div className="input-group search-box">
              <span className="input-group-text bg-white border-0">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>

              <input
                type="text"
                className="form-control border-0"
                placeholder="Eg: How do I open my account, How do I activate F&O..."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;