import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { colors } from '../theme/colors';

const CATEGORY_COLORS = {
  prachin: colors.prachinBadge,
  historical: colors.historicalBadge,
  modern: colors.modernBadge,
  leela: colors.leelaBadge,
  special: colors.leelaBadge,
};

const CATEGORY_EMOJIS = {
  prachin: '🏛',
  historical: '📜',
  modern: '🏗',
  special: '✨',
  leela: '🍃',
};

const CATEGORY_LABELS = {
  hi: {
    prachin: 'प्राचीन',
    historical: 'ऐतिहासिक',
    modern: 'आधुनिक',
    leela: 'लीला स्थल',
    special: 'विशेष',
  },
  en: {
    prachin: 'Prachin',
    historical: 'Historical',
    modern: 'Modern',
    leela: 'Leela Sthal',
    special: 'Special',
  },
};

export default function TempleCard({ temple, onPress }) {
  const { language } = useLanguage();
  const badgeColor = CATEGORY_COLORS[temple.category] || colors.primary;
  const categoryLabel = CATEGORY_LABELS[language][temple.category] || temple.category;
  const categoryEmoji = CATEGORY_EMOJIS[temple.category] || '🛕';

  const getTimingPreview = () => {
    if (temple.timings?.summer?.morning) return temple.timings.summer.morning;
    if (temple.timings?.morning) return temple.timings.morning;
    return '';
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      {/* Colored top banner strip */}
      <View style={[styles.cardBanner, { backgroundColor: badgeColor }]}>
        <Text style={styles.bannerEmoji}>{categoryEmoji}</Text>
        <View style={[styles.badge]}>
          <Text style={styles.badgeText}>{categoryLabel}</Text>
        </View>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.name}>{temple.name[language]}</Text>
        {temple.deity && (
          <Text style={styles.deity}>{temple.deity[language]}</Text>
        )}
        <Text style={styles.story} numberOfLines={2}>
          {temple.story[language]}
        </Text>
        <View style={styles.footerRow}>
          <View style={styles.metaRow}>
            {getTimingPreview() ? (
              <View style={styles.infoChip}>
                <Text style={styles.infoChipText}>🕐 {getTimingPreview()}</Text>
              </View>
            ) : null}
            {temple.location && (
              <View style={styles.infoChip}>
                <Text style={styles.infoChipText} numberOfLines={1}>📍 {temple.location[language]}</Text>
              </View>
            )}
          </View>
          <Text style={[styles.viewDetails, { color: badgeColor }]}>
            {language === 'hi' ? 'विवरण देखें →' : 'View Details →'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  cardBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    gap: 8,
  },
  bannerEmoji: {
    fontSize: 20,
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  badgeText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '700',
  },
  cardBody: {
    padding: 14,
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.secondary,
    marginBottom: 3,
  },
  deity: {
    fontSize: 13,
    color: colors.accent,
    fontWeight: '600',
    marginBottom: 6,
  },
  story: {
    fontSize: 13,
    color: colors.textLight,
    lineHeight: 20,
    marginBottom: 10,
  },
  footerRow: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  metaRow: {
    flex: 1,
    gap: 4,
  },
  infoChip: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  infoChipText: {
    fontSize: 11,
    color: colors.textMuted,
  },
  viewDetails: {
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 8,
  },
});