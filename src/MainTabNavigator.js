 /* eslint-disable import/no-unresolved */
import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './Home';
import SearchScreen from './Search';
import ProfileScreen from './Profile';


const iconHome = require('../assets/tabbar/profilemain.png');
const iconSearch = require('../assets/tabbar/search.png');
const iconProfile = require('../assets/tabbar/profile.png');

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: "#ffffff",
    paddingHorizontal: 20,
  },
  tabBarIcon: {
    width: 25,
    height: 25,
  },
  tabBarIconFocused: {
    tintColor: "#000"
  },

  headerContainer: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    resizeMode: 'cover',
  },
  headerCaption: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        header: null,
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Home':
            iconSource = iconHome;
            break;
          case 'Search':
            iconSource = iconSearch;
            break;
          case 'Profile':
            iconSource = iconProfile;
            break;
          default:
            iconSource = iconHome;
        }
        return (
          <View style={styles.tabBarItemContainer}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor:'#000',
      inactiveTintColor:'#a9a9a9',
      showLabel: true,
      style: {
        backgroundColor: "#fff",
        borderTopWidth: 1.5,
        borderTopColor: '#000',
        height:55,
      },
      labelStyle: {
        color: "#a9a9a9",
        fontWeight: "bold",        
        fontSize: 14,
      },
    },
  },
);