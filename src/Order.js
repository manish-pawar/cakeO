import React, { useState, useEffect } from "react";
import Cadata from "./Cadata";
import cake from "./images/we.jpg";
import Cacard from "./Cacard";
import CakeSearch from "./CakeSearch";

function Order() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [cake, setCake] = useState("");
  // const resu = string.match(cake);
  useEffect(() => {
    const data = Cadata.filter((item) => item.flav.match(cake));
    if (data.length > 0) {
      setItems(data);
    }

    setLoading(false);
  }, [cake]);
  return (
    <div>
      <section id="header" className=" ">
        <div className="container-fluid mb-5">
          {" "}
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="text-center mb-3">
                  <h1 className="tit1">Order your cake</h1>
                </div>
                <div className="col-md-8 mx-auto mb-3">
                  <CakeSearch
                    getQuery={(q) => {
                      setCake(q);
                    }}
                  />
                </div>
                {}
                {items.map((val, ind) => {
                  return (
                    <Cacard
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      id={val.id}
                    />
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

export default Order;
