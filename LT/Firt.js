import React from 'react';
import { Text, View,TextInput,TouchableOpacity,StyleSheet,SafeAreaView,} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const YourApp = () => {
  return (
<View style={{flex:1,backgroundColor:'gold'}}>
<View style={{flex:0.3,
              justifyContent:'center'           
}}>
<Text style={{textAlign: 'center',fontSize:24,fontWeight:'bold'}}>REGISTER</Text>
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

<TextInput style={{height:40,width:'80%'}}
placeholder='Phone'/>
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

<TextInput style={{height:40,width:'80%'}}
placeholder='Email'/>
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
<TextInput style={{height:40,width:'80%'}}
placeholder='Password'/>
<FontAwesome name="eye" size={24} color="black" style={{marginRight: 10}} />
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

<TextInput style={{height:40,width:'80%'}}
placeholder='Birthday'/>
</View>
<View style={{flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-around',
    width: '100%'}}>
<TouchableOpacity style={{
    flexDirection: 'row',
    alignItems: 'center',}}>
<View style={{
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2a2a2a',
    marginRight: 8,
}}/>
        <Text>Male</Text>
</TouchableOpacity>
<TouchableOpacity style={{
    flexDirection: 'row',
    alignItems: 'center',}}>
<View style={{
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2a2a2a',
    marginRight: 8
}}/>
        <Text>Female</Text>
</TouchableOpacity>
</View>
</View>
<View style={{flex:0.5,
              justifyContent:'center',
              alignItems:'center'
}}>
<TouchableOpacity
        style={{
          height: 50,
          width: '80%',
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}
      >
        <Text style={{ fontWeight: 'bold', color: 'white' }}>REGISTER</Text>
      </TouchableOpacity>
<Text style={{textAlign: 'center',fontSize:14,padding:20}}>When you agree to items and conditions</Text>
</View>
</View>
    );
};

export default YourApp;