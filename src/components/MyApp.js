import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import HeaderNavigation from "./HeaderNavigation";
import NewBook from "./NewBook";
import Dashboard from "./Dashboard";
import { handleInitialData } from "../actions/handleBooks";
import LoadingBar from "react-redux-loading";

class MyApp extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="mainContainer">
            <HeaderNavigation />
            {this.props.loading === true ? null : (
              <div>
                <Route path="/" exact component={Dashboard} />
                <Route path="/newBook" component={NewBook} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(MyApp);
