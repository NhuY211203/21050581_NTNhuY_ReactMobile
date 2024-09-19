import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, CheckBox, Alert } from 'react-native';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    let characters = '';
    if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) characters += '0123456789';
    if (includeSymbols) characters += '!@#$%^&*()_+[]{}<>?';

    if (!characters) {
      Alert.alert('Select at least one option to generate a password');
      return;
    }

    let password = '';
    for (let i = 0; i < parseInt(passwordLength, 10); i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    setGeneratedPassword(password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>
      <TextInput 
        style={styles.passwordBox} 
        editable={false} 
        value={generatedPassword} 
        placeholder="Generated password" 
        placeholderTextColor="#ddd"
      />
      <Text style={styles.label}>Password length</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={passwordLength}
        onChangeText={setPasswordLength}
        placeholder="Enter length"
      />

      <View style={styles.checkboxContainer}>
      <Text style={styles.checkboxLabel}>Include lower case letters </Text>
        <CheckBox value={includeLowercase} onValueChange={setIncludeLowercase} />
        
      </View>

      <View style={styles.checkboxContainer}>
      <Text style={styles.checkboxLabel}>Include upper case letters  </Text>
        <CheckBox value={includeUppercase} onValueChange={setIncludeUppercase} />
        
      </View>

      <View style={styles.checkboxContainer}>
      <Text style={styles.checkboxLabel}>Include number </Text>
        <CheckBox value={includeNumbers} onValueChange={setIncludeNumbers} />
        
      </View>

      <View style={styles.checkboxContainer}>
      <Text style={styles.checkboxLabel}>Include special symbol  </Text>
        <CheckBox value={includeSymbols} onValueChange={setIncludeSymbols} />
        
      </View>

      <Button title="Generate Password" onPress={generatePassword} color="#6a5acd" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#2c2a5d',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  passwordBox: {
    backgroundColor: '#1b1a47',
    color: 'white',
    fontSize: 18,
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default PasswordGenerator;