import React from "react";

type Props = {};

const Socials = (props: Props) => {
  return (
    <div className="social-links">
      <a
        target="_blank"
        href="https://www.facebook.com/antsdesignsstudio/"
        className="facebook"
      >
        <i className="icofont-facebook"></i>
      </a>
      <a
        target="_blank"
        href="https://twitter.com/antsdesigns"
        className="twitter"
      >
        <i className="icofont-twitter"></i>
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/anstdesignstudio/"
        className="instagram"
      >
        <i className="icofont-instagram"></i>
      </a>
      <a
        target="_blank"
        href="https://g.page/ants-designs-studio-davao-city?gm"
        className="skype"
      >
        <i className="icofont-google-plus"></i>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/ants-design-studio-379b8aa0/"
        className="linkedin"
      >
        <i className="icofont-linkedin"></i>
      </a>
    </div>
  );
};

export default Socials;
