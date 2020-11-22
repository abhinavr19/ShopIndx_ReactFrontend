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



export default class OfferScreen extends Component {
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
      <ScrollView style={styles.Container}>
          <Text style={{alignSelf:"center", width:"90%", margin:10,fontWeight:"bold",fontSize:34}}>Offers</Text>
          
          <View style={styles.box}>
              <Text style={{position: 'absolute', alignSelf:"center", width:"90%",fontSize:18,  fontWeight: "bold", color:"#000", margin: 15}}>Offers</Text>
              <FlatList
                style={styles.list}
                horizontal={false}
                data={this.state.hotDealsData}
                renderItem={({item}) => {
                  return(
                    <TouchableOpacity style={styles.box2} onPress={() => this.props.navigation.navigate("Blog", {link:item.link})}>
                      <View style={{width:"94%",height:200,}}>
                            <Image style={styles.image}
                                   resizeMode="contain"
                                   source={{uri: item.image}}/>
                      </View>
                      <Text style={{fontWeight:"bold",fontSize:15, margin:5}}>{item.title}</Text>
                      <Text style={{fontWeight:"bold",fontSize:15, margin:5}}>{item.price}</Text>
                      <Text style={{fontWeight:"bold",fontSize:15, margin:5}}>{item.from}</Text>
                    </TouchableOpacity>
                    )}}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}/> 
          </View>       
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  Container:{
    flex:1,
    backgroundColor:"#fff",
    height:"100%",
    width:"100%"  
  },
  
  box:{
    width:"95%",
    alignSelf:"center",
    backgroundColor:"#fff",
    margin:"2.5%",
    borderRadius:15,
    shadowOffset:{height:1, width:1},
    shadowOpacity:0.5,
    flexDirection:"column",
  },
  box1:{
    alignSelf:"center",
    marginTop:"10%",
    marginLeft:15,
    marginRight:15,
    marginBottom:15,
  },
  icon:{
    width:50,
    height:50,
    borderRadius:15,
    shadowOffset:{height:1, width:1},
    shadowOpacity:0.5,
    alignSelf:"center",
  },
  image:{
    width:"100%",
    height:"100%",
    borderRadius:15,
    alignSelf:"center",
  },

  box2:{
    alignSelf:"center",
    width:"42%",
    marginTop:"10%",
    marginLeft:15,
    marginRight:15,
    marginBottom:15,
  },

});