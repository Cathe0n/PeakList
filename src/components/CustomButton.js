import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

const CustomButton = ({ title, onPress, disabled }) => (
  <TouchableOpacity 
    style={[styles.button, { backgroundColor: disabled ? Colors.primaryDisabled : Colors.primaryActive }]} 
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: { height: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  text: { color: Colors.textMain, fontWeight: '600', fontSize: 16 },
});

export default CustomButton;