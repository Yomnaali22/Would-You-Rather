import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./components.css";
import { connect } from "react-redux";
import Logout from "./Logout";
import { Selectedusername } from "../actions/users";

class Navigation extends Component {

  componenetDidMount() {
    this.props.dispatch(Selectedusername());
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" className="navcustomstyling">
          
          {!this.props.path && <Logout />}

          <Nav className="me-auto">
            <NavLink
              to="/home"
              className="homeText"
              activeClassName="selected"
              activeStyle={{ color: "rgb(32, 178, 142" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/add"
              className="homeText"
              activeClassName="selected"
              activeStyle={{ color: "rgb(32, 178, 142" }}
            >
              New Question
            </NavLink>
            <NavLink
              to="/leaderboard"
              className="homeText"
              activeClassName="selected"
              activeStyle={{ color: "rgb(32, 178, 142" }}
            >
              Leaderboard
            </NavLink>
          </Nav>
        </Navbar>
        <br></br>
        <br></br>
      </div>
    );
  }
}

function mapStateToProps(statetree) {
  return {
    statetree,
  };
}

export default connect(mapStateToProps)(Navigation);
