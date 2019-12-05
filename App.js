import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import DetailScreen from './src/screens/DetailScreen';
import ListScreen from './src/screens/ListScreen';


const StackNavigator = createStackNavigator({
  List: {
    screen: ListScreen
  },
  Detail: DetailScreen
}, {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#03A9F4',
      },
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  });


export default createAppContainer(StackNavigator);
