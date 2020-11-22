import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image,Platform } from 'react-native';

import {Dimensions} from 'react-native';
const { width } = Dimensions.get('window');

import { createStackNavigator } from 'react-navigation-stack';
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';


import Splash from './src/Splash';
import LandingScreen from './src/Landing';
import BlogScreen from './src/Blog';
import BlogScreenAmazon from './src/BlogAmazon';
import BlogScreenFlipkart from './src/BlogFlipkart';
import BlogScreenebay from './src/Blogebay';
import BlogScreenMyntra from './src/BlogMyntra';
import MainTabNavigator from './src/MainTabNavigator';

const stackNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: () => ({
        title: null,
        headerShown: false,
      }),
    },
    Landing: {
      screen: LandingScreen,
      navigationOptions: () => ({
        title: null,
        headerShown: false,
      }),
    },
    BlogAmazon: {
      screen: BlogScreenAmazon,
      navigationOptions: () => ({
        title: "Amazon",
         headerShown: true,
        headerStyle: {  
          backgroundColor: "#ae7bb6",            
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            alignSelf: "center",
            fontSize: 20,
          },
      }),
    },
    BlogFlipkart: {
      screen: BlogScreenFlipkart,
      navigationOptions: () => ({
        title: "Flipkart",
         headerShown: true,
        headerStyle: {  
          backgroundColor: "#ae7bb6",            
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            alignSelf: "center",
            fontSize: 20,
          },
      }),
    },
    BlogAmazonebay: {
      screen: BlogScreenebay,
      navigationOptions: () => ({
        title: "eBay",
         headerShown: true,
        headerStyle: {  
          backgroundColor: "#ae7bb6",            
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            alignSelf: "center",
            fontSize: 20,
          },
      }),
    },
    BlogMyntra: {
      screen: BlogScreenMyntra,
      navigationOptions: () => ({
        title: "Myntra",
         headerShown: true,
        headerStyle: {  
          backgroundColor: "#ae7bb6",            
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            alignSelf: "center",
            fontSize: 20,
          },
      }),
    },
    Blog: {
      screen: BlogScreen,
      navigationOptions: () => ({
        title: "",
         headerShown: true,
        headerStyle: {  
          backgroundColor: "#ae7bb6",            
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            alignSelf: "center",
            fontSize: 20,
          },
      }),
    },
    Main: {
      screen: MainTabNavigator,
      navigationOptions: () => ({
        title: "ShopIndx",
        headerShown: true,
        headerStyle: {  
          backgroundColor: "#ae7bb6",            
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            alignSelf: "center",
            fontSize: 20,
          },
        headerLeft:null,  
    }),
    },
  }
);

export default createAppContainer(stackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    width: 18,
    height: 25,
    marginBottom:10
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 0,
    marginBottom:5,
  },
  iconRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginTop: 15
  },
  icon2: {
    color: "rgba(250,250,250,1)",
    fontSize: 25
  }
});
