import React from "react";
import { Link } from "gatsby";

// import logo from "../img/logo.jpg";
// import facebook from "../img/social/facebook.svg";
// import instagram from "../img/social/instagram.svg";
// import twitter from "../img/social/twitter.svg";
// import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <>
        {/* <div className="content has-text-centered">
          <img
            src={logo}
            alt="VEDANA SOFT"
            style={{ width: "14em", height: "14em" }}
          />
        </div> */}
        <footer className="footer">
          {/* <div className="content has-text-centered">
            <p>
              Copyright © 2019 <Link to="/">VedanaSoft</Link>. All Rights
              Reserved
            </p>
            <div className="container has-background-black has-text-white-ter">
              <div className="columns">
                <div className="column is-4">
                  <section className="menu">
                    <ul className="menu-list">
                      <li>
                        <Link to="/" className="navbar-item">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/about">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/products">
                          Products
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4">
                  <section>
                    <ul className="menu-list">
                      <li>
                        <Link className="navbar-item" to="/blog">
                          Latest Stories
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4 social">
                  <a title="facebook" href="https://facebook.com">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="twitter" href="https://twitter.com">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="vimeo" href="https://vimeo.com">
                    <img
                      src={vimeo}
                      alt="Vimeo"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          <div className="content has-text-centered">
            <div className="columns">
              <div className="column">
                <div className="has-text-weight-bold">VEDANASOFT</div>
                <div>
                  <p>Vedanasoft ...</p>
                </div>
              </div>
              <div className="column">
                <div className="has-text-weight-bold">FOR MORE INFORMATION</div>
                <section className="menu">
                  <ul className="menu-list has-text-weight-semibold">
                    <li className="center">
                      Location: Samakhushi, Grande Road
                    </li>
                    <li className="center">Office Time: 11am to 6pm</li>
                    <li className="center">Office Days: Monday to Friday</li>
                  </ul>
                </section>
              </div>
              <div className="column ">
                <div className="has-text-weight-bold">QUICK LINK</div>
                <div className="content has-text-centered has-text-weight-semibold has-background-white has-text-black">
                  {/* <div className="column is-3"> */}
                  <section className="menu">
                    <ul className="menu-list">
                      <li className="center">
                        <Link
                          to="/"
                          className="has-background-white has-text-black"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="center">
                        <Link
                          className="has-background-white has-text-black"
                          to="/about"
                        >
                          About
                        </Link>
                      </li>
                      <li className="center">
                        <Link
                          className="has-background-white has-text-black"
                          to="/products"
                        >
                          Products
                        </Link>
                      </li>
                      <li className="center">
                        <Link
                          className="has-background-white has-text-black"
                          to="/blog"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="center">
                        <Link
                          className="has-background-white has-text-black"
                          to="/contact"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </section>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
};

export default Footer;
