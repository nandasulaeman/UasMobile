import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

import AppNavigator from './AppNavigator'
export default class Login extends Component {

  constructor(props) {
    super(props);
    state = {
      username   : '',
      password: '',
    }
  }
    getUser= () => {
      let url = 'https://uasmobilenanda.000webhostapp.com/uasnanda/read_isUser.php?id='+ this.state.kode +'=metric';
      return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
      console.log(responseJson);
      this.setState({
      username: responseJson.username,
      password: responseJson.password,
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./Component/Img/1.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Username"
              underlineColorAndroid='transparent'
              onChangeText={() => {this.state.username}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./Component/Img/2.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={() => {this.state.password}}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPressIn={() => this.props.navigation.navigate('Category')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPressIn={() => this.props.navigation.navigate('QRCode')}>
          <Text style={styles.loginText}>QRCode</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

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
 