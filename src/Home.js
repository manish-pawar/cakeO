import React from "react";
import cake from "./images/giveaway.png";

import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
      <section id="header" className="d-flex justify-content-center">
        <div className="container-fluid ">
          {" "}
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6  pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column mb-5">
                  <h3 className="ck1">
                    Enjoy every occasion with{" "}
                    <strong className="hb1">Fresh Cakes </strong>
                  </h3>
                  <h4 className="my-3">
                    We are no. 1 seller in the fresh cakes. Our creamy cakes
                    makes you <span className="hb2">nostalgic</span> on your
                    special occasion.
                  </h4>
                  <div className="mt-3">
                    <NavLink to="/order" className="btn-get-started">
                      Order your cake
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-lg-2 header-img animated">
                  <img src={cake} className="img-fluid d-flex " alt="homeimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
