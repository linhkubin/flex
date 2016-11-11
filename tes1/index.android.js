/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class tes1 extends Component {

  constructor(props){ // chay trc render

    super(props);
    
  }


  componentWillMount(){
  // man hinh trc render


    }


  render() {
    return (

      <View style={styles.container}>

        <Text style={styles.welcome}>
          
           HELLO WORLD:d
          
        </Text>
        
          
           <View style={styles.toplane}></View>
           <View style={styles.botlane}></View>
      </View>
     

    );
  }
  componentDidMount(){
  // sau render

  }







}



const styles = StyleSheet.create({
  container: {
    flex: 1,     // can ti le background
    // // flexDirection = "column", //xep background
    // justifyContent: 'center',
    // alignItems: 'center',
    // // backgroundColor: 'blue',
  },
  welcome: {
    flex: 1,
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
    // background:'pink';
  },
  toplane: {
   
    backgroundColor : 'pink',
    flex: 1,

  },
  botlane: {
    
    backgroundColor : "yellow",
    flex: 1,
  },
});

AppRegistry.registerComponent('tes1', () => tes1);
