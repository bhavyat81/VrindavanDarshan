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

  const getTimingPreview = () => {
    if (temple.timings?.summer?.morning) return temple.timings.summer.morning;
    if (temple.timings?.morning) return temple.timings.morning;
    return '';
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.header}>
        <View style={[styles.badge, { backgroundColor: badgeColor }]}>
          <Text style={styles.badgeText}>{categoryLabel}</Text>
        </View>
        <Text style={{fontSize: 16, color: colors.textMuted}}>›</Text>
      </View>
      <Text style={styles.name}>{temple.name[language]}</Text>
      {temple.deity && (
        <Text style={styles.deity}>{temple.deity[language]}</Text>
      )}
      <Text style={styles.story} numberOfLines={2}>
        {temple.story[language]}
      </Text>
      {getTimingPreview() ? (
        <View style={styles.timingRow}>
          <Text style={{fontSize: 12}}>🕐</Text>
          <Text style={styles.timingText}>{getTimingPreview()}</Text>
        </View>
      ) : null}
      {temple.location && (
        <View style={styles.locationRow}>
          <Text style={{fontSize: 12}}>📍</Text>
          <Text style={styles.locationText} numberOfLines={1}>{temple.location[language]}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 14,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  badgeText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '700',
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
    lineHeight: 19,
    marginBottom: 8,
  },
  timingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 3,
  },
  timingText: {
    fontSize: 12,
    color: colors.textMuted,
    marginLeft: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 12,
    color: colors.textMuted,
    marginLeft: 4,
    flex: 1,
  },
});
