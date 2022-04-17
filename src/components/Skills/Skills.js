
import React from "react";

const Skills = () => {
  const mystyle = {
    marginTop: "150px",
    textAlign: "center",
  };
  const mystyle2 = {
    minHeight: "255px",
    position: "relative",
    marginBottom: "20px",
  };

  const circleBarSpan = {
    display: "block",
    color: "#999",
    fontSize: "27px",
    fontStyle:"italic",
    fontWeight:"bold",
    marginTop: "10px",
  };
  const circleBarSpani = {
    color: "#ff5c5c",
    fontSize: "25px",
    marginTop: "7px",
    fontStyle:""
  };
 
  return (
    <>
      <section id="circleBar" style={mystyle}>
        <h1 style={{color:"white"}}>My Skills</h1>
        <p class="mb-4" style={{fontSize : "20px",color:"white"}}>
          I enjoy improving myself and developing projects in this field. :)
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div
                className="round"
                data-value="0.87"
                datas-size="200"
                data-thickness="12"
                style={mystyle2}
              >
                <strong></strong>
                <span style={circleBarSpan}>
                  <i class="fs-1" style={circleBarSpani}></i> HTML SKILLS
                </span>
                <div class="progress mb-3 mt-5">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: " 100%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="round"
                data-value="0.87"
                datas-size="200"
                data-thickness="12"
                style={mystyle2}
              >
                <strong></strong>
                <span style={circleBarSpan}>
                  <i class=" fs-1" style={circleBarSpani}></i> CSS SKILLS
                </span>
                <div class="progress mb-3 mt-5">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: " 80%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="round"
                data-value="0.87"
                datas-size="200"
                data-thickness="12"
                style={mystyle2}
              >
                <strong></strong>
                <span style={circleBarSpan}>
                  <i class="fs-1" style={circleBarSpani}></i>JAVASCRIPT SKILLS
                </span>
                <div class="progress mb-3 mt-5">
                  
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: " 70%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="round"
                data-value="0.87"
                datas-size="200"
                data-thickness="12"
                style={mystyle2}
              >
                <strong></strong>
                <span style={circleBarSpan}>
                  <i class="fs-1" style={circleBarSpani}></i>REACT SKILLS
                </span>
                <div class="progress mb-3 mt-5">
                  
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: " 60%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="round"
                data-value="0.87"
                datas-size="200"
                data-thickness="12"
                style={mystyle2}
              >
                <strong></strong>
                <span style={circleBarSpan}>
                  <i class="fs-1" style={circleBarSpani}></i>SQL SKILLS
                </span>
                <div class="progress mb-3 mt-5">
                  
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: " 60%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="round"
                data-value="0.87"
                datas-size="200"
                data-thickness="12"
                style={mystyle2}
              >
                <strong></strong>
                <span style={circleBarSpan}>
                  <i class="fs-1" style={circleBarSpani}></i>PYTHON SKILLS
                </span>
                <div class="progress mb-3 mt-5">
                  
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: " 80%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="round"
                data-value="0.87"
                datas-size="200"
                data-thickness="12"
                style={mystyle2}
              >
                <strong></strong>
                <span style={circleBarSpan}>
                  <i class="fs-1" style={circleBarSpani}></i>C# SKILLS
                </span>
                <div class="progress mb-3 mt-5">
                  
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-dark"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: " 50%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="round"
                data-value="0.87"
                datas-size="200"
                data-thickness="12"
                style={mystyle2}
              >
                <strong></strong>
                <span style={circleBarSpan}>
                  <i class="fs-1" style={circleBarSpani}></i>JAVA SKILLS
                </span>
                <div class="progress mb-3 mt-5">
                  
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: " 30%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
