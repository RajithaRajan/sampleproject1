import React,{Component} from "react";
import { Text, View,AsyncStorage,Image} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import homescreen from './page/homescreen';
import settingscreen from './page/settingscreen';
import Project from './page/Project';
import profilescreen from './page/profilescreen';



 class DetailsScreen extends Component{
  constructor(props){
      super(props);
      this.state={
          usr:'',
          pass:''
      }
  };
  
  componentDidMount(){
      this.retrieveData();
  }
  retrieveData = async () => {
      try {
          
  const val=await AsyncStorage.getItem('username');
  const pas=await AsyncStorage.getItem('password');
  this.setState({usr:val});
  this.setState({pass:pas});
  console.log('hii',usr);
      }
      catch(error){
console.log(error);

      }
  }
  render(){
      
      return(
          <View style={{backgroundColor:'violet'}}>
          <Text style={{fontSize:30,color:'blue'}}>Welcome {this.state.usr}</Text>
          <Text style={{fontSize:30,color:'blue'}}>U r password is {this.state.pass}</Text>
          </View>
      );
  }
}



   
const App = createBottomTabNavigator(
  {
     Home: { screen: DetailsScreen,
        navigationOptions: {
        
            tabBarIcon:  ({tintColor})=>(
                
                <Image source={{uri: 'https://cdn2.iconfinder.com/data/icons/picons-essentials/57/home-128.png'}} 
                style={{width: 25, height: 25, resizeMode: 'contain'}}
                tintColor={tintColor='violet'}
             
            
            />
            
            )
            
        }
    },
        
    Settings: { screen: settingscreen ,
        navigationOptions: {
        
            tabBarIcon: ({tintColor})=>(
                
                <Image source={{uri: 'https://cdn4.iconfinder.com/data/icons/mosaicon-01/512/gear-128.png'}} 
                style={{width: 25, height: 25, resizeMode: 'contain'}}
                tintColor={tintColor='yellow'}/>
            
            )
        }
    },
    Contact:{screen:Project,
        navigationOptions: {
        
            tabBarIcon:  ({tintColor})=>(
                
                <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/communication-1/100/phone_contact_book-128.png'}} 
                style={{width: 25, height: 25, resizeMode: 'contain'}}
                tintColor={tintColor='pink'} />
            )
        }},
    Profiles:{screen:profilescreen,
        navigationOptions: {
          
        
            tabBarIcon: ({tintColor})=>(
                
                <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/windows-and-metro/128/13-128.png'}} 
                style={{width: 25, height: 25, resizeMode: 'contain'}}
                tintColor={tintColor='green'}
                />
            
            )
        }},
  },{
    tabBarOptions:{
    activeTintColor:'red',
    inactiveTintColor:'blue',
    activeBackgroundColor:'skyblue',
    inactiveBackgroundColor:'lightblue',
    labelStyle: {
        fontSize: 14,
    
      },
    }
  },
  
  

  
)

export default createAppContainer(App);