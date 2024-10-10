

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddJobScreen({ navigation, route }) {
  const [newJob, setNewJob] = useState('');
  
  // Lấy userName từ route params (truyền từ WelcomeScreen)
  const { userName } = route.params || { userName: '' }; 

  const handleFinish = () => {
    // Quay lại HomeScreen và gửi kèm công việc mới nếu cần
    navigation.navigate('Home', { newJob });
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

      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/40' }}
          style={styles.avatar}
        />
        <View style={styles.headerText}>
          <Text style={styles.greeting}>Hi {userName}</Text>
          <Text style={styles.subGreeting}>Have a great day ahead</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>ADD YOUR JOB</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="document-text-outline" size={24} color="#00BCD4" />
        <TextInput
          style={styles.input}
          placeholder="Input your job"
          value={newJob}
          onChangeText={setNewJob}
        />
      </View>

      <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
        <Text style={styles.buttonText}>FINISH →</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={styles.notepadImage}
      />
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
    marginBottom: 10,
  },
  time: {
    fontWeight: 'bold',
  },
  statusIcons: {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 14,
    color: '#666',
  },
  backButton: {
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  finishButton: {
    backgroundColor: '#00BCD4',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notepadImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 40,
  },
});
