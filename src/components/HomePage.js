import React, { Component } from "react";
import UnansweredView from "./UnansweredView";
import AnsweredView from "./AnsweredView";
import "./components.css";
import { Button, Nav, Navbar, NavLink } from "react-bootstrap";
import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import { handleQuestions } from "../actions/shared";
import { Redirect } from "react-router-dom";


class HomePage extends Component {
  
  state = {
    showUnanswered: true,
    showAnswered: false,
  };

  componentDidMount() {
    this.props.dispatch(handleQuestions());
  }

  onButtonClick1 = () => {
    this.setState({
      showUnanswered: true,
      showAnswered: false,
    });
  };

  onButtonClick2 = () => {
    this.setState({
      showAnswered: true,
      showUnanswered: false,
    });
  };

  render() {
    const { questions } = this.props.statetree;
    const { username } = this.props.statetree;
    
    if (this.props.location) {
      if (this.props.location.state) {
        if (this.props.location.state.loc === "questions") {
          this.props.location.state.question.category = "answered";
          this.props.location.state.question[
            this.props.location.state.answer
          ].votes = username.id;
          return (
            <Redirect
              to={{
                state: this.props.location.state.question,
                pathname: `/questions/${this.props.location.state.referrer}`,
              }}
            />
          );
        }
      }
    }
    if (Object.entries(this.props.statetree.username).length === 0) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { referrer: "/home" },
          }}
        />
      );
    }

    let answerdquestion = [];
    let unaswerdquestion = [];
    Object.values(questions).forEach((question) => {
      if (question["optionOne"].votes.includes(username.id)) {
        answerdquestion.push(question);
      } else if (question["optionTwo"].votes.includes(username.id)) {
        answerdquestion.push(question);
      } else {
        unaswerdquestion.push(question);
      }
    });

    answerdquestion.sort().reverse();
    unaswerdquestion.sort().reverse();
    return (
      <div>
        <Navigation />
        <div className="pollbox">
          <Navbar>
            <Nav className="list">
              <NavLink>
                <Button id="unanswered-Button" onClick={this.onButtonClick1}>
                  Unanswered Questions
                </Button>
              </NavLink>
              <NavLink>
                <Button id="Answered-Button" onClick={this.onButtonClick2}>
                  Answered Questions
                </Button>
              </NavLink>
            </Nav>
          </Navbar>

          {unaswerdquestion.map((question) => {
            
              
                return this.state.showUnanswered ? (
                  <UnansweredView question={question} key={question.id} />
                ) : null;
              
            
          })}
          <div className="Unanswered-Button">
            {answerdquestion.map((question) => {
              
                return this.state.showAnswered ? (
                  <AnsweredView question={question} key={question.id} />
                ) : null;
              
            })}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(statetree) {
  return {
    statetree,
  };
}

export default connect(mapStateToProps, null)(HomePage);
