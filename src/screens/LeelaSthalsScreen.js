import React from 'react';
import {
  View, Text, FlatList, TouchableOpacity, StyleSheet,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { leelaSthals } from '../data/leelaSthals';
import { colors } from '../theme/colors';
import TimingCard from '../components/TimingCard';

function OrnamentDivider() {
  return (
    <View style={divStyles.row}>
      <View style={divStyles.line} />
      <Text style={divStyles.star}>✦</Text>
      <View style={divStyles.line} />
    </View>
  );
}
const divStyles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  line: { flex: 1, height: 1, backgroundColor: colors.border },
  star: { fontSize: 12, marginHorizontal: 8, color: colors.leelaBadge },
});

function LeelaSthalCard({ item }) {
  const { language } = useLanguage();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.cardHeader}
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.85}
      >
        <View style={styles.cardTitleRow}>
          <View style={styles.cardTitleLeft}>
            <Text style={styles.cardEmoji}>🍃</Text>
            <View style={styles.cardTitleText}>
              <Text style={styles.cardName}>{item.name[language]}</Text>
              {item.deity && (
                <Text style={styles.cardDeity}>{item.deity[language]}</Text>
              )}
            </View>
          </View>
          <Text style={styles.expandIcon}>{expanded ? '▲' : '▼'}</Text>
        </View>
        {item.location && (
          <View style={styles.locationRow}>
            <Text style={styles.locationPin}>📍</Text>
            <Text style={styles.locationText}>{item.location[language]}</Text>
          </View>
        )}
      </TouchableOpacity>
      {expanded && (
        <View style={styles.cardBody}>
          <TimingCard timings={item.timings} />
          <View style={styles.storySection}>
            <Text style={styles.storySectionTitle}>📖 {language === 'hi' ? 'महत्त्व एवं कथा' : 'Significance & Story'}</Text>
            <OrnamentDivider />
            <Text style={styles.storyText}>{item.story[language]}</Text>
          </View>
          {item.special && item.special[language] && (
            <View style={styles.specialSection}>
              <OrnamentDivider />
              <Text style={styles.specialTitle}>✨ {language === 'hi' ? 'विशेषताएँ' : 'Special Features'}</Text>
              {item.special[language].map((feat, i) => (
                <View key={i} style={styles.bulletRow}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{feat}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      )}
    </View>
  );
}

export default function LeelaSthalsScreen() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <View style={styles.container}>
      <FlatList
        data={leelaSthals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LeelaSthalCard item={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <View style={styles.headerTop}>
              <Text style={styles.headerEmoji}>🍃</Text>
              <Text style={styles.headerTitle}>
                {language === 'hi' ? 'लीला स्थल' : 'Leela Sthals'}
              </Text>
              <Text style={styles.headerEmoji}>🍃</Text>
            </View>
            <View style={styles.headerDivider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerStar}>✦</Text>
              <View style={styles.dividerLine} />
            </View>
            <Text style={styles.headerText}>
              {language === 'hi'
                ? 'भगवान श्री कृष्ण की दिव्य लीलाओं से जुड़े पावन स्थल'
                : 'Sacred places associated with the divine leelas of Bhagwan Shri Krishna'}
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
    backgroundColor: '#6A1B9A',
    margin: 16,
    marginBottom: 8,
    padding: 18,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    gap: 10,
  },
  headerEmoji: {
    fontSize: 22,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.white,
    letterSpacing: 0.5,
  },
  headerDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  dividerStar: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    marginHorizontal: 8,
  },
  headerText: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.88)',
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    overflow: 'hidden',
    borderLeftWidth: 4,
    borderLeftColor: colors.leelaBadge,
  },
  cardHeader: {
    padding: 16,
    backgroundColor: '#FDFBFF',
  },
  cardTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  cardTitleLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  cardEmoji: {
    fontSize: 22,
    marginRight: 10,
    marginTop: 2,
  },
  cardTitleText: {
    flex: 1,
  },
  cardName: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.secondary,
  },
  cardDeity: {
    fontSize: 13,
    color: colors.accent,
    fontWeight: '600',
    marginTop: 2,
  },
  expandIcon: {
    fontSize: 16,
    color: colors.leelaBadge,
    marginLeft: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationPin: {
    fontSize: 12,
    marginRight: 4,
  },
  locationText: {
    fontSize: 12,
    color: colors.textMuted,
  },
  cardBody: {
    padding: 16,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  storySection: {
    marginTop: 8,
  },
  storySectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.secondary,
    marginBottom: 2,
  },
  storyText: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 23,
    paddingLeft: 2,
  },
  specialSection: {
    marginTop: 4,
  },
  specialTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.secondary,
    marginBottom: 8,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  bullet: {
    fontSize: 16,
    color: colors.leelaBadge,
    marginRight: 8,
  },
  bulletText: {
    flex: 1,
    fontSize: 13,
    color: colors.text,
    lineHeight: 20,
  },
});
