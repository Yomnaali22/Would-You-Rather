import React, { Component } from "react";

import { Button, Card } from "react-bootstrap";
import "./components.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { select_question } from "../actions/shared";
import Question from "./Question";
class UnansweredView extends Component {
  state = {
    UnansweredQuestion: false,
  };
  onClick = (question) => {
    question.category = "unanswered";
    this.props.dispatch(select_question(question));
    this.setState({
      UnansweredQuestion: true,
    });
  };

  render() {
    const { question } = this.props;

    return (
      <div className="card">
        <Card>
          <Card.Header className="unasweredText">Unanswered</Card.Header>
          <Card.Header>
            Asked by {question ? question.author : "loading"}
          </Card.Header>
          <Card.Body>
            <Card.Title tag="h5">Would You Rather?</Card.Title>
            <Card.Text>
              {question["optionOne"] ? question["optionOne"].text : "loading"}
            </Card.Text>
            <Button onClick={this.onClick.bind(this, question)}>
              View Poll
            </Button>
            {this.state.UnansweredQuestion ? (
              <>
                {" "}
                <Question />
                <Redirect
                  to={{
                    pathname: `/questions/${question.id}`,
                    state: {},
                  }}
                ></Redirect>
              </>
            ) : null}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(statetree) {
  return {
    statetree: statetree,
  };
}

export default connect(mapStateToProps, null)(UnansweredView);
