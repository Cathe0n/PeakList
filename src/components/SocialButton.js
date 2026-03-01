import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Colors } from '../theme/colors';

const SocialButton = ({ title, type }) => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: { color: Colors.textMain, fontSize: 14 },
});

export default SocialButton;