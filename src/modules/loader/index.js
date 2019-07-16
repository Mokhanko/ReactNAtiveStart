import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
import {isSignedIn} from "../../components/isAuth";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new window.AbortController();
    this.signal = this.controller.signal;
    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
    const signal = this.signal;
    // isSignedIn({ signal })
    //   .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
    //   .catch(err => alert("An error occurred"));

    this.props.navigation.navigate( this.props.signedIn ? 'App' : 'Auth');
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
