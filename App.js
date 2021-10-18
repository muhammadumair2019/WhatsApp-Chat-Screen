import React, { Component } from 'react';
import react from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList
  
} from 'react-native';

const DATA = [
  {
    title: 'Ali Jahanzaib',
    msg: 'Whatsupp?',
    pic: '',
    time: '6:51 PM',
    unread: '2'
    
  },
  {
    title: 'Ahmad',
    msg: 'Hi',
    pic: '',
    time: '6:49 PM',
    unread: '1'
  },
  {
    title: 'Waleed',
    msg: 'Where are you?',
    pic: '',
    time: '6:45 PM',
    unread: '5'
  },

  {
    title: 'Faizan',
    msg: 'wanna go?',
    pic: '',
    time: '6:33 PM',
    unread: '1'
  },
  {
    title: 'Anas',
    msg: 'Very nice!',
    pic: '',
    time: '6:22 PM',
    unread: '3'
  },
  {
    title: 'Dad',
    msg: 'Come home',
    pic: '',
    time: '5:51 PM',
    unread: '1'
  },

  {
    title: 'Mom',
    msg: 'Where are you going?',
    pic: '',
    time: '1:12 PM',
    unread: '1'
  },
  {
    title: 'Zain',
    msg: 'lets party',
    pic: '',
    time: '8:54 PM',
    unread: '3'
  },
  {
    title: 'Wahaj',
    msg: 'Join meeting',
    pic: '',
    time: '4:50 PM',
    unread: '2'
  },

  {
    title: 'Ali Ahmad',
    msg: 'Dude, Lets meet',
    pic: '',
    time: '9:24 PM',
    unread: '4'
  },
  {
    title: 'Amina',
    msg: 'Tommorrow?',
    pic: '',
    time: '7:55 PM',
    unread: '9'
  },
  {
    title: 'Client',
    msg: 'Excellent job',
    pic: '',
    time: '3:59 PM',
    unread: '3'
  },
];

export default class App extends Component
{
  render()
  {
    return (

      <View style={{flex:1}}>

            
      <View style={{flex:0.9,backgroundColor:'#015E54'}}>

          <View style={{flex:4,flexDirection:'row',backgroundColor:'#015E54'}}>

          <View style={{flex:7,backgroundColor:'#015E54',padding:10,marginTop:4,marginLeft:4}}><Text style={{fontSize:17,color:'white',fontFamily:'times'}}>WhatsApp</Text></View>
          <View style={{flex:1,backgroundColor:'#015E54'}}>
            <Image source = {require('./android/app/src/main/assets/images/magnify.png')}
            style={{marginLeft:7,marginTop:16,height:23,width:23}}
            />
              
          </View>
          <View style={{flex:1,backgroundColor:'#015E54'}}>

          <Image source = {require('./android/app/src/main/assets/images/options.png')}
            
            style={{marginLeft:14,marginTop:16,height:23,width:23}}
            />
          </View>
          
          



          </View>

          <View style={{flex:2,flexDirection:'row',backgroundColor:'#015E54'}}>

               <View style={{flex:1.5,backgroundColor:'#015E54',padding:5}}>
               <Image source = {require('./android/app/src/main/assets/images/cam.png')}
            
                style={{height:20,width:20}}
                />
               </View>

               <View style={{flex:7,flexDirection:'row',backgroundColor:'#015E54',padding:6,borderBottomWidth:3,borderBottomColor:'#e5e4e2'}}>
                    <View style={{flex:6,backgroundColor:'#015E54'}}>
                  <Text style={{marginLeft:17,color:'white',fontFamily:'times'}}>CHATS</Text>
                  </View>

                  <View style={{flex:4,backgroundColor:'#015E54'}}>
                  <Text style={{color:'black',fontSize:13,marginTop:1,borderRadius:1000,width:17,height:17,borderColor:'white',borderWidth:1,backgroundColor:'white'}}> 9 </Text>
                  </View>

               </View>

               <View style={{flex:7,backgroundColor:'#015E54',padding:6}}>
               <Text style={{marginLeft:33,color:'#b2beb5',fontFamily:'times'}}>STATUS</Text>

               </View>

               <View style={{flex:7,backgroundColor:'#015E54',padding:6}}>
               <Text style={{marginLeft:33,color:'#b2beb5',fontFamily:'times'}}>CALLS</Text>

               </View>

          </View>



      </View>


      <View style={{flex:5}}>

          <FlatList
              
          data={DATA}
          
          keyExtractor={(item, index) => index}
          
          renderItem={({item,index}) =>

          


          <View style={{backgroundColor:'white', padding:10,borderBottomWidth:5,borderBottomColor:'white'}}>


              <View style={{flex:1,backgroundColor:'white',flexDirection:'row'}}>

                <View style={{flex:1, backgroundColor:'white'}}>
                 <Image source={require('./android/app/src/main/assets/images/user.png')}
                style={{height:39,width:39}}
                /> 
               </View>
                
               <View style={{flex:6, backgroundColor:'white'}}>
                

                <Text style={{marginLeft:10,fontSize:15, color:'black',fontFamily:'times'}}> {item.title} </Text>
                <Text style={{marginLeft:10,fontSize:14,marginTop:2, color:'#2f4f4f',fontFamily:'times'}}> {item.msg}</Text> 


               </View>

               <View style={{flex:3, backgroundColor:'white', alignItems:'flex-end'}}>
                
                <Text style={{fontSize:12,color:'#0BCB54'}}> {item.time} </Text>
                <Text style={{color:'white',fontSize:13,marginTop:4,borderRadius:1000,width:17,height:17,borderColor:'#0BCB54',borderWidth:1,backgroundColor:'#0BCB54'}}> {item.unread} </Text>
               </View>

              </View>

                          

            
          </View>
          
          

        }
          />

        </View>

  </View>
      

    )

  }
}