import React, { Component } from "react";
import Home from "./containers/Home/Home";
import Watch from "./containers/Watch/Watch";
import AppLayout from "./components/AppLayout/AppLayout";
import { Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { youtubeLibraryLoaded } from "./store/actions/api";

class App extends Component {
  componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load("client", () => {
        window.gapi.client.setApiKey(process.env.REACT_APP_API_KEY);
        window.gapi.client.load("youtube", "v3", () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };
    document.body.appendChild(script);
  }

  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path="/watch" component={Watch} />
          <Route path="/" component={Home} />
        </Switch>
      </AppLayout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ youtubeLibraryLoaded }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
