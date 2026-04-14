import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLanguage } from '../context/LanguageContext';
import { parikramaRoutes } from '../data/parikramaRoutes';
import { temples } from '../data/temples';
import { colors } from '../theme/colors';

export default function ParikramaScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();
  const [selectedRoute, setSelectedRoute] = useState('short');

  const route = parikramaRoutes.find((r) => r.id === selectedRoute);

  const getTemple = (id) => temples.find((t) => t.id === id);

  const handleTemplePress = (templeId) => {
    const temple = getTemple(templeId);
    if (temple) {
      navigation.navigate('ParikramaTempleDetail', {
        templeId: temple.id,
        templeName: temple.name[language],
      });
    }
  };

  return (
    <ScrollView
      style={[styles.scroll]}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
        <Text style={styles.headerEmoji}>🚶</Text>
        <Text style={styles.headerTitle}>
          {language === 'hi' ? 'वृन्दावन परिक्रमा' : 'Vrindavan Parikrama'}
        </Text>
        <Text style={styles.headerSubtitle}>
          {language === 'hi'
            ? 'पावन मंदिरों की दिव्य यात्रा'
            : 'A sacred journey through holy temples'}
        </Text>
      </View>

      {/* Route Selector */}
      <View style={styles.selectorContainer}>
        {parikramaRoutes.map((r) => (
          <TouchableOpacity
            key={r.id}
            style={[
              styles.selectorBtn,
              selectedRoute === r.id && styles.selectorBtnActive,
            ]}
            onPress={() => setSelectedRoute(r.id)}
            activeOpacity={0.85}
          >
            <Text
              style={[
                styles.selectorBtnText,
                selectedRoute === r.id && styles.selectorBtnTextActive,
              ]}
            >
              {r.name[language]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Route Info */}
      <View style={styles.routeInfoRow}>
        <View style={styles.infoChip}>
          <Text style={styles.infoChipEmoji}>📍</Text>
          <Text style={styles.infoChipText}>{route.totalDistance}</Text>
        </View>
        <View style={styles.infoChip}>
          <Text style={styles.infoChipEmoji}>⏱</Text>
          <Text style={styles.infoChipText}>{route.totalTime[language]}</Text>
        </View>
        <View style={styles.infoChip}>
          <Text style={styles.infoChipEmoji}>🛕</Text>
          <Text style={styles.infoChipText}>
            {route.stops.length}{' '}
            {language === 'hi' ? 'मंदिर' : 'temples'}
          </Text>
        </View>
      </View>

      <Text style={styles.routeDescription}>{route.description[language]}</Text>

      {/* Stops */}
      <View style={styles.stopsContainer}>
        {route.stops.map((stop, index) => {
          const temple = getTemple(stop.templeId);
          if (!temple) return null;
          const isLast = index === route.stops.length - 1;

          return (
            <View key={stop.templeId} style={styles.stopWrapper}>
              <View style={styles.timelineCol}>
                <View style={styles.stopDot}>
                  <Text style={styles.stopNumber}>{stop.order}</Text>
                </View>
                {!isLast && <View style={styles.timelineLine} />}
              </View>

              <View style={styles.stopContent}>
                <TouchableOpacity
                  style={styles.stopCard}
                  onPress={() => handleTemplePress(stop.templeId)}
                  activeOpacity={0.85}
                >
                  <Text style={styles.stopName}>{temple.name[language]}</Text>
                  {temple.deity && (
                    <Text style={styles.stopDeity}>{temple.deity[language]}</Text>
                  )}
                  <Text style={styles.stopLocation} numberOfLines={1}>
                    📍 {temple.location[language]}
                  </Text>
                  <Text style={styles.stopArrow}>
                    {language === 'hi' ? 'विवरण देखें →' : 'View Details →'}
                  </Text>
                </TouchableOpacity>

                {!isLast && stop.distanceToNext && (
                  <View style={styles.distanceRow}>
                    <Text style={styles.distanceText}>
                      🚶 {stop.distanceToNext} · {stop.timeToNext[language]}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          );
        })}
      </View>

      <View style={styles.disclaimer}>
        <Text style={styles.disclaimerText}>
          {language === 'hi'
            ? '⚠️ दूरी और समय अनुमानित हैं। मौसम और मार्ग के अनुसार परिवर्तन हो सकता है।'
            : '⚠️ Distances and times are approximate and may vary by season and route.'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: '#5C2D91',
    paddingHorizontal: 20,
    paddingBottom: 28,
    alignItems: 'center',
  },
  headerEmoji: {
    fontSize: 36,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  selectorContainer: {
    flexDirection: 'row',
    margin: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  selectorBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  selectorBtnActive: {
    backgroundColor: '#5C2D91',
  },
  selectorBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textLight,
  },
  selectorBtnTextActive: {
    color: colors.white,
  },
  routeInfoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  infoChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    gap: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 3,
    elevation: 1,
  },
  infoChipEmoji: {
    fontSize: 14,
  },
  infoChipText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.secondary,
  },
  routeDescription: {
    marginHorizontal: 16,
    marginBottom: 16,
    fontSize: 13,
    color: colors.textLight,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  stopsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  stopWrapper: {
    flexDirection: 'row',
    gap: 12,
    minHeight: 80,
  },
  timelineCol: {
    alignItems: 'center',
    width: 32,
  },
  stopDot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#5C2D91',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopNumber: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '800',
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#D4B8E0',
    marginVertical: 4,
  },
  stopContent: {
    flex: 1,
    paddingBottom: 12,
  },
  stopCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 2,
    borderLeftWidth: 3,
    borderLeftColor: '#5C2D91',
  },
  stopName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.secondary,
    marginBottom: 2,
  },
  stopDeity: {
    fontSize: 12,
    color: colors.accent,
    fontWeight: '600',
    marginBottom: 4,
  },
  stopLocation: {
    fontSize: 11,
    color: colors.textMuted,
    marginBottom: 6,
  },
  stopArrow: {
    fontSize: 12,
    fontWeight: '700',
    color: '#5C2D91',
  },
  distanceRow: {
    paddingLeft: 4,
    paddingTop: 6,
    paddingBottom: 4,
  },
  distanceText: {
    fontSize: 12,
    color: colors.textMuted,
    fontStyle: 'italic',
  },
  disclaimer: {
    margin: 16,
    padding: 12,
    backgroundColor: '#FFF3E0',
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
  },
  disclaimerText: {
    fontSize: 12,
    color: colors.textMuted,
    textAlign: 'center',
  },
});
