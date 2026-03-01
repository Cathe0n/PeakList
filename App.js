import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar,
  ScrollView,
  Platform
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// --- THEME ---
const Colors = {
  background: '#121212',
  inputBg: '#1E1E1E',
  inputBorder: '#333',
  textMain: '#FFFFFF',
  textSecondary: '#A0A0A0',
  primaryDisabled: '#3F3D56',
  primaryActive: '#7B61FF',
};

// --- COMPONENTS ---

const CustomInput = ({ label, value, onChangeText, placeholder, isPassword }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput
      style={styles.inputField}
      placeholder={placeholder}
      placeholderTextColor={Colors.textSecondary}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={isPassword ? true : false} // Strict Boolean conversion
      autoCapitalize="none"
    />
  </View>
);

const SocialButton = ({ title }) => (
  <TouchableOpacity style={styles.socialBtn}>
    <Text style={styles.socialBtnText}>{title}</Text>
  </TouchableOpacity>
);

// --- SCREENS ---

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const canLogin = username.length > 0 && password.length > 5;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.spacer} />
        <Text style={styles.title}>Login</Text>

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
          isPassword={true}
        />

        <TouchableOpacity 
          style={[styles.mainBtn, { backgroundColor: canLogin ? Colors.primaryActive : Colors.primaryDisabled }]}
          disabled={!canLogin}
        >
          <Text style={styles.mainBtnText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.dividerRow}>
          <View style={styles.line} /><Text style={styles.orText}>or</Text><View style={styles.line} />
        </View>

        <SocialButton title="Login with Google" />
        <SocialButton title="Login with Apple" />

        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? <Text style={styles.link}>Register</Text></Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const RegisterScreen = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');

  const canRegister = user.length > 0 && pass.length > 5 && pass === confirm;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={{ height: 40 }} />
        <Text style={styles.title}>Register</Text>

        <CustomInput label="Username" placeholder="Werner Ziegler" value={user} onChangeText={setUser} />
        <CustomInput label="Password" placeholder="••••••••••••" value={pass} onChangeText={setPass} isPassword={true} />
        <CustomInput label="Confirm Password" placeholder="••••••••••••" value={confirm} onChangeText={setConfirm} isPassword={true} />

        <TouchableOpacity 
          style={[styles.mainBtn, { backgroundColor: canRegister ? Colors.primaryActive : Colors.primaryDisabled }]}
          disabled={!canRegister}
        >
          <Text style={styles.mainBtnText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.dividerRow}>
          <View style={styles.line} /><Text style={styles.orText}>or</Text><View style={styles.line} />
        </View>

        <SocialButton title="Register with Google" />
        <SocialButton title="Register with Apple" />

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? <Text style={styles.link}>Login</Text></Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// --- NAVIGATION ---

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// --- STYLES ---

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scrollContent: { paddingHorizontal: 25, paddingBottom: 40 },
  spacer: { height: 100 },
  title: { color: Colors.textMain, fontSize: 32, fontWeight: 'bold', marginBottom: 30 },
  
  inputContainer: { marginBottom: 20 },
  inputLabel: { color: Colors.textSecondary, fontSize: 12, marginBottom: 8 },
  inputField: { 
    backgroundColor: Colors.inputBg, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: Colors.inputBorder, 
    padding: 15, 
    color: Colors.textMain 
  },

  mainBtn: { height: 55, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  mainBtnText: { color: Colors.textMain, fontWeight: 'bold', fontSize: 16 },

  dividerRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 30 },
  line: { flex: 1, height: 1, backgroundColor: Colors.inputBorder },
  orText: { color: Colors.textSecondary, marginHorizontal: 15, fontSize: 12 },

  socialBtn: { 
    height: 55, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: Colors.inputBorder, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 12 
  },
  socialBtnText: { color: Colors.textMain, fontSize: 14 },

  footer: { marginTop: 20, alignItems: 'center' },
  footerText: { color: Colors.textSecondary, fontSize: 13 },
  link: { color: Colors.textMain, fontWeight: 'bold' }
});