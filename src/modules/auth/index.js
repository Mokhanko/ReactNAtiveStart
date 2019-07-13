import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { onSignIn } from '../../components/isAuth';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await onSignIn();
    this.props.navigation.navigate('App');
  };
}

export default SignInScreen;
