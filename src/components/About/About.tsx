import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="100">
            <img src="https://trello-attachments.s3.amazonaws.com/5eb90ba62e6a936026d74d80/5f0e7e6628cef22369bac0d8/20b9b26a1cff31161e700c05c8931941/hccd_ivan.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <h3>Ivanrex T. Ganuhay</h3>
            <p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><i className="icofont-thin-right"></i> Over 6 years of relevant work experience in graphic design for both print and web.</li>
                <li className="list-group-item"><i className="icofont-thin-right"></i> Creative and expert use of Adobe Photoshop, Illustrator, Adobe InDesign, Adobe After effects</li>
                <li className="list-group-item"><i className="icofont-thin-right"></i> Caters to clients both local and overseas</li>
                <li className="list-group-item"><i className="icofont-thin-right"></i> Can coordinate projects clearly and efficiently</li>
                <li className="list-group-item"><i className="icofont-thin-right"></i> Keeps abreast of graphic design trends, latest design techniques, and software tools</li>
                <li className="list-group-item"><i className="icofont-thin-right"></i> Able to work under pressure, meet deadlines, and multitask</li>
                <li className="list-group-item"><i className="icofont-thin-right"></i> Able to work independently and as a part of a team</li>
              </ul> 
            </p>
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default About