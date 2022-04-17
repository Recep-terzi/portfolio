import React from "react";
import items from "../data";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div className="container mt-5 " >
        <div className="row ">
          {items.map((projectItem) => {
            const { id, title, img, description, url } = projectItem;
            return (
              <div className="col-sm-4 text-white mb-3 " key = {id}>
                <div
                  class="card rounded border-danger bg-dark "
                  style={{ width: "25rem", height: "100%" }}
                >
                  <img
                    src={img}
                    class="card-img-top"
                    alt={title}
                    style = {{width:"100%"}}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">
                      {description}
                    </p>
                   
                  </div>
                  
                  <button class="btn btn-outline-danger text-white a"  >
                      <a href={url} className="text-decoration-none text-white bg-none rounded " target={"_blank"} rel="noopener noreferrer">Show Project</a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
