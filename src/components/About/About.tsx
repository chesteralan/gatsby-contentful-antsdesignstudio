import React from 'react'
import Experiences from './Experiences'
import Image from './Image'
import Title from './Title'

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
            <Image />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <Title />
            <Experiences />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About