import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { colors } from '../theme/colors';

import HomeScreen from '../screens/HomeScreen';
import TemplesScreen from '../screens/TemplesScreen';
import TempleDetailScreen from '../screens/TempleDetailScreen';
import LeelaSthalsScreen from '../screens/LeelaSthalsScreen';
import VisitorInfoScreen from '../screens/VisitorInfoScreen';
import AboutScreen from '../screens/AboutScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TemplesStack() {
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
          title: route.params?.templeName || 'Temple Details',
          headerBackTitle: 'Back',
        })}
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
            let iconName;
            if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'Mandirs') iconName = focused ? 'business' : 'business-outline';
            else if (route.name === 'LeelaSthals') iconName = focused ? 'leaf' : 'leaf-outline';
            else if (route.name === 'Info') iconName = focused ? 'information-circle' : 'information-circle-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
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
          component={HomeScreen}
          options={{ title: t.navHome, headerShown: false }}
        />
        <Tab.Screen
          name="Mandirs"
          component={TemplesStack}
          options={{ title: t.navMandirs, headerShown: false }}
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
          component={VisitorInfoScreen}
          options={{
            title: t.navInfo,
            headerTitle: t.visitor_title,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
