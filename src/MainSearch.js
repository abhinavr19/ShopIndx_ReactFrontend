 /* eslint-disable import/no-unresolved */
import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './Home';
import SearchScreen from './Search';
import BookmarkScreen from './Bookmark';


const iconHome = require('../assets/tabbar/home1.png');
const iconOffer = require('../assets/tabbar/offer.png');
const iconBookmark = require('../assets/tabbar/bookmark.png');

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
    width: 30,
    height: 30,
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
    Bookmark: {
      screen: BookmarkScreen,
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
            iconSource = iconOffer;
            break;
          case 'Bookmark':
            iconSource = iconBookmark;
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
      activeTintColor:'#d3d3d3',
      inactiveTintColor:'#a9a9a9',
      showLabel: false,
      style: {
        backgroundColor: "#fff",
        borderTopWidth: 1.5,
        borderTopColor: '#ae7bb6',
      },
      labelStyle: {
        color: "#000",
        fontWeight: "bold",        
        fontSize: 12,
      },
    },
  },
);