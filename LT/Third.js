import React from 'react';
import { Text, View, Button,Image,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const YourApp = () => {
  return (
<View style={{flex:1,backgroundColor:'gold'}}>
<View style={{flex:1,
              justifyContent:'center',
               padding: 20
}}>
<Text style={{textAlign: 'left',fontSize:24,fontWeight:'bold'}}>LOGIN</Text>
</View>
<View style={{flex:2,
              justifyContent:'space-evenly',
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
<FontAwesome name="user" size={24} color="black" style={{marginRight: 10}} />
<TextInput style={{height:40,width:'80%'}}
placeholder='Name'/>
</View>
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
<FontAwesome name="lock" size={24} color="black" style={{marginRight: 10}} />
<TextInput style={{height:40,width:'80%'}}
placeholder='Password'/>
<FontAwesome name="eye" size={24} color="black" style={{marginRight: 10}} />
</View>
</View>
<View style={{flex:2,
              justifyContent:'center',
              alignItems:'center'
              
}}>
<TouchableOpacity
        style={{
          height: 50,
          width: '80%',
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}
      >
        <Text style={{ fontWeight: 'bold', color: 'white' }}>LOGIN</Text>
      </TouchableOpacity>
</View>
<View style={{flex:1,
              justifyContent:'center',
              alignItems:'center'
}}>
<Text style={{textAlign: 'left',fontSize:24,fontWeight:'bold'}}>CREATE ACCOUNT</Text>
</View>
</View>
    );
};

export default YourApp;