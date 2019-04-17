import React from "react";
import { Link } from "gatsby";
// import github from '../img/github-icon.svg';
import logo from "../img/logo.jpg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="VEDANASOFT">
              HOME
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about/">
                ABOUT US
              </Link>
              <Link className="navbar-item" to="/products/">
                PRODUCTS
              </Link>
              <Link className="navbar-item" to="/blog/">
                BLOG
              </Link>
              <Link className="navbar-item" to="/contact/">
                CONTACT
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <span className="navbar-item">
                <span className="icon">
                  <i className="fas fa-phone-square" />
                </span>
                01-4356221
                <span className="icon">
                  <i className="fas fa-envelope" />
                </span>
                vedanasoft@gmail.com
              </span>
              <a
                className="navbar-item "
                title="facebook"
                href="https://facebook.com/vedanasoft"
              >
                <span className="icon is-medium">
                  {/* <img */}
                  {/* src={facebook} */}
                  {/* alt="Facebook" */}
                  {/* style={{ width: "1em", height: "1em" }} */}
                  {/* /> */}
                  <i className="fab fa-facebook" />
                </span>
              </a>
              <a
                className="navbar-item"
                title="instagram"
                href="https://instagram.com/vedanasoft"
              >
                {/* <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: "1em", height: "1em" }}
                /> */}
                <span className="icon is-medium">
                  <i className="fab fa-instagram" />
                </span>
              </a>
              <Link to="/" title="VEDANA SOFT">
                <img
                  src={logo}
                  alt="Vedana Soft"
                  style={{ width: "88px", height: "88px" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
