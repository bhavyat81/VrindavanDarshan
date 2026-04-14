import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { colors } from '../theme/colors';
import LanguageToggle from '../components/LanguageToggle';
import DailyShloka from '../components/DailyShloka';

const { width } = Dimensions.get('window');

const NAV_CARDS = [
  { key: 'mandirs', emoji: '🛕', labelKey: 'home_mandirs', tab: 'Mandirs', color: '#FF6B35', bg: '#FFF0E8' },
  { key: 'leela', emoji: '🍃', labelKey: 'home_leelaSthals', tab: 'LeelaSthals', color: '#6A1B9A', bg: '#F5EEF8' },
  { key: 'favorites', emoji: '♥', labelKey: 'navFavorites', tab: 'Favorites', color: '#C62828', bg: '#FFF0F0' },
  { key: 'parikrama', emoji: '🚶', labelKey: 'home_parikrama', tab: 'Parikrama', color: '#5C2D91', bg: '#F0EBF8' },
  { key: 'info', emoji: 'ℹ️', labelKey: 'home_visitorInfo', tab: 'Info', color: '#1565C0', bg: '#EEF4FB' },
  { key: 'about', emoji: '📖', labelKey: 'home_about', tab: 'Info', screen: 'About', color: '#2E7D32', bg: '#EEF5EE' },
];

export default function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();
  const t = translations[language];

  const handleNavCard = (card) => {
    if (card.tab === 'Parikrama') {
      navigation.navigate('Parikrama');
      return;
    }
    if (card.tab) {
      if (card.screen) {
        navigation.navigate(card.tab, { screen: card.screen });
      } else {
        navigation.navigate(card.tab);
      }
    }
  };

  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      {/* Hero Section — plain maroon View */}
      <View style={[styles.hero, { paddingTop: insets.top + 24 }]}>
        {/* Dark overlay strip for depth */}
        <View style={styles.heroOverlay} accessible={false} />
        <View style={styles.heroTop}>
          <View style={styles.heroOm}>
            <Text style={styles.omText}>🕉</Text>
          </View>
          <LanguageToggle />
        </View>
        {/* Decorative border row */}
        <View style={styles.heroDivider}>
          <View style={styles.heroDividerLine} />
          <Text style={styles.heroDividerStar}>✦</Text>
          <View style={styles.heroDividerLine} />
        </View>
        <Text style={styles.heroTitle}>{t.appTitle}</Text>
        <Text style={styles.heroSubtitle}>{t.appSubtitle}</Text>
        <Text style={styles.heroTagline}>
          {language === 'hi'
            ? 'वृन्दावन के पावन धामों की यात्रा'
            : 'A Sacred Journey Through Vrindavan'}
        </Text>
        <View style={styles.heroDivider}>
          <View style={styles.heroDividerLine} />
          <Text style={styles.heroDividerStar}>✦</Text>
          <View style={styles.heroDividerLine} />
        </View>
      </View>

      {/* Ornamental divider */}
      <View style={styles.sectionDivider}>
        <Text style={styles.sectionDividerText}>— ✦ —</Text>
      </View>

      {/* Daily Shloka */}
      <DailyShloka />

      {/* Ornamental divider */}
      <View style={styles.sectionDivider}>
        <Text style={styles.sectionDividerText}>— ✦ —</Text>
      </View>

      {/* Nav Cards */}
      <View style={styles.cardsContainer}>
        <View style={styles.cardsGrid}>
          {NAV_CARDS.map((card) => (
            <TouchableOpacity
              key={card.key}
              style={[styles.navCard]}
              onPress={() => handleNavCard(card)}
              activeOpacity={0.85}
            >
              {/* Colored top banner strip */}
              <View style={[styles.navCardBanner, { backgroundColor: card.color }]} />
              <View style={[styles.navCardInner, { backgroundColor: card.bg }]}>
                <Text style={styles.navCardEmoji}>{card.emoji}</Text>
                <Text style={[styles.navCardLabel, { color: card.color }]}>
                  {t[card.labelKey]}
                </Text>
                <Text style={[styles.navCardArrow, { color: card.color }]}>›</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Ornamental divider */}
      <View style={styles.sectionDivider}>
        <Text style={styles.sectionDividerText}>— ✦ —</Text>
      </View>

      {/* Welcome message */}
      <View style={styles.welcomeSection}>
        <View style={styles.welcomeBorder}>
          <Text style={styles.welcomeTitle}>
            {language === 'hi' ? '🙏 जय श्री राधे' : '🙏 Jai Shri Radhe'}
          </Text>
        </View>
        <Text style={styles.welcomeText}>
          {language === 'hi'
            ? 'वृन्दावन — जहाँ भगवान श्री कृष्ण ने अपनी दिव्य लीलाएँ की थीं। यहाँ के प्रत्येक कण में राधा-कृष्ण का वास है।'
            : 'Vrindavan — the sacred land where Bhagwan Shri Krishna performed His divine leelas. Every particle of this holy Dham is infused with the presence of Radha-Krishna.'}
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
  hero: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 24,
    paddingBottom: 36,
    position: 'relative',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: colors.headerGradientTop,
    opacity: 0.55,
  },
  heroTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  heroOm: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(218,165,32,0.25)',
    borderWidth: 1.5,
    borderColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  omText: {
    fontSize: 26,
  },
  heroDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  heroDividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(218,165,32,0.45)',
  },
  heroDividerStar: {
    color: colors.accent,
    fontSize: 14,
    marginHorizontal: 10,
  },
  heroTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 6,
    letterSpacing: 1.5,
  },
  heroSubtitle: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.92)',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 8,
  },
  heroTagline: {
    fontSize: 13,
    color: colors.accent,
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 0.5,
  },
  sectionDivider: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  sectionDividerText: {
    fontSize: 14,
    color: colors.accent,
    letterSpacing: 4,
  },
  cardsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 4,
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    justifyContent: 'space-between',
  },
  navCard: {
    width: (width - 46) / 2,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  navCardBanner: {
    height: 8,
    width: '100%',
  },
  navCardInner: {
    paddingVertical: 18,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  navCardEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  navCardLabel: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
  },
  navCardArrow: {
    fontSize: 20,
    fontWeight: '700',
  },
  welcomeSection: {
    marginHorizontal: 16,
    marginBottom: 32,
    backgroundColor: colors.surfaceElevated,
    borderRadius: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.decorativeBorder,
  },
  welcomeBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.decorativeBorder,
    paddingBottom: 10,
    marginBottom: 12,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.secondary,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 14,
    color: colors.textLight,
    lineHeight: 23,
    textAlign: 'center',
  },
});
