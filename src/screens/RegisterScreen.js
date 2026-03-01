import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialButton from '../components/SocialButton';
import { Colors } from '../theme/colors';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isFormValid = username.length > 0 && password.length > 5 && password === confirmPassword;

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
      style={styles.container}
    >
      <View style={styles.inner}>
        <View style={{ height: 60 }} />
        <Text style={styles.title}>Register</Text>

        <CustomInput label="Username" placeholder="Werner Ziegler" value={username} onChangeText={setUsername} />
        <CustomInput label="Password" placeholder="••••••••••••" value={password} onChangeText={setPassword} secureTextEntry={true} />
        <CustomInput label="Confirm Password" placeholder="••••••••••••" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={true} />

        <CustomButton title="Register" disabled={!isFormValid} onPress={() => {}} />

        <View style={styles.dividerContainer}>
            <View style={styles.line} /><Text style={styles.orText}>or</Text><View style={styles.line} />
        </View>

        <SocialButton title="Register with Google" />
        <SocialButton title="Register with Apple" />

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? <Text style={styles.link}>Login</Text></Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  inner: { flex: 1, paddingHorizontal: 25, justifyContent: 'center' },
  title: { color: Colors.textMain, fontSize: 32, fontWeight: 'bold', marginBottom: 25 },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  line: { flex: 1, height: 1, backgroundColor: Colors.inputBorder },
  orText: { color: Colors.textSecondary, marginHorizontal: 10, fontSize: 12 },
  footer: { marginTop: 20, alignItems: 'center' },
  footerText: { color: Colors.textSecondary, fontSize: 13 },
  link: { color: Colors.textMain, fontWeight: 'bold' }
});

export default RegisterScreen;