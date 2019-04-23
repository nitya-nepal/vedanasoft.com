import React from 'react';
import { Link } from 'gatsby';
// import github from '../img/github-icon.svg';
import logo from '../img/logo.png';
// import facebook from "../img/social/facebook.svg";
// import instagram from "../img/social/instagram.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      },
    );
  };

  render() {
    return (
      <header className='navigation'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <nav className='navbar'>
                <div className='container-fluid'>
                  <div className='navbar-header'>
                    <button
                      type='button'
                      className='navbar-toggle collapsed'
                      data-toggle='collapse'
                      data-target='#bs-example-navbar-collapse-1'
                    >
                      <span className='sr-only'>Toggle navigation</span>
                      <span className='icon-bar' />
                      <span className='icon-bar' />
                      <span className='icon-bar' />
                    </button>
                    <a className='navbar-brand' href='index.html'>
                      <img src={logo} alt='Vedana Soft' />
                    </a>
                  </div>
                  <div
                    className='collapse navbar-collapse'
                    id='bs-example-navbar-collapse-1'
                  >
                    <ul className='nav navbar-nav navbar-right'>
                      <li>
                        <Link to='/'>Home</Link>
                      </li>
                      {/* <li>
                        <a href='#'>Service</a>
                      </li>
                      <li>
                        <Link to='/contact'>Contact</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default Navbar;
