import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { colors } from '../theme/colors';
import LanguageToggle from '../components/LanguageToggle';

const { width } = Dimensions.get('window');

const NAV_CARDS = [
  { key: 'mandirs', emoji: '🛕', labelKey: 'home_mandirs', tab: 'Mandirs', color: '#FF6B35' },
  { key: 'leela', emoji: '🍃', labelKey: 'home_leelaSthals', tab: 'LeelaSthals', color: '#6A1B9A' },
  { key: 'info', emoji: 'ℹ️', labelKey: 'home_visitorInfo', tab: 'Info', color: '#1565C0' },
  { key: 'about', emoji: '📖', labelKey: 'home_about', tab: 'Info', screen: 'About', color: '#2E7D32' },
];

export default function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();
  const t = translations[language];

  const handleNavCard = (card) => {
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
      {/* Hero Section */}
      <LinearGradient
        colors={[colors.secondary, colors.primary, colors.accent]}
        style={[styles.hero, { paddingTop: insets.top + 50 }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.heroTop}>
          <View style={styles.heroOm}>
            <Text style={styles.omText}>🕉</Text>
          </View>
          <LanguageToggle />
        </View>
        <Text style={styles.heroTitle}>{t.appTitle}</Text>
        <Text style={styles.heroSubtitle}>{t.appSubtitle}</Text>
        <Text style={styles.heroTagline}>
          {language === 'hi'
            ? 'वृन्दावन के पावन धामों की यात्रा'
            : 'A Sacred Journey Through Vrindavan'}
        </Text>
      </LinearGradient>

      {/* Nav Cards */}
      <View style={styles.cardsContainer}>
        <View style={styles.cardsGrid}>
          {NAV_CARDS.map((card) => (
            <TouchableOpacity
              key={card.key}
              style={[styles.navCard, { borderTopColor: card.color }]}
              onPress={() => handleNavCard(card)}
              activeOpacity={0.85}
            >
              <View style={[styles.iconCircle, { backgroundColor: card.color + '20' }]}>
                <Text style={{ fontSize: 28 }}>{card.emoji}</Text>
              </View>
              <Text style={[styles.navCardLabel, { color: card.color }]}>
                {t[card.labelKey]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Welcome message */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>
          {language === 'hi' ? '🙏 जय श्री राधे' : '🙏 Jai Shri Radhe'}
        </Text>
        <Text style={styles.welcomeText}>
          {language === 'hi'
            ? 'वृन्दावन — जहाँ भगवान श्री कृष्ण ने अपनी दिव्य लीलाएँ की थीं। यहाँ के प्रत्येक कण में राधा-कृष्ण का वास है।'
            : 'Vrindavan — the sacred land where Bhagwan Shri Krishna performed His divine pastimes. Every particle of this holy Dham is infused with the presence of Radha-Krishna.'}
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
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  heroTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  heroOm: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  omText: {
    fontSize: 24,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 6,
    letterSpacing: 1,
  },
  heroSubtitle: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 8,
  },
  heroTagline: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.75)',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  cardsContainer: {
    padding: 20,
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    justifyContent: 'space-between',
  },
  navCard: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 18,
    width: (width - 54) / 2,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    borderTopWidth: 3,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  navCardLabel: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  welcomeSection: {
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 18,
    borderLeftWidth: 4,
    borderLeftColor: colors.accent,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 30,
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.secondary,
    marginBottom: 8,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 14,
    color: colors.textLight,
    lineHeight: 22,
    textAlign: 'center',
  },
});
