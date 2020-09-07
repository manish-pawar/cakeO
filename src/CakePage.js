import React, { useState } from "react";
import Cadata from "./Cadata";

function CakePage(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [qun, setQun] = useState("");

  const [addr, setAddr] = useState("");
  const handleSubmit = (e) => {
    if (name.length < 3 || date < 3 || qun < 1 || addr < 10) {
      alert("please fill required details.");
      e.preventDefault();
    } else {
      alert(
        `Your order for ${name} on  ${date} of ${qun}kgs  will be delivered at your address.. `
      );
    }
  };
  const cake = Cadata.find((el, i) => i == props.match.params.id);
  return (
    <div>
      <div className="container-fluid">
        {" "}
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-5">
                <img className="ind my-5" src={cake.imgsrc} alt={cake.imgsrc} />
              </div>
              <div className="col-md-7 my-3  mx-auto text-center">
                <h3 className="tit1">{cake.title}</h3>
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="col-sm-10 mb-3 mx-auto">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name to write on cake..."
                        required
                      />
                    </div>
                    <div className="col-sm-10 mb-3 mx-auto">
                      <label htmlFor="date">Date</label>
                      <input
                        type="text"
                        className="form-control"
                        id="vdate"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Date of birthday "
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-10 mb-3 mx-auto">
                    <div className="form-group">
                      <label htmlFor="qun">
                        Select How much quantity u want.
                      </label>
                      <select
                        className="form-control"
                        id="qun"
                        value={qun}
                        onChange={(e) => setQun(e.target.value)}
                      >
                        <option value="-1">Select cake quantity in kg</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div className="col-sm-10 mb-3 mx-auto">
                      <div className="form-group">
                        <label htmlFor="add">Enter Address here</label>
                        <textarea
                          className="form-control"
                          id="add"
                          rows="3"
                          value={addr}
                          onChange={(e) => setAddr(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-primary" type="submit">
                    Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CakePage;
