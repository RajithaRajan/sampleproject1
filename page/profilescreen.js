//This is an example code for Bottom Navigation//
import React,{Component} from "react";
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet,Image} from 'react-native';

 
export default class profilescreen extends Component {
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'green' }}>
        <Text style={{ marginTop: 50, fontSize: 25 }}>personal details!</Text>
        <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/windows-and-metro/128/13-128.png'}} 
                style={{width: 100, height: 100, resizeMode: 'contain'}}/>
        
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
