import React from 'react';
import { Button, View } from 'react-native';
import {AsyncStorage} from "redux-persist";

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}


