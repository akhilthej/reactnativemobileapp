import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import MobileTabNavigator from './App/Navbar/NavMobile'

import Onboarding from './App/shared/components/screens/(auth)/Onboarding'

export default function App() {
  return (
    <Onboarding>
     <View style={{ flex: 1, backgroundColor: 'white' }}>
    <NavigationContainer>
    <StatusBar style="auto" />
        <MobileTabNavigator />

      </NavigationContainer>
      </View>
      
      </Onboarding>

  );
}
