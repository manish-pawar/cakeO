import React from "react";
import { Link } from "react-router-dom";

function Cacard(props) {
  return (
    <div className="col-md-6 col-10 mb-3 mx-auto">
      <div className="card bg-dark text-white">
        <img src={props.imgsrc} className="card-img picc" alt={props.imgsrc} />
        <div className="card-img-overlay caked text-center ">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <Link to={"/cake/" + props.id} className="btn-or">
            Buy cake
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cacard;
