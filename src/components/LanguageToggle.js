import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { colors } from '../theme/colors';

export default function LanguageToggle({ style }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={toggleLanguage} activeOpacity={0.8}>
      <Text style={styles.text}>🌐 {language === 'hi' ? 'EN' : 'हि'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accent,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  text: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 14,
  },
});
