import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-contact">
              <p className="mb-5">
                <img
                  src="https://2.bp.blogspot.com/-UmtxXW72VO8/Xwk8ulQDYTI/AAAAAAAAAsQ/lEerOODNqsoRR4FIYmBpSSzqjSXVgKm_QCLcBGAsYHQ/s1600/header_img.png"
                  className="img-fluid"
                />
              </p>
              <p>
                Violeta Street, Phase 2, Purok 19
                <br />
                Brgy. Sto. Niño, Tugbok District
                <br />
                Davao City
                <br />
                <br />
              </p>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#about">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#services">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#team">Team</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Blog</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="http://www.antsdesignsstudio.com/2020/07/why-branding-so-important-in-business.html">
                    Why branding so important in business?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="copyright">
          Copyright &copy; {currentYear}{" "}
          <strong>
            <span>Ants Design Studio</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
          &middot; Made with &hearts; by{" "}
          <a href="https://www.davao.me/">Davao IT Solutions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
