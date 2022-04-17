import alertify from "alertifyjs";
import React, { useState } from "react";
import './Contact.css'
const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const mystyle = {
    marginTop: "150px",
    textAlign: "center",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <div class="container  margin-setting">
        <div class="row justify-content-center margin-settings" style={mystyle}>
          <h1 style={{ color: "white" }}>Contact us</h1>
          <p  style={{ fontSize: "15px", color: "white",marginBottom:"40px" }}>
          You can contact me. :)
          </p>
          <div class="col-sm" >
            <img src="/rt.gif" alt="" className="img-fluid rounded" class="img-set"/>
          </div>
          <div class="col-sm ">
            <form onSubmit={handleSubmit}  style={{marginTop:"140px"}}  class="cent" >
              <div class="form-group " style={{ marginBottom: "30px" }} >
                <label for="exampleInputEmail1" class="text-white mb-1 fs-4" >
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  style={{backgroundColor:"transparent",color:"white",borderTop:"none",borderLeft:"none",borderRight:"none"}}
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label
                  for="exampleFormControlTextarea1"
                  class="text-white mb-1 fs-4"
                >
                  Message
                </label>
                <textarea
                  class="form-control"
                  style={{backgroundColor:"transparent",color:"white",borderTop:"none",borderLeft:"none",borderRight:"none"}}
                  value={message}
                  placeholder="Text to message"
                  onChange={(e) => setMessage(e.target.value)}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" onClick={() => {alertify.success("Mail sent!")}}class="mt-3 btn-lg btn-block btn-set " style={{color:"white",width:"600px"}}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
