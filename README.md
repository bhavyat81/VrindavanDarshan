# वृन्दावन दर्शन — Vrindavan Darshan

A devotional React Native (Expo) app for exploring the sacred temples, leela sthals, and pilgrimage information of Vrindavan Dham.

## Features

- 🕌 **Mandirs** — Browse temples of Vrindavan with category filters (Prachin, Historical, Modern, Special)
- 🌿 **Leela Sthals** — Sacred places associated with Bhagwan Shri Krishna's divine pastimes
- ℹ️ **Visitor Info** — How to reach, best time to visit, festivals, do's & don'ts, travel tips
- 🌐 **Bilingual** — Full Hindi and English support with persistent language preference

## Tech Stack

- **React Native** with **Expo** (~50.0.14)
- **React Navigation** (bottom tabs + native stack)
- **expo-linear-gradient** for UI gradients
- **@react-native-async-storage/async-storage** for language persistence
- **@expo/vector-icons** (Ionicons)

## Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI: `npm install -g expo-cli`
- For iOS: Xcode (macOS only)
- For Android: Android Studio

### Installation

```bash
npm install
```

### Running the App

```bash
# Start Expo dev server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web
```

## Assets

Replace the placeholder files in `assets/` with actual images before building:
- `icon.png` (1024×1024)
- `splash.png` (1284×2778)
- `adaptive-icon.png` (1024×1024)
- `favicon.png` (48×48)

## Project Structure

```
├── App.js                        # Root component
├── app.json                      # Expo configuration
├── babel.config.js
├── assets/                       # App icons & splash screen
└── src/
    ├── context/
    │   └── LanguageContext.js    # Language state (hi/en)
    ├── data/
    │   ├── temples.js            # Temple data
    │   ├── leelaSthals.js        # Leela Sthal data
    │   └── visitorInfo.js        # Visitor information data
    ├── i18n/
    │   └── translations.js       # UI strings (hi + en)
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
        ├── colors.js
        └── fonts.js
```

## 🙏 Dedication

This app is dedicated in devotion to Shri Radha-Krishna.  
**जय श्री राधे।**
