import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { colors } from '../theme/colors';

export default function LanguageToggle({ style }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={toggleLanguage} activeOpacity={0.8}>
      <Text style={styles.text}>{language === 'hi' ? 'EN' : 'हि'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accent,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    minWidth: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 13,
  },
});
