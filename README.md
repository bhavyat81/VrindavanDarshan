# वृन्दावन दर्शन — Vrindavan Darshan

A devotional React Native app for exploring the sacred temples, leela sthals, and pilgrimage information of Vrindavan Dham. Built with plain React Native CLI — no Expo.

## Features

- 🕌 **Mandirs** — Browse 15+ temples of Vrindavan with category filters (Prachin, Historical, Modern, Special)
- 🌿 **Leela Sthals** — Sacred places associated with Bhagwan Shri Krishna's divine pastimes
- ℹ️ **Visitor Info** — How to reach, best time to visit, festivals, do's & don'ts, travel tips
- 🌐 **Bilingual** — Full Hindi and English support with persistent language preference (AsyncStorage)

## Tech Stack

- **React Native 0.84.1** (plain CLI — no Expo)
- **React Navigation v7** (bottom tabs + native stack)
- **react-native-linear-gradient** for UI gradients
- **react-native-vector-icons** (Ionicons)
- **@react-native-async-storage/async-storage** for language persistence
- **react-native-safe-area-context** & **react-native-screens**

## Prerequisites

- **Node.js 18+**
- **Xcode 15+** (macOS — for iOS build)
- **CocoaPods** — `sudo gem install cocoapods`
- **Ruby 3.3+** (recommended via rbenv or rvm)
- **Android Studio** (for Android build)

## Setup

```bash
cd VrindavanDarshan
npm install
```

## Generating Native Projects (first time only)

If the `ios/` and `android/` folders are not present, generate them:

```bash
cd ~
npx @react-native-community/cli init VrindavanDarshan --directory TempVD --skip-install
cp -r ~/TempVD/ios ~/VrindavanDarshan/ios
cp -r ~/TempVD/android ~/VrindavanDarshan/android
rm -rf ~/TempVD
```

> **Note:** `--skip-install` prevents `npm install` from running inside TempVD. Dependencies should be installed from `~/VrindavanDarshan` so that all native tool paths (hermesc, node, etc.) resolve relative to the correct project root.

Then set up the iOS build environment and install pods:

```bash
cd ~/VrindavanDarshan
echo 'export NODE_BINARY=$(command -v node)' > ios/.xcode.env.local
cd ios
pod install
cd ..
```

> **Important:** Always run `pod install` from `~/VrindavanDarshan/ios/`, never from TempVD. Running it from TempVD bakes in wrong absolute paths that cause `PhaseScriptExecution` build failures.

## Running on iOS

```bash
npx react-native run-ios
```

Or open `ios/VrindavanDarshan.xcworkspace` in Xcode, select your iPhone as the target device, and click ▶️ **Run**.

> **First-time setup:** In Xcode → select the project → **Signing & Capabilities** → check **Automatically manage signing** → select your Apple ID under **Team**.

## Running on Android

```bash
npx react-native run-android
```

## Starting Metro Bundler

```bash
npm start
```

## Building for App Store / Google Play

### iOS (App Store)
1. Open `ios/VrindavanDarshan.xcworkspace` in Xcode
2. Select **Any iOS Device (arm64)** as the target
3. Product → **Archive**
4. Upload via Xcode Organizer or Transporter

### Android (Google Play)
```bash
cd android
./gradlew bundleRelease
```
The AAB will be at `android/app/build/outputs/bundle/release/app-release.aab`.

## Project Structure

```
├── index.js                      # AppRegistry entry point
├── App.js                        # Root component
├── app.json                      # App name config
├── babel.config.js               # @react-native/babel-preset
├── metro.config.js               # Metro bundler config
├── Gemfile                       # CocoaPods Ruby gem
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

