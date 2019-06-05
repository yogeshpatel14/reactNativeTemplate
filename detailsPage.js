import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { NAV_DETAILS_2, NAV_DETAILS } from './src/navigations/stackNavigator/navigationScreenName';


class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details',
      }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push(NAV_DETAILS_2)}
        />
        </View>
      );
    }
  }

  
 

 export default DetailsScreen;