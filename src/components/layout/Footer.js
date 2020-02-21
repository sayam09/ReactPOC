import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="row">
        <div className="col s12 m6 l6">
          <h5 className="white-text">Footer Content</h5>
        </div>

        <div className="col">
          <ul>
            <li>
              <a href="#" className="white-text text-lighten-4 right">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="white-text text-lighten-4 right">
                Privacy and Terms
              </a>
            </li>
            <li>
              <a href="#" className="white-text text-lighten-4 right">
                User Agreement
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          ? 2016 Copyright Information
          <a className="grey-text text-lighten-4 right" href="#!">
            Links
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
