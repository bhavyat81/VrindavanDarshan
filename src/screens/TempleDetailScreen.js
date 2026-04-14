import React from 'react';
import {
  View, Text, ScrollView, StyleSheet, TouchableOpacity,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { temples } from '../data/temples';
import { colors } from '../theme/colors';
import TimingCard from '../components/TimingCard';
import { useFavorites } from '../context/FavoritesContext';

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

const CATEGORY_EMOJIS = {
  prachin: '🏛',
  historical: '📜',
  modern: '🏗',
  special: '✨',
  leela: '🍃',
};

function OrnamentDivider({ color }) {
  return (
    <View style={divStyles.row}>
      <View style={[divStyles.line, { backgroundColor: color || colors.border }]} />
      <Text style={[divStyles.star, { color: color || colors.accent }]}>✦</Text>
      <View style={[divStyles.line, { backgroundColor: color || colors.border }]} />
    </View>
  );
}
const divStyles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  line: { flex: 1, height: 1 },
  star: { fontSize: 12, marginHorizontal: 8 },
});

export default function TempleDetailScreen({ route }) {
  const { templeId } = route.params;
  const { language } = useLanguage();
  const t = translations[language];
  const { isFavorite, toggleFavorite } = useFavorites();
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
  const categoryEmoji = CATEGORY_EMOJIS[temple.category] || '🛕';

  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      {/* Decorative header banner */}
      <View style={[styles.headerBanner, { backgroundColor: badgeColor }]}>
        <Text style={styles.headerBannerEmoji}>{categoryEmoji}</Text>
      </View>

      {/* Title Section */}
      <View style={styles.titleSection}>
        <View style={styles.titleTopRow}>
          <View style={[styles.badge, { backgroundColor: badgeColor }]}>
            <Text style={styles.badgeText}>{categoryLabel}</Text>
          </View>
          <TouchableOpacity
            style={styles.favBtn}
            onPress={() => toggleFavorite(temple.id)}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Text style={styles.favBtnText}>
              {isFavorite(temple.id) ? '♥' : '♡'}
            </Text>
          </TouchableOpacity>
        </View>
        <OrnamentDivider color={colors.accent} />
        <Text style={styles.templeName}>{temple.name[language]}</Text>
        {temple.deity && (
          <Text style={styles.deityName}>{temple.deity[language]}</Text>
        )}
        <OrnamentDivider color={'rgba(218,165,32,0.4)'} />
        {temple.location && (
          <View style={styles.locationRow}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.locationText}>{temple.location[language]}</Text>
          </View>
        )}
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
          <OrnamentDivider color={colors.border} />
          <Text style={styles.storyText}>{temple.story[language]}</Text>
        </View>

        {/* Special Features */}
        {temple.special && temple.special[language] && temple.special[language].length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>✨ {t.special_title}</Text>
            </View>
            <OrnamentDivider color={colors.border} />
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
                <OrnamentDivider color={'#C8E6C9'} />
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
                <View style={[styles.sectionHeader, { marginTop: 14 }]}>
                  <Text style={[styles.sectionTitle, { color: '#C62828' }]}>⛔ {t.donts_title}</Text>
                </View>
                <OrnamentDivider color={'#FFCDD2'} />
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
  headerBanner: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBannerEmoji: {
    fontSize: 30,
  },
  titleSection: {
    backgroundColor: colors.secondary,
    padding: 20,
    paddingBottom: 24,
  },
  titleTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  favBtn: {
    padding: 4,
  },
  favBtnText: {
    fontSize: 28,
    color: '#FF6B6B',
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 4,
  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
  },
  templeName: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.white,
    marginBottom: 4,
    lineHeight: 34,
  },
  deityName: {
    fontSize: 15,
    color: colors.accent,
    fontWeight: '600',
    marginBottom: 4,
  },
  altName: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.6)',
    fontStyle: 'italic',
    marginTop: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  locationText: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.85)',
  },
  content: {
    padding: 16,
  },
  section: {
    backgroundColor: colors.surfaceElevated,
    borderRadius: 14,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: colors.decorativeBorder,
  },
  sectionHeader: {
    marginBottom: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.secondary,
  },
  storyText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 26,
    paddingLeft: 4,
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
