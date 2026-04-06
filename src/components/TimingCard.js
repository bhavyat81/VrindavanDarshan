import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { colors } from '../theme/colors';

export default function TimingCard({ timings }) {
  const { language } = useLanguage();
  const t = translations[language];

  if (!timings) return null;

  const renderRow = (label, time) => (
    <View style={styles.row} key={label}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );

  const hasSeasonal = timings.summer && timings.winter;

  return (
    <View style={styles.card}>
      <View style={styles.titleRow}>
        <Ionicons name="time" size={18} color={colors.accent} />
        <Text style={styles.title}>{language === 'hi' ? 'दर्शन समय' : 'Darshan Timings'}</Text>
      </View>
      {hasSeasonal ? (
        <>
          <Text style={styles.seasonTitle}>{t.timing_morning || '☀️ ग्रीष्मकाल'}</Text>
          {timings.summer.morning && renderRow(t.timing_morning_label || 'Morning', timings.summer.morning)}
          {timings.summer.evening && renderRow(t.timing_evening_label || 'Evening', timings.summer.evening)}
          {timings.summer.aarti && renderRow('Aarti', timings.summer.aarti)}
          <Text style={styles.seasonTitle}>{t.timing_winter || '❄️ शीतकाल'}</Text>
          {timings.winter.morning && renderRow(t.timing_morning_label || 'Morning', timings.winter.morning)}
          {timings.winter.evening && renderRow(t.timing_evening_label || 'Evening', timings.winter.evening)}
          {timings.winter.aarti && renderRow('Aarti', timings.winter.aarti)}
        </>
      ) : (
        <>
          {timings.morning && renderRow(t.timing_morning_label || 'Morning', timings.morning)}
          {timings.evening && renderRow(t.timing_evening_label || 'Evening', timings.evening)}
          {timings.aarti && renderRow('Aarti', timings.aarti)}
          {timings.note && (
            <Text style={styles.note}>
              {typeof timings.note === 'object' ? timings.note[language] : timings.note}
            </Text>
          )}
        </>
      )}
      <Text style={styles.disclaimer}>{t.timing_disclaimer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF3E0',
    borderRadius: 12,
    padding: 14,
    marginVertical: 8,
    borderLeftWidth: 4,
    borderLeftColor: colors.accent,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.secondary,
    marginLeft: 6,
  },
  seasonTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primary,
    marginTop: 8,
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  label: {
    fontSize: 13,
    color: colors.text,
    fontWeight: '500',
  },
  time: {
    fontSize: 13,
    color: colors.secondary,
    fontWeight: '600',
  },
  note: {
    fontSize: 12,
    color: colors.textMuted,
    fontStyle: 'italic',
    marginTop: 6,
  },
  disclaimer: {
    fontSize: 11,
    color: colors.textMuted,
    fontStyle: 'italic',
    marginTop: 10,
    textAlign: 'center',
  },
});
