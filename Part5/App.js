import * as React from 'react';
import {TouchableOpacity,Image,View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SanPham from './SanPham';
import ChonMau from './ChonMau';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SP">
        <Stack.Screen name='SP' component={SanPham} options={{headerShown: false}}/>
        <Stack.Screen name='CM' component={ChonMau} options={{headerShown: false}}
        // options={({navigation}) => ({
        //       headerLeft: () => (
        //         <TouchableOpacity onPress ={()=> navigation.goBack()} style={{marginLeft:10}}>
        //           <FontAwesome name = "arrow-left" size ={24} color='black'/>
        //         </TouchableOpacity>
        //       ),
        //     })}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}