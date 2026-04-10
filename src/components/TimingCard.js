import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { colors } from '../theme/colors';

export default function TimingCard({ timings }) {
  const { language } = useLanguage();
  const t = translations[language];

  if (!timings) return null;

  const renderRow = (label, time, keyPrefix, bgColor) => (
    <View style={[styles.row, { backgroundColor: bgColor }]} key={`${keyPrefix}-${label}`}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );

  const hasSeasonal = timings.summer && timings.winter;

  return (
    <View style={styles.card}>
      <View style={styles.titleRow}>
        <Text style={styles.titleEmoji}>🕐</Text>
        <Text style={styles.title}>{language === 'hi' ? 'दर्शन समय' : 'Darshan Timings'}</Text>
      </View>
      <View style={styles.divider} />
      {hasSeasonal ? (
        <>
          <View style={styles.seasonHeader}>
            <Text style={styles.seasonTitle}>☀️ {t.timing_morning || (language === 'hi' ? 'ग्रीष्मकाल' : 'Summer')}</Text>
          </View>
          <View style={styles.seasonBlock}>
            {timings.summer.morning && renderRow(t.timing_morning_label || (language === 'hi' ? 'प्रातः' : 'Morning'), timings.summer.morning, 'summer', '#FFFDE7')}
            {timings.summer.evening && renderRow(t.timing_evening_label || (language === 'hi' ? 'सायं' : 'Evening'), timings.summer.evening, 'summer', '#FFF8E1')}
            {timings.summer.aarti && renderRow('Aarti', timings.summer.aarti, 'summer', '#FFFDE7')}
          </View>
          <View style={styles.seasonHeader}>
            <Text style={styles.seasonTitle}>❄️ {t.timing_winter || (language === 'hi' ? 'शीतकाल' : 'Winter')}</Text>
          </View>
          <View style={styles.seasonBlock}>
            {timings.winter.morning && renderRow(t.timing_morning_label || (language === 'hi' ? 'प्रातः' : 'Morning'), timings.winter.morning, 'winter', '#E3F2FD')}
            {timings.winter.evening && renderRow(t.timing_evening_label || (language === 'hi' ? 'सायं' : 'Evening'), timings.winter.evening, 'winter', '#E1F0FB')}
            {timings.winter.aarti && renderRow('Aarti', timings.winter.aarti, 'winter', '#E3F2FD')}
          </View>
        </>
      ) : (
        <View style={styles.seasonBlock}>
          {timings.morning && renderRow(t.timing_morning_label || (language === 'hi' ? 'प्रातः' : 'Morning'), timings.morning, 'default', '#FFFDE7')}
          {timings.evening && renderRow(t.timing_evening_label || (language === 'hi' ? 'सायं' : 'Evening'), timings.evening, 'default', '#FFF8E1')}
          {timings.aarti && renderRow('Aarti', timings.aarti, 'default', '#FFFDE7')}
          {timings.note && (
            <Text style={styles.note}>
              {typeof timings.note === 'object' ? timings.note[language] : timings.note}
            </Text>
          )}
        </View>
      )}
      <Text style={styles.disclaimer}>{t.timing_disclaimer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surfaceElevated,
    borderRadius: 14,
    padding: 14,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: colors.decorativeBorder,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  titleEmoji: {
    fontSize: 18,
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.secondary,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: 10,
  },
  seasonHeader: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 4,
    marginTop: 6,
  },
  seasonTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.white,
  },
  seasonBlock: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
    paddingHorizontal: 10,
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
    fontWeight: '700',
  },
  note: {
    fontSize: 12,
    color: colors.textMuted,
    fontStyle: 'italic',
    marginTop: 6,
    paddingHorizontal: 4,
  },
  disclaimer: {
    fontSize: 11,
    color: colors.textMuted,
    fontStyle: 'italic',
    marginTop: 10,
    textAlign: 'center',
  },
});