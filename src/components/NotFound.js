import React, { Component } from "react";

import Navigation from "../components/Navigation";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class NotFound extends Component {
  render() {
    if (Object.entries(this.props.statetree.username).length === 0) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { referrer: "/error" },
          }}
        />
      );
    }
    return (
      <div>
        <Navigation></Navigation>

        <h1>404 - Not Found!</h1>
      </div>
    );
  }
}

function mapStateToProps(statetree) {
  return {
    statetree,
  };
}

export default connect(mapStateToProps, null)(NotFound);
