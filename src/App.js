import React, { Component } from "react";
import LoginPage from "./components/LoginPage";
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import "animate.css/animate.css";
import "./App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../src/actions/shared";
import { Route, Switch } from "react-router-dom";
import Question from "./components/Question";

class App extends Component {
  state = {
    leaderboard: false,
    question: false,
  };
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <div className="bg">
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
        </div>
        <Switch>
          <Route path="/questions/:question_id" component={Question}></Route>
          <Route path="/home" component={HomePage} />
          <Route path="/add" component={NewQuestion} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/error" component={NotFound} />
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {this.state.leaderboard ? (
          <>
            <div>
              <LoginPage />
            </div>
          </>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(statetree) {
  return {
    statetree,
  };
}

export default connect(mapStateToProps, null)(App);
