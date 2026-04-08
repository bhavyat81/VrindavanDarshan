import React from 'react';
import {
  View, Text, FlatList, TouchableOpacity, StyleSheet,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { leelaSthals } from '../data/leelaSthals';
import { colors } from '../theme/colors';
import TimingCard from '../components/TimingCard';

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
          <Text style={styles.cardName}>{item.name[language]}</Text>
          <Text style={{fontSize: 18, color: colors.accent}}>{expanded ? '▲' : '▼'}</Text>
        </View>
        {item.deity && (
          <Text style={styles.cardDeity}>{item.deity[language]}</Text>
        )}
        {item.location && (
          <View style={styles.locationRow}>
            <Text style={{fontSize: 12}}>📍</Text>
            <Text style={styles.locationText}>{item.location[language]}</Text>
          </View>
        )}
      </TouchableOpacity>
      {expanded && (
        <View style={styles.cardBody}>
          <TimingCard timings={item.timings} />
          <View style={styles.storySection}>
            <Text style={styles.storySectionTitle}>📖 {language === 'hi' ? 'महत्त्व एवं कथा' : 'Significance & Story'}</Text>
            <Text style={styles.storyText}>{item.story[language]}</Text>
          </View>
          {item.special && item.special[language] && (
            <View style={styles.specialSection}>
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
    backgroundColor: '#F3E5F5',
    margin: 16,
    marginBottom: 8,
    padding: 14,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.leelaBadge,
  },
  headerText: {
    fontSize: 13,
    color: colors.leelaBadge,
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: '500',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 14,
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
  },
  cardTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardName: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.secondary,
    flex: 1,
  },
  cardDeity: {
    fontSize: 13,
    color: colors.accent,
    fontWeight: '600',
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontSize: 12,
    color: colors.textMuted,
    marginLeft: 4,
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
    marginBottom: 8,
  },
  storyText: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 22,
  },
  specialSection: {
    marginTop: 12,
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
