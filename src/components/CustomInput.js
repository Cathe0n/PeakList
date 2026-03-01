import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

const CustomInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={Colors.textSecondary}
      value={value}
      onChangeText={onChangeText}
      // !! ensures the value is strictly true or false, never undefined
      secureTextEntry={!!secureTextEntry} 
      autoCapitalize="none"
    />
  </View>
);

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  label: { color: Colors.textSecondary, fontSize: 12, marginBottom: 8, marginLeft: 4 },
  input: {
    backgroundColor: Colors.inputBg,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    padding: 12,
    color: Colors.textMain,
    fontSize: 14,
  },
});

export default CustomInput;