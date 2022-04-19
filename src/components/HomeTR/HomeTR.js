import React from "react";
import "../App.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import "./Home.css";
const Home = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 20,
      strings: ["Merhaba, ben Recep Terzi,"],
    });
  }, []);
  return (
    <>
      <div class="container" style={{marginTop:"8%"}}>
        <div class="row justify-content-center margins-setting">
          <div class="col-sm">
            <img src="/rt.gif" alt="" className="img-fluid rounded" />
          </div>
          <div class="col-sm setting ">
            <span
              class=" fs-1 a span-1 "
              ref={textRef}
              style={{ color: "red" }}
            ></span>
            <br />
            <div class="mt-3 setting">
              <span class="fs-5 a span-2">
                Front-End Developer alanında Junior seviyede her geçen gün
                kendini geliştirmekte olan yazılımcıyım. Yazılıma lisede
                Veritabanı Programcılığı bölümünü seçerek giriş yaptım. Orada
                şuanda bulunduğum alan hakkında pek çalışma yapmadım fakat SQL
                database bilgim oldu. Lisede C# form application ile masaüstü
                uygulama geliştirmesi yapıyorduk. Şuanda Trakya Üniversitesinde
                Bilgisayar Teknolojileri Ve Bilişim Sistemleri alanını
                okumaktayım. Asıl olarak kendimi üniversiteye geçtikten sonra
                geliştirmeye ve alanıma karar vermeye başladım. Şuanda aktif
                olarak kendimi Front-End developer alanında geliştiriyorum.
                Aktif teknolojileri kullanmaya özen gösterip, bu teknolojiler
                ile ilgili projeler geliştirmekten heyecan duyuyorum.
              </span>
              <div style={{ marginTop: "30px" }}>
                <a href="https://www.instagram.com/recepterziiii/">
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
                    style={{ marginLeft: "10px" }}
                    alt=""
                  />
                </a>
                <a href="https://www.linkedin.com/in/recepterzi/">
                  <img
                    src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                    style={{ marginLeft: "10px" }}
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
