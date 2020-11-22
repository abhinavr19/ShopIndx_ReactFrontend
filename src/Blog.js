import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Item,
  Constants,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Card,
  AppRegistry,
  TextInput,
  Button,
  Linking,
  AsyncStorage,Alert,
  KeyboardAvoidingView,
} from 'react-native';

import {WebView} from 'react-native-webview';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: props.navigation.getParam('link', ''),
    };
  }

  async componentDidMount() {this.fetchData();}

  async fetchData() {}

  render() {
    return (
       <View style={styles.view}>
         <WebView
          source={{uri: this.state.link}}
          style={styles.view}
        />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  view:{
    flex:1,
    width:"90%",
    alignSelf:"center",
    height:1000,
    marginTop:0,
    backgroundColor:"#fff",
    height:"100%",
  },
  text:{
    marginTop:20,
  },
});