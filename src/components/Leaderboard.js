import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./components.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "./Navigation";

class Leaderboard extends Component {
  render() {
    const { users } = this.props.statetree;
    const { questions } = this.props.statetree;
    let users_questions = [];
    let userrank = {};
    //We are matching user questions to their corresponed question in the general questions object
    Object.values(questions).forEach((question) => {
      if (question.author === users[question.author].id) {
        users_questions.push(users[question.author].id);
      }
    });

    //We are creating new object containing users
    Object.values(users).forEach((user) => {
      userrank[user.id] = {
        id: user.id,
        name: user.name,
        numbofquestions: 0,
        numofanswers: Object.keys(user.answers).length,
        avater: user.avatarURL,
      };
    });
    Object.values(questions).forEach((question) => {
      Object.values(userrank).forEach((user) => {
        if (
          question["optionOne"].votes.includes(user.id) ||
          question["optionTwo"].votes.includes(user.id)
        ) {
          user.numofanswers += 1;
        }
      });
    });
    //We are matching every user to number of questions
    Object.entries(userrank).forEach((user) => {
      users_questions.forEach((user_question) => {
        if (user_question === user[0]) {
          user[1].numbofquestions += 1;
        }
      });
    });

    if (Object.entries(this.props.statetree.username).length === 0) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { referrer: "/leaderboard" },
          }}
        />
      );
    }
    let arrsort = [];

    Object.values(userrank).forEach((user) => {
      let value = {
        user: user,
        rank: user.numbofquestions + user.numofanswers,
      };

      arrsort.push(value);
    });
    arrsort.sort(function (a, b) {
      return a.rank - b.rank;
    });

    arrsort.reverse();

    return (
      <div>
        <Navigation></Navigation>
        <div>

          {arrsort.map((card) => {
            return (
              <div className="cardStyle" key={card.user.id}>
                <Card>
                  <Card.Header>{card.user.name}</Card.Header>
                  <Card.Body>
                    <Card.Img
                      variant="right"
                      className="img"
                      src={card.user.avater}
                    ></Card.Img>
                    <Card.Text>
                      Number of questions {card.user.numbofquestions}
                      <br></br>
                      Number of answers {card.user.numofanswers}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(statetree) {
  return {
    statetree: statetree,
  };
}

export default connect(mapStateToProps, null)(Leaderboard);
