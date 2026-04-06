import React, { useState, useMemo } from 'react';
import {
  View, Text, FlatList, TextInput, StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
        <Text style={styles.headerTitle}>{t.temples_title}</Text>
        <View style={styles.searchRow}>
          <Ionicons name="search" size={16} color={colors.textMuted} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder={t.temples_searchPlaceholder}
            placeholderTextColor={colors.textMuted}
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>
      <CategoryFilter selected={category} onSelect={setCategory} />
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
    paddingBottom: 14,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.white,
    marginBottom: 10,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
  },
  list: {
    paddingVertical: 10,
    paddingBottom: 20,
  },
  empty: {
    alignItems: 'center',
    marginTop: 60,
  },
  emptyText: {
    fontSize: 16,
    color: colors.textMuted,
  },
});
