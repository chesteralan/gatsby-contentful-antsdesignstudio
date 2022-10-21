import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="container py-4">
        <div className="copyright">
          Copyright &copy; {currentYear}{" "}
          <strong>
            <span>Ants Design Studio</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://bootstrapmade.com/"
          >
            BootstrapMade
          </a>{" "}
          &middot; Developed by{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.chesteralan.com/"
          >
            Alchie
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
