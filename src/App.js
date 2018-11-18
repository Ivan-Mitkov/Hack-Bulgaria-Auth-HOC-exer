import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "components/CommentBox/CommentBox";
import CommentList from "components/CommentList/CommentList";
import * as actions from "actions";
import NavigationItems from "components/Navigation/NavigationItems";



class App extends Component {
  componentDidMount() {
    console.log("App props", this.props);
  }
  componentDidUpdate() {
    console.log("CDU");
  }

  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    }
  }

  renderHeader() {
    return (
      <React.Fragment>
         <NavigationItems auth={this.props.auth}/>
         {/* {this.renderButton()} */}
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps=(state)=> {
  return { auth: state.auth };
}

export default connect(
  mapStateToProps,
  actions
)(App);
