import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer id="footer">

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <p className="mb-5">
              <img src="https://2.bp.blogspot.com/-UmtxXW72VO8/Xwk8ulQDYTI/AAAAAAAAAsQ/lEerOODNqsoRR4FIYmBpSSzqjSXVgKm_QCLcBGAsYHQ/s1600/header_img.png" className="img-fluid" />
            </p>
              <p>
              Violeta Street, Phase 2, Purok 19<br />
              Brgy. Sto. Niño, Tugbok District<br />
              Davao City<br /><br />

              <strong>Phone:</strong> +63 950 701 0774<br />
              <strong>Email:</strong> ivanrex.ganuhay@gmail.com<br />
              <strong>Skype:</strong> ivanrexg@ymail.com<br />

            </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#hero">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#portfolio">Portfolio</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#team">Team</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Blog</h4>
            <ul>
              
              	<li><i className="bx bx-chevron-right"></i> <a href="http://www.antsdesignsstudio.com/2020/07/why-branding-so-important-in-business.html">Why branding so important in business?</a></li>
              
              
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p></p>
            <div className="social-links mt-3">
              <a target="_blank" href="https://twitter.com/antsdesigns" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a target="_blank" href="https://www.facebook.com/antsdesignsstudio" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a target="_blank" href="https://www.instagram.com/anstdesignstudio/" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a target="_blank" href="https://g.page/ants-designs-studio-davao-city?gm" className="google-plus"><i className="bx bxl-google"></i></a>
              <a target="_blank" href="https://www.linkedin.com/in/ants-design-studio-379b8aa0/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="container py-4">
      <div className="copyright">
        Copyright &copy; 2020 <strong><span>Ants Design Studio</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> &middot; Made with &hearts; by <a href="https://www.davao.me/">Davao IT Solutions</a>

      </div>
    </div>
  </footer>
  )
}

export default Footer