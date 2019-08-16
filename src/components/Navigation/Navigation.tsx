import React from "react";
import "./Navigation.scss";
import logo from "../../img/personal-logo.svg";
import { Link } from "react-router-dom";

class Navigation extends React.Component<{}, {}> {
  render() {
    return (
      <div id="Nav-section">
        <div id="navigation">
          <Link to="/">
            <img id="logo" src={logo} alt="my-personal-logo" />
          </Link>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/skills"> Skills </Link>
            </li>
            <li>
              <Link to="/experience"> Experience </Link>
            </li>
            <li>
              <Link to="/contact"> Contact </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
