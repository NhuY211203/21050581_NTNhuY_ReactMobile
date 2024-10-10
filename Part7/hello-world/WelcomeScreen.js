import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen({ navigation }) {
  const [name, setName] = useState('');

  const handleGetStarted = () => {
    if (name.trim()) {
      navigation.navigate('Home', { userName: name.trim() }); // Truyền userName sang HomeScreen
    } else {
      alert('Please enter your name');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <Ionicons name="cellular-outline" size={16} color="black" />
          <Ionicons name="wifi" size={16} color="black" />
          <Ionicons name="battery-full" size={16} color="black" />
        </View>
      </View>

      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={styles.notepadImage}
      />

      <Text style={styles.title}>MANAGE YOUR{'\n'}TASK</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={24} color="#ccc" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>GET STARTED →</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  time: {
    fontWeight: 'bold',
  },
  statusIcons: {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between',
  },
  notepadImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8A2BE2',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00BCD4',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});