/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {Button, TextInput, View, StyleSheet,Alert} from 'react-native'
import {AsyncStorage} from 'react-native';


export default class App extends Component {

  
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  buttoncliked= async ()=>{

  
     if(this.state.username.trim()===''&& this.state.password.trim()==='')
    {
       Alert.alert('please enter password and username')
     }
    else if(this.state.username.trim()===''&&this.state.password.length>0)
    {
       Alert.alert('please enter username')
     }
   else if(this.state.username.length>0 && this.state.password.trim()==='')
     {
       Alert.alert('please enter password')
    }
      
       
      else{
         
    
          try{
            
            await AsyncStorage.setItem('username',this.state.username);
            await AsyncStorage.setItem('password',this.state.password);
            this.props.navigation.navigate('Details');
          }catch(error){
            
          }
        };
       
      
  
       }
  

  render() {
    return (
      <View style={styles.container}>
        <TextInput
      
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
        placeholder={'Username'}
          style={styles.st}
          
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.st}
      
        />
        
        
        <Button
          title={'Login'}
        onPress={()=>this.buttoncliked()}
      
        
  
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
    
  },
  st:
  {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  color:'red',
    fontSize:20,
  
  },
  
  
});
