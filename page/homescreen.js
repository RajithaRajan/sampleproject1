//This is an example code for Bottom Navigation//
import React,{Component} from "react";
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

 
export default class homescreen extends Component {
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 50, fontSize: 25 }}>Home!</Text>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});