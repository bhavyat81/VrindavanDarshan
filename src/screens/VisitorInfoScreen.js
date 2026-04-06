import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { visitorInfo } from '../data/visitorInfo';
import { colors } from '../theme/colors';

function Section({ title, icon, children }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={styles.section}>
      <TouchableOpacity
        style={styles.sectionHeader}
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.85}
      >
        <View style={styles.sectionTitleRow}>
          <Text style={styles.sectionIcon}>{icon}</Text>
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>
        <Ionicons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={20}
          color={colors.accent}
        />
      </TouchableOpacity>
      {expanded && <View style={styles.sectionBody}>{children}</View>}
    </View>
  );
}

export default function VisitorInfoScreen() {
  const { language } = useLanguage();
  const t = translations[language];

  const renderTextBlock = (content) => {
    if (typeof content === 'string') {
      return <Text style={styles.bodyText}>{content}</Text>;
    }
    if (Array.isArray(content)) {
      return content.map((item, i) => (
        <View key={i} style={styles.bulletRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>
            {typeof item === 'object' ? item[language] || JSON.stringify(item) : item}
          </Text>
        </View>
      ));
    }
    if (typeof content === 'object' && content !== null) {
      return Object.entries(content).map(([key, val], i) => (
        <View key={i} style={styles.infoRow}>
          <Text style={styles.infoKey}>{key}:</Text>
          <Text style={styles.infoVal}>
            {typeof val === 'object' ? val[language] || JSON.stringify(val) : val}
          </Text>
        </View>
      ));
    }
    return null;
  };

  const SECTION_ICONS = {
    howToReach: '🚂',
    bestTime: '🌸',
    festivals: '🎊',
    dosDonts: '📋',
    localTips: '💡',
  };

  const SECTION_TITLES = {
    hi: {
      howToReach: 'कैसे पहुँचें',
      bestTime: 'सर्वोत्तम समय',
      festivals: 'प्रमुख त्योहार',
      dosDonts: 'करें और न करें',
      localTips: 'यात्रा सुझाव',
    },
    en: {
      howToReach: 'How to Reach',
      bestTime: 'Best Time to Visit',
      festivals: 'Major Festivals',
      dosDonts: "Do's & Don'ts",
      localTips: 'Travel Tips',
    },
  };

  const renderSectionContent = (key, sectionData) => {
    const langData = sectionData[language] || sectionData;
    if (!langData) return null;

    // Handle howToReach with sections array
    if (key === 'howToReach' && langData.sections) {
      return langData.sections.map((s, i) => (
        <View key={i} style={styles.subSection}>
          <Text style={styles.subSectionTitle}>{s.mode}</Text>
          <Text style={styles.bodyText}>{s.details}</Text>
        </View>
      ));
    }

    // Handle bestTime with content + seasons
    if (key === 'bestTime') {
      return (
        <View>
          {langData.content && <Text style={styles.bodyText}>{langData.content}</Text>}
          {langData.seasons && langData.seasons.map((s, i) => (
            <View key={i} style={styles.bulletRow}>
              <Text style={styles.bullet}>{s.icon}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.infoKey}>{s.name}</Text>
                <Text style={styles.bodyText}>{s.desc}</Text>
              </View>
            </View>
          ))}
        </View>
      );
    }

    // Handle festivals with list array
    if (key === 'festivals' && langData.list) {
      return langData.list.map((fest, i) => (
        <View key={i} style={styles.festivalRow}>
          <Text style={styles.festivalIcon}>{fest.icon}</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.infoKey}>{fest.name} <Text style={styles.festivalTime}>({fest.time})</Text></Text>
            <Text style={styles.bodyText}>{fest.desc}</Text>
          </View>
        </View>
      ));
    }

    // Handle dosDonts with dos/donts arrays
    if (key === 'dosDonts') {
      return (
        <View>
          {langData.dos && (
            <>
              <Text style={[styles.subSectionTitle, { color: '#2E7D32' }]}>
                ✅ {language === 'hi' ? 'करें' : "Do's"}
              </Text>
              {langData.dos.map((item, i) => (
                <View key={i} style={styles.bulletRow}>
                  <Text style={[styles.bullet, { color: '#2E7D32' }]}>✓</Text>
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              ))}
            </>
          )}
          {langData.donts && (
            <>
              <Text style={[styles.subSectionTitle, { color: '#C62828', marginTop: 12 }]}>
                ⛔ {language === 'hi' ? 'न करें' : "Don'ts"}
              </Text>
              {langData.donts.map((item, i) => (
                <View key={i} style={styles.bulletRow}>
                  <Text style={[styles.bullet, { color: '#C62828' }]}>✗</Text>
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              ))}
            </>
          )}
        </View>
      );
    }

    // Handle localTips with tips array
    if (key === 'localTips' && langData.tips) {
      return langData.tips.map((tip, i) => (
        <View key={i} style={styles.bulletRow}>
          <Text style={styles.bullet}>{tip.icon}</Text>
          <Text style={styles.bulletText}>{tip.text}</Text>
        </View>
      ));
    }

    return renderTextBlock(langData);
  };

  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.introCard}>
        <Text style={styles.introText}>
          {language === 'hi'
            ? 'वृन्दावन आने वाले श्रद्धालुओं के लिए आवश्यक जानकारी'
            : 'Essential information for devotees visiting Vrindavan'}
        </Text>
      </View>

      {Object.entries(visitorInfo).map(([key, sectionData]) => {
        const title = SECTION_TITLES[language][key] || key;
        const icon = SECTION_ICONS[key] || 'ℹ️';
        return (
          <Section key={key} title={title} icon={icon}>
            {renderSectionContent(key, sectionData)}
          </Section>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  introCard: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#2E7D32',
  },
  introText: {
    fontSize: 13,
    color: '#2E7D32',
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: '500',
  },
  section: {
    backgroundColor: colors.white,
    borderRadius: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.white,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sectionIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.secondary,
  },
  sectionBody: {
    padding: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  bodyText: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 22,
    marginBottom: 4,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  bullet: {
    fontSize: 16,
    color: colors.primary,
    marginRight: 8,
    lineHeight: 20,
  },
  bulletText: {
    flex: 1,
    fontSize: 13,
    color: colors.text,
    lineHeight: 20,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 6,
    flexWrap: 'wrap',
  },
  infoKey: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.secondary,
    marginRight: 6,
  },
  infoVal: {
    fontSize: 13,
    color: colors.text,
    flex: 1,
  },
  subSection: {
    marginBottom: 12,
  },
  subSectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.secondary,
    marginBottom: 4,
  },
  festivalRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  festivalIcon: {
    fontSize: 20,
    marginRight: 10,
    lineHeight: 24,
  },
  festivalTime: {
    fontWeight: '400',
    color: colors.textMuted,
  },
});
