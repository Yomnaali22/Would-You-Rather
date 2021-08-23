import React, { Component } from "react";
import { Dropdown, Form, Card, Button } from "react-bootstrap";
import HomePage from "./HomePage";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleUserSelector } from "../actions/selectusername";
import Navigation from "../components/Navigation";

class LoginPage extends Component {
  state = {
    showHomePage: false,
  };

  handleChange = () => {
    this.setState({
      showHomePage: true,
    });
  };

  handleUserSelect = (e) => {
    this.props.dispatch(handleUserSelector(this.props.statetree.users[e]));
  };

  render() {
    const { users } = this.props.statetree;

    return (
      <div>
        <Navigation />
        <Card className="Card">
          <Form style={{ textAlign: "center" }} className="form">
            <Form.Text className="text-muted">
              <h1>Would You Rather?</h1>
              <br></br>
              <br></br>
              <h4>Login to play</h4>
            </Form.Text>
            <br></br>
            <Dropdown onSelect={this.handleUserSelect.bind(this)}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {this.state.username ? this.state.username : "Choose username"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.values(users).map((username) => (
                  <Dropdown.Item eventKey={username.id} key={username.id}>
                    {username.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <br></br>
            <Button
              variant="primary"
              size="md"
              active
              onClick={this.handleChange}
            >
              Log In
            </Button>
            {this.state.showHomePage ? (
              <>
                <div>
                  <Redirect
                    to={
                      this.props.location.state
                        ? this.props.location.state.referrer
                        : "/home"
                    }
                  />
                  <HomePage />
                </div>
              </>
            ) : null}
          </Form>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(statetree) {
  return {
    statetree,
  };
}

export default connect(mapStateToProps, null)(LoginPage);
