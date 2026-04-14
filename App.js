import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import {LanguageProvider} from './src/context/LanguageContext';
import {FavoritesProvider} from './src/context/FavoritesContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <FavoritesProvider>
          <StatusBar barStyle="light-content" backgroundColor="#8B1A1A" />
          <AppNavigator />
        </FavoritesProvider>
      </LanguageProvider>
    </SafeAreaProvider>
  );
}
