import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";


class DetailsScreen2 extends React.Component {
    static navigationOptions = {
        title: 'Details2',
      }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen 2</Text>
        </View>
      );
    }
  }

  
 

 export default DetailsScreen2;