import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { colors } from '../theme/colors';

export default function Header() {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
      <View style={styles.inner}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>{t.appTitle}</Text>
          <Text style={styles.subtitle}>{t.appSubtitle}</Text>
        </View>
        <LanguageToggle />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleSection: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.white,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 12,
    color: colors.accent,
    fontWeight: '500',
    marginTop: 1,
  },
});
