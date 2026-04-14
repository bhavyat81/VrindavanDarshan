import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { colors } from '../theme/colors';

import HomeScreen from '../screens/HomeScreen';
import TemplesScreen from '../screens/TemplesScreen';
import TempleDetailScreen from '../screens/TempleDetailScreen';
import LeelaSthalsScreen from '../screens/LeelaSthalsScreen';
import VisitorInfoScreen from '../screens/VisitorInfoScreen';
import AboutScreen from '../screens/AboutScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ParikramaScreen from '../screens/ParikramaScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.secondary },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Parikrama"
        component={ParikramaScreen}
        options={{ title: t.parikrama_title, headerShown: false }}
      />
      <Stack.Screen
        name="ParikramaTempleDetail"
        component={TempleDetailScreen}
        options={({ route }) => ({
          title: route.params?.templeName || t.temples_title,
          headerBackTitle: t.navParikrama,
        })}
      />
    </Stack.Navigator>
  );
}

function TemplesStack() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.secondary },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen
        name="TemplesList"
        component={TemplesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TempleDetail"
        component={TempleDetailScreen}
        options={({ route }) => ({
          title: route.params?.templeName || t.temples_title,
          headerBackTitle: t.navMandirs,
        })}
      />
    </Stack.Navigator>
  );
}

function FavoritesStack() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.secondary },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen
        name="FavoritesList"
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FavoriteDetail"
        component={TempleDetailScreen}
        options={({ route }) => ({
          title: route.params?.templeName || t.favorites_title,
          headerBackTitle: t.navFavorites,
        })}
      />
    </Stack.Navigator>
  );
}

function InfoStack() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.secondary },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen
        name="VisitorInfo"
        component={VisitorInfoScreen}
        options={{ title: t.visitor_title }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: t.about_title }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let emoji;
            if (route.name === 'Home') emoji = '🏠';
            else if (route.name === 'Mandirs') emoji = '🛕';
            else if (route.name === 'Favorites') emoji = '♥';
            else if (route.name === 'LeelaSthals') emoji = '🍃';
            else if (route.name === 'Info') emoji = 'ℹ️';
            return <Text style={{ fontSize: 22 }}>{emoji}</Text>;
          },
          tabBarActiveTintColor: colors.secondary,
          tabBarInactiveTintColor: colors.tabBarInactive,
          tabBarStyle: {
            backgroundColor: colors.white,
            borderTopColor: colors.border,
            borderTopWidth: 1,
            paddingBottom: 4,
            height: 60,
          },
          tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
          headerStyle: { backgroundColor: colors.secondary },
          headerTintColor: colors.white,
          headerTitleStyle: { fontWeight: '700' },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ title: t.navHome, headerShown: false }}
        />
        <Tab.Screen
          name="Mandirs"
          component={TemplesStack}
          options={{ title: t.navMandirs, headerShown: false }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesStack}
          options={{ title: t.navFavorites, headerShown: false }}
        />
        <Tab.Screen
          name="LeelaSthals"
          component={LeelaSthalsScreen}
          options={{
            title: t.navLeelaSthals,
            headerTitle: t.leela_title,
          }}
        />
        <Tab.Screen
          name="Info"
          component={InfoStack}
          options={{
            title: t.navInfo,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}