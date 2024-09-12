import React from 'react';
import { Text, View, Button,Image,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const YourApp = () => {
  return (
<View style={{flex:1,backgroundColor:'pink'}}>
<View style={{flex:1.5,justifyContent:'center',alignItems:'center'
}}>
<Image source={{uri:'https://picsum.photos/id/199/300/400'}}
       style={{height:150,width:200}}
/>
</View>
<View style={{flex:1,
              justifyContent:'center',
              alignItems:'center'
}}>
<Text style={{textAlign: 'center',fontSize:24,fontWeight:'bold'}}>FORGET {'\n'} PASSWORD</Text>
<Text style={{textAlign: 'center', padding: 10,fontWeight:'bold'}}>Provide your account’s email for which you want to reset your password</Text>
</View>
<View style={{flex:2,
              justifyContent:'space-around',
              alignItems:'center'
              
}}>

<View style={{flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#f0e68c', 
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '80%', 
    height: 50,
    marginVertical: 10, 
    }}>
<MaterialCommunityIcons name="gmail" size={24} color="black" />
<TextInput style={{height:40,width:'80%'}}
placeholder='Gmail'/>
</View>
<TouchableOpacity
        style={{
          height: 40,
          width: '80%',
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}
      >
        <Text style={{ fontWeight: 'bold', color: 'black' }}>NEXT</Text>
      </TouchableOpacity>
</View>
</View>
    );
};

export default YourApp;