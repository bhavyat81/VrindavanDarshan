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
      {/* Grand Hero Section */}
      <View style={styles.heroSection}>
        {/* Top dark overlay strip */}
        <View style={styles.heroTopStrip} />
        <View style={styles.omContainer}>
          <View style={styles.omRing}>
            <Text style={styles.omSymbol}>🕉</Text>
          </View>
        </View>
        <View style={styles.heroDivider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerStar}>✦</Text>
          <View style={styles.dividerLine} />
        </View>
        <Text style={styles.appName}>{t.appTitle}</Text>
        <Text style={styles.appSubtitle}>{t.appSubtitle}</Text>
        <View style={styles.heroDivider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerStar}>✦</Text>
          <View style={styles.dividerLine} />
        </View>
        {/* Version badge */}
        <View style={styles.versionBadge}>
          <Text style={styles.versionBadgeText}>v 1.0.2</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t.about_title}</Text>
        <View style={styles.sectionDivider} />
        <Text style={styles.sectionText}>{t.about_description}</Text>
      </View>

      <View style={[styles.section, styles.disclaimerSection]}>
        <Text style={styles.disclaimerTitle}>
          {language === 'hi' ? '⚠️ अस्वीकरण' : '⚠️ Disclaimer'}
        </Text>
        <View style={styles.sectionDivider} />
        <Text style={styles.disclaimerText}>{t.about_disclaimer}</Text>
      </View>

      <View style={styles.devotionalNote}>
        <View style={styles.devotionalInner}>
          <Text style={styles.devotionalEmoji}>🙏</Text>
          <Text style={styles.devotionalText}>
            {language === 'hi'
              ? 'यह ऐप श्री राधा-कृष्ण की भक्ति में समर्पित है।\nसर्वे भवन्तु सुखिनः।'
              : 'This app is dedicated in devotion to Shri Radha-Krishna.\nMay all beings be happy.'}
          </Text>
        </View>
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
    paddingVertical: 36,
    paddingHorizontal: 20,
    position: 'relative',
  },
  heroTopStrip: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: colors.headerGradientTop,
    opacity: 0.5,
  },
  omContainer: {
    marginBottom: 12,
  },
  omRing: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(218,165,32,0.18)',
    borderWidth: 2,
    borderColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  omSymbol: {
    fontSize: 42,
  },
  heroDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(218,165,32,0.4)',
  },
  dividerStar: {
    color: colors.accent,
    fontSize: 12,
    marginHorizontal: 8,
  },
  appName: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 6,
    letterSpacing: 1,
  },
  appSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  versionBadge: {
    backgroundColor: colors.accent,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 14,
    marginTop: 4,
  },
  versionBadgeText: {
    color: colors.secondary,
    fontWeight: '800',
    fontSize: 13,
  },
  section: {
    backgroundColor: colors.surfaceElevated,
    margin: 16,
    marginBottom: 8,
    padding: 18,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: colors.secondary,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.secondary,
  },
  sectionText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 23,
  },
  disclaimerSection: {
    borderLeftColor: colors.accent,
    backgroundColor: '#FFFBEF',
  },
  disclaimerTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.secondary,
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
    marginBottom: 36,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.decorativeBorder,
    overflow: 'hidden',
  },
  devotionalInner: {
    backgroundColor: '#FFF8E7',
    padding: 20,
    alignItems: 'center',
  },
  devotionalEmoji: {
    fontSize: 30,
    marginBottom: 10,
  },
  devotionalText: {
    fontSize: 14,
    color: colors.secondary,
    textAlign: 'center',
    lineHeight: 26,
    fontWeight: '600',
  },
});
