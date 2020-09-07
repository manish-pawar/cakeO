import React from "react";
import Cdata from "./Cdata";
import cake from "./images/we.jpg";
import Card from "./Card";

function Services() {
  return (
    <div>
      <section id="header" className=" ">
        <div className="container-fluid mb-5">
          {" "}
          <div className="row">
            <div className="col-12 ">
              <div className="row">
                <div className="text-center mb-3">
                  <h1 className="tit1">Our services</h1>
                </div>
                {Cdata.map((val, ind) => {
                  return (
                    <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
