import React, { Component } from "react";
import "./Navbar.css";
import { BsLinkedin } from "react-icons/bs";

const MenuItems = [
  {
    title: "Home",
    url: "#",
    cName: "nav-links",
  },

  {
    title: "About-Me",
    url: "#about",
    cName: "nav-links",
  },

  {
    title: "My-Services",
    url: "#services",
    cName: "nav-links",
  },

  {
    title: "Hobbies",
    url: "#hobbies",
    cName: "nav-links",
  },
];
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="cover">
        <nav className="NavbarItems">
          <h1 className="navbar-logo"> Ibrahim</h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
            <button className="btn">
              <a href="#footer">Contact</a>
            </button>
          </ul>
        </nav>

        <div className="header-summary">
          <div className="right">
            <div>
              <h1>Founder & G/Manager</h1>
            </div>
            <div className="at"></div>
            <div>
              <p> @ AMIO Engineering plc. </p>
            </div>
          </div>
          <div className="left">
            <button>
              <a href="linkedin.com/in/ibrahim-yassin-mohammed-12486754/">
                <BsLinkedin color="blue" size={100} />
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
