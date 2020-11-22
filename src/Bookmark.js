import React, { Component } from "react";
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
  AsyncStorage,Alert
} from 'react-native';

import AntDesignI from 'react-native-vector-icons/AntDesign';
const iconAdd = require('../assets/plus.png');



export default class BookmarkOfferScreen extends Component {
  state = {
    visibleModal: null,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.main}>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  main:{
    backgroundColor:"#ffffff",
    height:"100%",
  },
});