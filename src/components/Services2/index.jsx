import React from "react";
import Link from "next/link";

const Services2 = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="row rone">
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".4s">
            <div className="mas-item">
              <span className="icon pe-7s-rocket"></span>
              <h6>
                Onlineshop <br /> Entwicklung
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-repeat"></span>
              <h6>
                ERP <br /> Synchronisation
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-phone"></span>
              <h6>
                Mobile <br /> Commerce
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
        </div>
        <div className="row rtwo">
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-cloud-upload"></span>
              <h6>
                Server <br /> Hosting
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-network"></span>
              <h6>
                Marktplatz <br /> Synchronisation
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-anchor"></span>
              <h6>
                Plugin <br /> Entwicklung
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
