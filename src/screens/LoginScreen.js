import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialButton from '../components/SocialButton';
import { Colors } from '../theme/colors';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = username.length > 0 && password.length > 5;

  return (
    // On Android, we often don't need 'behavior'. Setting it to undefined prevents the crash.
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
      style={styles.container}
    >
      <View style={styles.inner}>
        <View style={styles.imagePlaceholder} />

        <View style={styles.header}>
            <Text style={styles.title}>Login</Text>
        </View>

        <CustomInput 
          label="Username" 
          placeholder="Enter your Username" 
          value={username} 
          onChangeText={setUsername} 
        />
        <CustomInput 
          label="Password" 
          placeholder="••••••••••••" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry={true} // Passing explicit true
        />

        <CustomButton 
            title="Login" 
            disabled={!isFormValid} 
            onPress={() => console.log('Login logic here')} 
        />

        <View style={styles.dividerContainer}>
            <View style={styles.line} /><Text style={styles.orText}>or</Text><View style={styles.line} />
        </View>

        <SocialButton title="Login with Google" />
        <SocialButton title="Login with Apple" />

        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.footer}>
            <Text style={styles.footerText}>
                Don't have an account? <Text style={styles.link}>Register</Text>
            </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  inner: { flex: 1, paddingHorizontal: 25, justifyContent: 'center' },
  imagePlaceholder: { height: 100, width: '100%' },
  header: { marginBottom: 30 },
  title: { color: Colors.textMain, fontSize: 32, fontWeight: 'bold' },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 25 },
  line: { flex: 1, height: 1, backgroundColor: Colors.inputBorder },
  orText: { color: Colors.textSecondary, marginHorizontal: 10, fontSize: 12 },
  footer: { marginTop: 20, alignItems: 'center' },
  footerText: { color: Colors.textSecondary, fontSize: 13 },
  link: { color: Colors.textMain, fontWeight: 'bold' }
});

export default LoginScreen;