import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { colors } from '../theme/colors';

export default function AboutScreen() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.heroSection}>
        <Text style={styles.omSymbol}>🕉</Text>
        <Text style={styles.appName}>{t.appTitle}</Text>
        <Text style={styles.version}>{t.about_version}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t.about_title}</Text>
        <Text style={styles.sectionText}>{t.about_description}</Text>
      </View>
      <View style={[styles.section, styles.disclaimerSection]}>
        <Text style={styles.disclaimerTitle}>
          {language === 'hi' ? '⚠️ अस्वीकरण' : '⚠️ Disclaimer'}
        </Text>
        <Text style={styles.disclaimerText}>{t.about_disclaimer}</Text>
      </View>
      <View style={styles.devotionalNote}>
        <Text style={styles.devotionalText}>
          {language === 'hi'
            ? '🙏 यह ऐप श्री राधा-कृष्ण की भक्ति में समर्पित है।\nसर्वे भवन्तु सुखिनः।'
            : '🙏 This app is dedicated in devotion to Shri Radha-Krishna.\nMay all beings be happy.'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: colors.background,
  },
  heroSection: {
    backgroundColor: colors.secondary,
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  omSymbol: {
    fontSize: 48,
    marginBottom: 12,
  },
  appName: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 6,
  },
  version: {
    fontSize: 14,
    color: colors.accent,
    fontWeight: '500',
  },
  section: {
    backgroundColor: colors.white,
    margin: 16,
    marginBottom: 8,
    padding: 18,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.secondary,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 23,
  },
  disclaimerSection: {
    borderLeftWidth: 4,
    borderLeftColor: colors.accent,
    backgroundColor: '#FFF8E7',
  },
  disclaimerTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.secondary,
    marginBottom: 8,
  },
  disclaimerText: {
    fontSize: 13,
    color: colors.textLight,
    lineHeight: 21,
    fontStyle: 'italic',
  },
  devotionalNote: {
    margin: 16,
    marginTop: 8,
    marginBottom: 30,
    backgroundColor: '#FFF3E0',
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.accent,
  },
  devotionalText: {
    fontSize: 14,
    color: colors.secondary,
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '500',
  },
});
