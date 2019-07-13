import React from 'react';
import {
  ActivityIndicator,  StatusBar,
  View
} from 'react-native';
import { isSignedIn } from "../../components/isAuth";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));

    this.props.navigation.navigate( this.props.signedIn? 'App' : 'Auth');
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
