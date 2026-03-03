import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// bring in the screens from src/screens
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';

// copy theme object here so the rest of App.js (styles) can still refer to it
const Colors = {
  background: '#121212',
  inputBg: '#1E1E1E',
  inputBorder: '#333',
  textMain: '#FFFFFF',
  textSecondary: '#A0A0A0',
  primaryDisabled: '#3F3D56',
  primaryActive: '#7B61FF',
};

// --- NAVIGATION ---

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* show onboarding first */}
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
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