import React from 'react';
// import { Link } from 'gatsby';

// import logo from "../img/logo.jpg";
// import facebook from "../img/social/facebook.svg";
// import instagram from "../img/social/instagram.svg";
// import twitter from "../img/social/twitter.svg";
// import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='footer-manu'>
                {/* <ul>
                  <li>
                    <a href='#'>About Us</a>
                  </li>
                  <li>
                    <a href='#'>Contact us</a>
                  </li>
                  <li>
                    <a href='#'>How it works</a>
                  </li>
                  <li>
                    <a href='#'>Support</a>
                  </li>
                  <li>
                    <a href='#'>Terms</a>
                  </li>
                </ul> */}
              </div>
              <p className='copyright'>
                Copyright {new Date().getFullYear()} &copy;{' '}
                <a href='https://www.vedanasoft.com'>www.vedanasoft.com</a>. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
