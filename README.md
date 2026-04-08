# वृन्दावन दर्शन — Vrindavan Darshan

A devotional React Native app for exploring the sacred temples, leela sthals, and pilgrimage information of Vrindavan Dham. Built with Expo.

## Features

- 🕌 **Mandirs** — Browse 15+ temples of Vrindavan with category filters (Prachin, Historical, Modern, Special)
- 🌿 **Leela Sthals** — Sacred places associated with Bhagwan Shri Krishna's divine leelas
- ℹ️ **Visitor Info** — How to reach, best time to visit, festivals, do's & don'ts, travel tips
- 🌐 **Bilingual** — Full Hindi and English support with persistent language preference (AsyncStorage)

## Tech Stack

- **Expo SDK 54** (React Native)
- **React Navigation v7** (bottom tabs + native stack)
- **expo-linear-gradient** for UI gradients
- **@react-native-async-storage/async-storage** for language persistence
- **react-native-safe-area-context** & **react-native-screens**

## Prerequisites

- **Node.js 18+**
- **Expo Go** app installed on your iPhone (available on the App Store)

## Setup

```bash
npm install
npx expo start
```

Scan the QR code with your iPhone camera to open the app in Expo Go.

## Project Structure

```
├── index.js                      # AppRegistry entry point
├── App.js                        # Root component
├── app.json                      # Expo app config
├── babel.config.js               # Babel config
├── metro.config.js               # Metro bundler config
└── src/
    ├── context/
    │   └── LanguageContext.js    # Language state (hi/en) + AsyncStorage
    ├── data/
    │   ├── temples.js            # 15+ temple records (bilingual)
    │   ├── leelaSthals.js        # Leela Sthal data (bilingual)
    │   └── visitorInfo.js        # Visitor information (bilingual)
    ├── i18n/
    │   └── translations.js       # UI strings (Hindi + English)
    ├── navigation/
    │   └── AppNavigator.js       # Tab + Stack navigation
    ├── screens/
    │   ├── HomeScreen.js
    │   ├── TemplesScreen.js
    │   ├── TempleDetailScreen.js
    │   ├── LeelaSthalsScreen.js
    │   ├── VisitorInfoScreen.js
    │   └── AboutScreen.js
    ├── components/
    │   ├── Header.js
    │   ├── TempleCard.js
    │   ├── CategoryFilter.js
    │   ├── TimingCard.js
    │   └── LanguageToggle.js
    └── theme/
        ├── colors.js             # Saffron / Maroon / Gold palette
        └── fonts.js
```

## 🙏 Dedication

This app is dedicated in devotion to Shri Radha-Krishna.
All temple stories and information are drawn from authentic scriptural and traditional sources, presented with deep reverence.

**जय श्री राधे।**

