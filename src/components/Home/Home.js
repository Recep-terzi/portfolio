import React from "react";
import "../App.css";
import { init } from "ityped";
import { useEffect,useRef} from "react";
import './Home.css'

const Home = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 20,
      strings: ["Hi, I am Recep Terzi,"],
    });
  }, []);
  return (
    
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      <div class="container" style={{marginTop:"8%"}}>
        <div class="row justify-content-center margins-setting">
          <div class="col-sm">
            <img src="/rt.gif"  alt=""  className="img-fluid rounded" />
          </div>
          <div class="col-sm setting ">
            <span class=" fs-1 a span-1 " ref={textRef} style={{color:"red"}}></span>
            <br />
            <div class="mt-3 setting">
              <span class="fs-5 a span-2">
                I am a software developer in the field of Front-End Developer,
                who is developing herself day by day at Junior level. I entered
                the software in high school by choosing the Department of
                Database Programming. I don't have much study about the field I
                am in there now, but I have knowledge of SQL database. We were
                doing desktop application development with C# form application
                in high school. I am currently studying at Trakya University
                Computer Technologies and Information Systems. Actually, I
                started to develop myself and decide on my field after I went to
                university. Currently, I am actively developing myself in the
                field of Front-End developer. I am excited to take care of using
                active technologies and develop projects related to these
                technologies.
              </span>
              <div style={{ marginTop: "30px",textAlign:"center" }} >
                <a href="https://www.instagram.com/recepterziiii/" >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                    
                    alt=""
                    class="icons"
                  />
                </a>
                <a href="https://github.com/Recep-terzi">
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    class="bg-white icons"
                    style={{  marginLeft: "10px" }}
                    alt=""
                    
                  />
                </a>
                <a href="https://www.linkedin.com/in/recepterzi/">
                  <img
                    src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                    style={{  marginLeft: "10px" }}
                    alt=""
                    class="icons"
                  />
                </a>
                <a href="https://app.patika.dev/pyson">
                  <img
                    src="https://global-uploads.webflow.com/6097e0eca1e87557da031fef/609859a191abe5d64b17fed3_Patika%20logo-p-500.png"
                    style={{ marginLeft: "10px" }}
                    alt=""
                    class="icons"
                  />
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
