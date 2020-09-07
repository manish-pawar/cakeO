import React, { useState } from "react";

function Contact() {
  return (
    <div>
      <div className="container-fluid">
        {" "}
        <div className="row">
          <div className="col-10 mx-auto mt-2 mb-5">
            <div className="row">
              <div className="col-md-5">
                <div className="text-center mb-3">
                  <h1 className="tit1">Contact us</h1>
                  <div className="card mt-5">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Phone no : <span className="mcc">1234567890</span>
                      </li>
                      <li className="list-group-item">
                        Email id : <span className="mcc">cakeo.gmail.com</span>
                      </li>
                      <li className="list-group-item">
                        Address:{" "}
                        <span className="mcc">
                          Dapibus ac facilisis in,Dapibus ac facilisis in
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="text-center mb-3">
                  <h1 className="tit1">Give feedback</h1>
                </div>
                <form>
                  <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                      type="email"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter name here"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="feed">Feedback</label>
                    <textarea
                      name="feed"
                      className="form-control"
                      id="feed"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      value="submit"
                      className="btn btn-outline-success"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
