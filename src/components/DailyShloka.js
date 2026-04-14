import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { shlokas } from '../data/shlokas';
import { colors } from '../theme/colors';

export default function DailyShloka() {
  const { language } = useLanguage();
  const dayIndex = new Date().getDate() % shlokas.length;
  const shloka = shlokas[dayIndex];

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerEmoji}>📿</Text>
        <Text style={styles.headerTitle}>
          {language === 'hi' ? 'आज का श्लोक' : "Today's Shloka"}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.shlokaText}>{shloka.shloka}</Text>
        <View style={styles.divider} />
        <Text style={styles.meaningText}>{shloka.meaning[language]}</Text>
        <View style={styles.sourceRow}>
          <Text style={styles.sourceLabel}>
            {language === 'hi' ? '— ' : '— '}
          </Text>
          <Text style={styles.sourceText}>{shloka.source}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 6,
  },
  headerEmoji: {
    fontSize: 20,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.secondary,
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: colors.secondary,
    borderRadius: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1.5,
    borderColor: colors.accent,
  },
  shlokaText: {
    fontSize: 15,
    color: colors.accent,
    fontWeight: '700',
    lineHeight: 26,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(218,165,32,0.35)',
    marginVertical: 12,
  },
  meaningText: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 22,
    textAlign: 'center',
  },
  sourceRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  sourceLabel: {
    fontSize: 12,
    color: colors.accent,
    fontStyle: 'italic',
  },
  sourceText: {
    fontSize: 12,
    color: colors.accent,
    fontStyle: 'italic',
    fontWeight: '600',
  },
});
