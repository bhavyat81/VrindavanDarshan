import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { colors } from '../theme/colors';

const CATEGORIES = ['all', 'prachin', 'historical', 'modern', 'special'];

export default function CategoryFilter({ selected, onSelect }) {
  const { language } = useLanguage();
  const t = translations[language];

  const getLabel = (cat) => {
    switch (cat) {
      case 'all': return t.filter_all;
      case 'prachin': return t.filter_prachin;
      case 'historical': return t.filter_historical;
      case 'modern': return t.filter_modern;
      case 'special': return t.filter_leela;
      default: return cat;
    }
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.chip, selected === cat && styles.chipActive]}
            onPress={() => onSelect(cat)}
            activeOpacity={0.8}
          >
            <Text style={[styles.label, selected === cat && styles.labelActive]}>
              {getLabel(cat)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  container: {
    paddingHorizontal: 16,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.border,
    marginRight: 8,
  },
  chipActive: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  label: {
    fontSize: 13,
    color: colors.text,
    fontWeight: '600',
  },
  labelActive: {
    color: colors.white,
  },
});
