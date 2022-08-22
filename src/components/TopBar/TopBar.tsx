import React from 'react'

type Props = {}

const TopBar = (props: Props) => {
  return (
    <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
    <div className="container d-flex">

      <div className="contact-info mr-auto">
      	
        <i className="icofont-envelope"></i> <a href="mailto:ivanrex.ganuhay@gmail.com">ivanrex.ganuhay@gmail.com</a>
        <i className="icofont-phone"></i> +63 950 701 0774
    	
      </div>
      <div className="social-links">
        <a target="_blank" href="https://www.facebook.com/antsdesignsstudio/" className="facebook"><i className="icofont-facebook"></i></a>
        <a target="_blank" href="https://twitter.com/antsdesigns" className="twitter"><i className="icofont-twitter"></i></a>
        <a target="_blank" href="https://www.instagram.com/anstdesignstudio/" className="instagram"><i className="icofont-instagram"></i></a>
        <a target="_blank" href="https://g.page/ants-designs-studio-davao-city?gm" className="skype"><i className="icofont-google-plus"></i></a>
        <a target="_blank" href="https://www.linkedin.com/in/ants-design-studio-379b8aa0/" className="linkedin"><i className="icofont-linkedin"></i></a>
      </div>

    </div>
  </div>
  )
}

export default TopBar