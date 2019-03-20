//This is an example code for Bottom Navigation//
import React,{Component} from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet,Image,FlatList,ScrollView } from 'react-native';


 
export default class Project extends Component {
  constructor(props) {
 
    super(props);
  
    this.state = {
  dat:[{
    key:'9188273795',
    imageurl:<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuCzHljZP8Z-US7MW1uoI8QuCLaVgKk0ZKLTbSubbguxyWMHv'}}
    style={{width: 70, height: 50, resizeMode: 'contain'}}/>,
    imageurl1:<Image source={{uri:'https://cdn3.iconfinder.com/data/icons/free-social-1/60/Phone-128.png'}}
    style={{width: 30, height: 30, resizeMode: 'contain'}}/>,
  },
  
  {
    key:'9188273795',
    imageurl:<Image source={{uri:'data:image/jpeg;base64,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'}}
    style={{width: 70, height: 50, resizeMode: 'contain'}}/>,
    imageurl1:<Image source={{uri:'https://cdn3.iconfinder.com/data/icons/free-social-1/60/Phone-128.png'}}
    style={{width: 30, height: 30, resizeMode: 'contain'}}/>,
  },
  {
    key:'9188273795',
    imageurl:<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVz84PVGzJIN-G9VvQkLm96pEjLewJmeaRQPqAWSZBBsfHFBXjZw'}}
    style={{width: 70, height: 50, resizeMode: 'contain'}}/>,
    imageurl1:<Image source={{uri:'https://cdn3.iconfinder.com/data/icons/free-social-1/60/Phone-128.png'}}
    style={{width: 30, height: 30, resizeMode: 'contain'}}/>,
  },
  {
    key:'9188273795',
    imageurl:<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjG3yURv-evWPcWu3xE07EgN9cvCkhZU4OeIgLZJjcp_4171fP'}}
    style={{width: 70, height: 50, resizeMode: 'contain'}}/>,
    imageurl1:<Image source={{uri:'https://cdn3.iconfinder.com/data/icons/free-social-1/60/Phone-128.png'}}
    style={{width: 30, height: 30, resizeMode: 'contain'}}/>,
  },
  {
    key:'9188273795',
    imageurl:<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOEa3CzXGHKY9vcvdPpumVxRkUVhzMSilRrGJ6yZjs0140DezB'}}
    style={{width: 70, height: 50, resizeMode: 'contain'}}/>,
    imageurl1:<Image source={{uri:'https://cdn3.iconfinder.com/data/icons/free-social-1/60/Phone-128.png'}}
    style={{width: 30, height: 30, resizeMode: 'contain'}}/>,
  },
  {
    key:'9188273795',
    
    
    imageurl:<Image source={{uri:'https://vice-images.vice.com/images/content-images/2016/07/04/what-your-facebook-profile-photo-says-about-you-body-image-1467635168.jpg?output-quality=75?resize=320:*'}}
    style={{width: 70, height: 50, resizeMode: 'contain'}}/>,
    imageurl1:<Image source={{uri:'https://cdn3.iconfinder.com/data/icons/free-social-1/60/Phone-128.png'}}
    style={{width: 30, height: 30, resizeMode: 'contain'}}/>,
  },
  {
    key:'9188273795',
    imageurl:<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlluQcG5fxdkbR9gny84l4QJaGqBBtzcyo-5KQHbhZC8ViOv7rHA'}}
    style={{width: 70, height: 50, resizeMode: 'contain'}}/>,
    imageurl1:<Image source={{uri:'https://cdn3.iconfinder.com/data/icons/free-social-1/60/Phone-128.png'}}
    style={{width: 30, height: 30, resizeMode: 'contain'}}/>,
  },
  {
    key:'9188273795',
    imageurl:<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5XOjp6xB3NyUc8F89awzxh1JJxTPBheQ11G3bPLQrx-AeO6jZw'}}
    style={{width: 70, height: 50, resizeMode: 'contain'}}/>,
    imageurl1:<Image source={{uri:'https://cdn3.iconfinder.com/data/icons/free-social-1/60/Phone-128.png'}}
    style={{width: 30, height: 30, resizeMode: 'contain'}}/>,
  },
  {
    key:'9188273795',
    imageurl:<Image source={{uri:'data:image/jpeg;base64,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'}}
    style={{width: 70, height: 50, resizeMode: 'contain'}}/>,
    imageurl1:<Image source={{uri:'https://cdn3.iconfinder.com/data/icons/free-social-1/60/Phone-128.png'}}
    style={{width: 30, height: 30, resizeMode: 'contain'}}/>,
    
  },
  {
    key:'9188273795',
    imageurl:<Image source={{uri:'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg'}}
    style={{width: 70, height: 50, resizeMode: 'contain'}}/>,
    imageurl1:<Image source={{uri:'https://cdn3.iconfinder.com/data/icons/free-social-1/60/Phone-128.png'}}
    style={{width: 30, height: 30, resizeMode: 'contain'}}/>,
  },
    
  {
    key:'9188273795',
    imageurl:<Image source={{uri:'https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg'}}
    style={{width: 70, height: 50, resizeMode: 'contain'}}/>,
    imageurl1:<Image source={{uri:'https://cdn3.iconfinder.com/data/icons/free-social-1/60/Phone-128.png'}}
    style={{width: 30, height: 30, resizeMode: 'contain'}}/>,
  },
    
  {
    key:'9188273795',
    imageurl:<Image source={{uri:'https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg'}}
    style={{width: 70, height: 50, resizeMode: 'contain'}}/>,
    imageurl1:<Image source={{uri:'https://cdn3.iconfinder.com/data/icons/free-social-1/60/Phone-128.png'}}
    style={{width: 30, height: 30, resizeMode: 'contain'}}/>,
  }   
  ]
  }}
  seperator=()=>{
    return(
      <View style={{height:2,width:'100%', backgroundColor:'white'}}>

      </View>
    )
  }
  render() {
    return (
      <ScrollView>
      <View style={{ flex: 1, flexDirection: 'row',backgroundColor:'pink' }}>
       
      <FlatList
        
      data={this.state.dat}
      ItemSeparatorComponent={()=>this.seperator()}
      renderItem={({item}) => <View><Text style={{fontSize:20,color:'red'}}>{item.imageurl}{item.key}{item.imageurl1}
              
      </Text>
    </View>
      }/>
    
      </View>
      </ScrollView>
    );
      
  }
}

const styles = StyleSheet.create({
  button: {
    color:'red',
    
  },
});