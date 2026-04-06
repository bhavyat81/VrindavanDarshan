import React from 'react';
import {
  View, Text, ScrollView, StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { temples } from '../data/temples';
import { colors } from '../theme/colors';
import TimingCard from '../components/TimingCard';

const CATEGORY_COLORS = {
  prachin: colors.prachinBadge,
  historical: colors.historicalBadge,
  modern: colors.modernBadge,
  leela: colors.leelaBadge,
  special: colors.leelaBadge,
};

const CATEGORY_LABELS = {
  hi: { prachin: 'प्राचीन', historical: 'ऐतिहासिक', modern: 'आधुनिक', leela: 'लीला स्थल', special: 'विशेष' },
  en: { prachin: 'Prachin', historical: 'Historical', modern: 'Modern', leela: 'Leela Sthal', special: 'Special' },
};

export default function TempleDetailScreen({ route }) {
  const { templeId } = route.params;
  const { language } = useLanguage();
  const t = translations[language];
  const temple = temples.find((item) => item.id === templeId);

  if (!temple) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Temple not found</Text>
      </View>
    );
  }

  const badgeColor = CATEGORY_COLORS[temple.category] || colors.primary;
  const categoryLabel = CATEGORY_LABELS[language][temple.category];

  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      {/* Title Section */}
      <View style={styles.titleSection}>
        <View style={[styles.badge, { backgroundColor: badgeColor }]}>
          <Text style={styles.badgeText}>{categoryLabel}</Text>
        </View>
        <Text style={styles.templeName}>{temple.name[language]}</Text>
        {temple.deity && (
          <Text style={styles.deityName}>{temple.deity[language]}</Text>
        )}
        {temple.location && (
          <View style={styles.locationRow}>
            <Ionicons name="location" size={14} color={colors.accent} />
            <Text style={styles.locationText}>{temple.location[language]}</Text>
          </View>
        )}
        {/* Both languages name */}
        <Text style={styles.altName}>
          {language === 'hi' ? temple.name.en : temple.name.hi}
        </Text>
      </View>

      <View style={styles.content}>
        {/* Timings */}
        <TimingCard timings={temple.timings} />

        {/* Story */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>📖 {t.story_title}</Text>
          </View>
          <Text style={styles.storyText}>{temple.story[language]}</Text>
        </View>

        {/* Special Features */}
        {temple.special && temple.special[language] && temple.special[language].length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>✨ {t.special_title}</Text>
            </View>
            {temple.special[language].map((item, i) => (
              <View key={i} style={styles.bulletRow}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{item}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Dos & Don'ts */}
        {temple.dosDonts && (
          <View style={styles.section}>
            {temple.dosDonts.dos && (
              <>
                <View style={styles.sectionHeader}>
                  <Text style={[styles.sectionTitle, { color: '#2E7D32' }]}>✅ {t.dos_title}</Text>
                </View>
                {temple.dosDonts.dos[language].map((item, i) => (
                  <View key={i} style={styles.bulletRow}>
                    <Text style={[styles.bullet, { color: '#2E7D32' }]}>✓</Text>
                    <Text style={styles.bulletText}>{item}</Text>
                  </View>
                ))}
              </>
            )}
            {temple.dosDonts.donts && (
              <>
                <View style={[styles.sectionHeader, { marginTop: 12 }]}>
                  <Text style={[styles.sectionTitle, { color: '#C62828' }]}>⛔ {t.donts_title}</Text>
                </View>
                {temple.dosDonts.donts[language].map((item, i) => (
                  <View key={i} style={styles.bulletRow}>
                    <Text style={[styles.bullet, { color: '#C62828' }]}>✗</Text>
                    <Text style={styles.bulletText}>{item}</Text>
                  </View>
                ))}
              </>
            )}
          </View>
        )}

        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerText}>{t.timing_disclaimer}</Text>
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
  titleSection: {
    backgroundColor: colors.secondary,
    padding: 20,
    paddingBottom: 24,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 10,
  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
  },
  templeName: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.white,
    marginBottom: 4,
  },
  deityName: {
    fontSize: 15,
    color: colors.accent,
    fontWeight: '600',
    marginBottom: 8,
  },
  altName: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.65)',
    fontStyle: 'italic',
    marginTop: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.85)',
    marginLeft: 4,
  },
  content: {
    padding: 16,
  },
  section: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.secondary,
  },
  storyText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 24,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  bullet: {
    fontSize: 16,
    color: colors.primary,
    marginRight: 8,
    lineHeight: 20,
  },
  bulletText: {
    flex: 1,
    fontSize: 13,
    color: colors.text,
    lineHeight: 20,
  },
  disclaimer: {
    marginVertical: 16,
    padding: 12,
    backgroundColor: '#FFF3E0',
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
  },
  disclaimerText: {
    fontSize: 12,
    color: colors.textMuted,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundText: {
    fontSize: 16,
    color: colors.textMuted,
  },
});
