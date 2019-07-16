// import React, { Component } from 'react';
// import { View, Button } from 'react-native';
// import { onSignIn } from '../../components/isAuth';
//
// class SignInScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Please sign in',
//   };
//
//   render() {
//     return (
//       <View>
//         <Button title="Sign in!" onPress={this._signInAsync} />
//       </View>
//     );
//   }
//
//   _signInAsync = async () => {
//     await onSignIn();
//     this.props.navigation.navigate('App');
//   };
// }
//
// export default SignInScreen;
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { changeField } from "./reducer";

const LoginView = ({ name, password, changeField}) => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
      <TextInput style={styles.inputs}
                 placeholder="Name"
                 keyboardType="text"
                 underlineColorAndroid='transparent'
                 onChangeText={(name) => changeField({name})}/>
    </View>
    <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
      <TextInput style={styles.inputs}
                 placeholder="Password"
                 secureTextEntry={true}
                 underlineColorAndroid='transparent'
                 onChangeText={(password) => changeField({password})}/>
    </View>

    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}>
      <Text style={styles.loginText}>Login</Text>
    </TouchableHighlight>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:250,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});

export default compose(
  connect(
    state => ({
      name: state.auth.name,
      password: state.auth.password
    }),
    {
      changeField
    }
  ),
  lifecycle({
    componentDidMount(){

    }
  })
)(LoginView);
