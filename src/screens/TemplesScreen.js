import React, { useState, useMemo } from 'react';
import {
  View, Text, FlatList, TextInput, StyleSheet,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { temples } from '../data/temples';
import { colors } from '../theme/colors';
import TempleCard from '../components/TempleCard';
import CategoryFilter from '../components/CategoryFilter';

export default function TemplesScreen({ navigation }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const filtered = useMemo(() => {
    return temples.filter((temple) => {
      const matchesCategory = category === 'all' || temple.category === category;
      const searchLower = search.toLowerCase();
      const matchesSearch = search === '' ||
        temple.name[language].toLowerCase().includes(searchLower) ||
        temple.name[language === 'hi' ? 'en' : 'hi'].toLowerCase().includes(searchLower);
      return matchesCategory && matchesSearch;
    });
  }, [temples, category, search, language]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerOrnament}>
            <Text style={styles.headerOrnamentText}>🛕</Text>
          </View>
          <Text style={styles.headerTitle}>{t.temples_title}</Text>
          <View style={styles.headerOrnament}>
            <Text style={styles.headerOrnamentText}>🛕</Text>
          </View>
        </View>
        <View style={styles.headerDivider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerStar}>✦</Text>
          <View style={styles.dividerLine} />
        </View>
        <View style={styles.searchRow}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder={t.temples_searchPlaceholder}
            placeholderTextColor={colors.textMuted}
            value={search}
            onChangeText={setSearch}
          />
          {search.length > 0 && (
            <Text
              style={styles.searchClear}
              onPress={() => setSearch('')}
            >✕</Text>
          )}
        </View>
      </View>
      <CategoryFilter selected={category} onSelect={setCategory} />
      {/* Results count */}
      <View style={styles.resultsRow}>
        <Text style={styles.resultsText}>
          {language === 'hi'
            ? `${filtered.length} मंदिर मिले`
            : `${filtered.length} temple${filtered.length !== 1 ? 's' : ''} found`}
        </Text>
      </View>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TempleCard
            temple={item}
            onPress={() =>
              navigation.navigate('TempleDetail', {
                templeId: item.id,
                templeName: item.name[language],
              })
            }
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyEmoji}>🔍</Text>
            <Text style={styles.emptyText}>
              {language === 'hi' ? 'कोई मंदिर नहीं मिला' : 'No temples found'}
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    gap: 10,
  },
  headerOrnament: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(218,165,32,0.2)',
    borderWidth: 1,
    borderColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerOrnamentText: {
    fontSize: 18,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.white,
    letterSpacing: 0.5,
  },
  headerDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
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
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 44,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
  },
  searchClear: {
    fontSize: 14,
    color: colors.textMuted,
    paddingLeft: 8,
  },
  resultsRow: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.surfaceElevated,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  resultsText: {
    fontSize: 12,
    color: colors.textMuted,
    fontStyle: 'italic',
  },
  list: {
    paddingVertical: 10,
    paddingBottom: 20,
  },
  empty: {
    alignItems: 'center',
    marginTop: 60,
  },
  emptyEmoji: {
    fontSize: 36,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 16,
    color: colors.textMuted,
  },
});
