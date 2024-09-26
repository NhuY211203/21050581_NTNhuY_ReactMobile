import * as React from 'react';
import {TouchableOpacity,Image,View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
export default function SanPham({navigation, route}) {
  const {chonanh} = route.params || { chonanh: require('./assets/xanhnhat.png')};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.img} source={chonanh}/>
      </View>
      <View style={styles.bot}>
        <Text style={styles.text1}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={styles.bot1}>
          <FontAwesome name="star" size={24} color="orange" />
          <FontAwesome name="star" size={24} color="orange" />
          <FontAwesome name="star" size={24} color="orange" />
          <FontAwesome name="star" size={24} color="orange" />
          <FontAwesome name="star" size={24} color="orange" />
          <Text style={{
            paddingLeft:20,
            }}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.bot1}>
          <Text style={{
            fontWeight:'bold',
            fontSize:23,
            paddingLeft:20,
            }}>1.790.000đ</Text>
            <Text style={{
            fontWeight:'bold',
            color:'#AAB396',
            fontSize:23,
            paddingLeft:20,
            textDecorationLine:'line-through'
            }}>1.790.000đ</Text>
        </View>
        <View style={styles.bot1}>
          <Text style={{
            color:'red',
            fontWeight:'bold',
            fontSize:15,
            paddingLeft:15,
            marginRight:20,
            }}>Ở đâu rẻ hơn hoàn tiền</Text>
            <FontAwesome name="question-circle" size={20} />
        </View>
        <TouchableOpacity style={styles.butmau} onPress={()=> navigation.navigate('CM')}>4 MÀU - CHỌN MÀU></TouchableOpacity>
        <TouchableOpacity style={styles.butmua}><Text style={styles.text2}> CHỌN MUA</Text></TouchableOpacity>
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
  butmau:{
    marginTop:10,
    padding:5,
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    alignItems:'center',
  },
  butmua:{
    marginTop:70,
    padding:10,
    borderRadius:10,
    alignItems:'center',
    backgroundColor:'red'
  },
  text2:{
    fontWeight:'bold',
    fontSize:15,
    color:'#F5F7F8'
  },
  top:{
    flex:5,
  },
  bot:{
    flex:5,
  },
  img:{
    marginLeft:30,
    width:280,
    height:270,
  },
  bot1:{
    marginTop:10,
    flexDirection:'row',
  }
});