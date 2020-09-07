import React from "react";

function Card(props) {
  return (
    <div className="col-md-6 col-10 mx-auto">
      <div className="card mb-3  car">
        <div className="row no-gutters">
          <div className="col-sm-6 picer ">
            <img
              src={props.imgsrc}
              className="card-img picse"
              alt={props.imgsrc}
            />
          </div>
          <div className="col-sm-6">
            <div className="card-body">
              <h5 className="card-title tit">{props.title}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
