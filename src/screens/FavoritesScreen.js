import React from 'react';
import {
  View, Text, FlatList, TouchableOpacity, StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLanguage } from '../context/LanguageContext';
import { useFavorites } from '../context/FavoritesContext';
import { temples } from '../data/temples';
import { colors } from '../theme/colors';
import TempleCard from '../components/TempleCard';

export default function FavoritesScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();
  const { favorites } = useFavorites();

  const favoriteTemples = temples.filter((t) => favorites.includes(t.id));

  const handlePress = (temple) => {
    navigation.navigate('FavoriteDetail', {
      templeId: temple.id,
      templeName: temple.name[language],
    });
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerEmoji}>♥</Text>
        <Text style={styles.headerTitle}>
          {language === 'hi' ? 'पसंदीदा मंदिर' : 'Favourite Temples'}
        </Text>
      </View>

      {favoriteTemples.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>🛕</Text>
          <Text style={styles.emptyTitle}>
            {language === 'hi' ? 'कोई पसंदीदा नहीं' : 'No Favourites Yet'}
          </Text>
          <Text style={styles.emptySubtitle}>
            {language === 'hi'
              ? 'मंदिर की जानकारी देखते समय ♡ बटन दबाकर पसंदीदा में जोड़ें।'
              : 'Tap the ♡ button on any temple to add it to your favourites.'}
          </Text>
        </View>
      ) : (
        <FlatList
          data={favoriteTemples}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TempleCard temple={item} onPress={() => handlePress(item)} />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
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
    paddingHorizontal: 20,
    paddingVertical: 18,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerEmoji: {
    fontSize: 24,
    color: '#FF6B6B',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.white,
    letterSpacing: 0.5,
  },
  list: {
    paddingTop: 12,
    paddingBottom: 24,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.secondary,
    marginBottom: 10,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 14,
    color: colors.textLight,
    textAlign: 'center',
    lineHeight: 22,
  },
});
