import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "./components.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { select_question } from "../actions/shared";
class AnsweredView extends Component {
  state = {
    AnsweredQuestion: false,
  };

  onClick = (question) => {
    question.category = "answered";
    this.props.dispatch(select_question(question));
    this.setState({
      AnsweredQuestion: true,
    });
  };

  render() {
    const question = this.props.question;

    return (
      <div className="card">
        <Card>
          <Card.Header className="AnsweredText">Answered</Card.Header>
          <Card.Header>Asked by {question.author}</Card.Header>
          <Card.Body>
            <Card.Title tag="h5">Would You Rather?</Card.Title>
            <Card.Text>{question["optionTwo"].text}</Card.Text>
            <Button onClick={this.onClick.bind(this, question)}>
              View Poll
            </Button>
            {this.state.AnsweredQuestion ? (
              <>
                {" "}
                <Redirect
                  to={{
                    pathname: `/questions/${question.id}`,
                    state: {},
                  }}
                />
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

export default connect(mapStateToProps, null)(AnsweredView);
