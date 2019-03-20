import React from 'react';
import { FlatList, ActivityIndicator, Text, View ,Image,StyleSheet } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://reactnativecode.000webhostapp.com/FlowersList.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator size="large" color="green"/>
        </View>
      )
    }

    return(
      <View style={styles.MainContainer}>
      
        <FlatList
          data={this.state.dataSource}
  
  renderItem={({item}) =>
  <View style={{flex: 1, paddingTop:20,backgroundColor:'yellow',flexDirection:'row'}}>
   <Image source = {{ uri: item.flower_image_url }} style={styles.imageView} />
            
  <Text style={styles.textView}>{item.flower_name},{item.id}</Text>
 </View>
    }
    keyExtractor={(item, index) => index.toString()}
    
  
        />
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
 
   
  imageView: {
   
      width: '20%',
      height: 100 ,
      margin: 7,
      borderRadius : 7
   
  },
   
  textView: {
   
      // width:'100%', 
       textAlignVertical:'center',
       padding:10,
      color: 'black',
      fontSize:20,
    
  
  },
  
   
  });