import React from 'react';
import { Text, View, Button,Image} from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1 ,backgroundColor:'pink'}}>
      {/* Phần màu đỏ */}
      <View style={{ flex: 2,justifyContent:'center',alignItems:'center' }}> 
      <Image 
        source={{uri:'https://picsum.photos/seed/picsum/200/300'}} 
        style={{height:150,width:200}}>
      </Image>
      </View>
      
      {/* Phần với các tiêu đề */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold'}}>GROW</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold'}}>YOUR BUSINESS</Text>
      </View>
      
      {/* Phần mô tả với xuống dòng */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
        <Text style={{ textAlign: 'center', padding: 10,fontWeight:'bold' }}>
          We will help you to grow your business{'\n'}
          using online services
        </Text>
      </View>
      
      {/* Phần nút */}
      <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}> 
          <Button title="LOGIN" />
          <Button title="SIGN UP" />

      </View>
      
      {/* Phần hỏi đáp */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18,fontWeight:'bold' }}>HOW WE WORK?</Text>
      </View>
    </View>
  );
};

export default YourApp;