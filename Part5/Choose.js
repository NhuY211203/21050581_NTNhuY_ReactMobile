import { TouchableOpacity,Image,View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';

const maudt ={
  xanhnhat: require('./assets/xanhnhat.png'),
  do: require('./do.png'),
  den: require('./den.png'),
  xanhdam: require('./trang.png'),
};

export default function ChonMau({navigation}) {
  const [mauBanDau, setMau] = useState(maudt.xanhnhat);
  const xulimauduocchon=(color) => {
    setMau(maudt[color]);
  };
  const butchon = () => {
    navigation.navigate('SP', {chonanh: mauBanDau});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.img} source={mauBanDau}/>
        <Text style={styles.text1}>Điện Thoại Vsmart Joy 3
Hàng chính hãng</Text>
      </View>
        <View style={styles.bot}>
            <Text style={styles.text1}>Chọn một màu bên dưới:</Text>
            <View style={styles.chuamau}>
              <TouchableOpacity style={styles.butxanhnhat} onPress={()=> xulimauduocchon('xanhnhat')}></TouchableOpacity>
              <TouchableOpacity style={styles.butdo} onPress={()=> xulimauduocchon('do')}></TouchableOpacity>
              <TouchableOpacity style={styles.butden} onPress={()=> xulimauduocchon('den')}></TouchableOpacity>
              <TouchableOpacity style={styles.butxanh} onPress={()=> xulimauduocchon('xanhdam')}></TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.butmua}onPress={butchon}><Text style={styles.text2}> CHỌN MUA</Text></TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  chuamau:{
    paddingTop:10,
    alignItems:'center',
  },
  butxanhnhat:{
    marginBottom:10,
    backgroundColor:'#81DAE3',
    width:80,
    height:80,
  },
  butden:{
    backgroundColor:'#33372C',
    marginBottom:10,
    width:80,
    height:80,
  },
  butdo:{
    marginBottom:10,
    backgroundColor:'red',
    width:80,
    height:80,
  },
  butxanh:{
    backgroundColor:'blue',
    width:80,
    height:80,
  },
  butmua:{
    margin:10,
    padding:10,
    borderRadius:10,
    alignItems:'center',
    backgroundColor:'blue'
  },
  text2:{
    fontWeight:'bold',
    fontSize:15,
    color:'#F5F7F8'
  },
  text1:{
    paddingTop:5,
    paddingLeft:10,
  },
  top:{
    paddingTop:5,
    flexDirection:'row',
    flex:2,
  },
  bot:{
    flex:8,
    backgroundColor:'#C4DAD2'
  },
  img:{
    marginLeft:10,
    width:100,
    height:100,
  },
});