import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section id="hero" className="d-flex align-items-center">
    <div className="container" data-aos="zoom-out" data-aos-delay="100">
      <div className="col-md-8">
        <h1>Welcome to <span>Ants Designs Studio</span>
        </h1>
        <h2>Affordable Graphics for Web and Print Designs</h2>
        <div className="d-flex">
          <a target="_blank" rel="noopener noreferrer" href="https://www.upwork.com/freelancers/~01f78f194c7835ae8e" className="btn-get-started scrollto">Hire Me</a>
          <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox btn-watch-video" data-vbtype="video" data-autoplay="true"> Watch Video <i className="icofont-play-alt-2"></i></a>
        </div>
      </div>
    </div>
    <div id="hero-models" data-aos="fade-left" data-aos-delay="800"></div>
  </section>
  )
}

export default Hero