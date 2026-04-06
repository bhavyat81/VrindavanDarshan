# 🪷 वृन्दावन दर्शन | Vrindavan Darshan

> **वृन्दावन दर्शन — पवित्र धाम की यात्रा**
> **Vrindavan Darshan — Journey to the Sacred Abode**

श्री राधा-कृष्ण के श्री चरणों में सादर समर्पित 🙏
*Humbly dedicated at the lotus feet of Shri Radha-Krishna 🙏*

---

## 📖 About / परिचय

**Hindi:** यह एक सम्पूर्ण वृन्दावन दर्शन गाइड एप्लीकेशन है जो तीर्थयात्रियों को श्री वृन्दावन धाम के मंदिरों, लीला स्थलों और यात्रा जानकारी के बारे में मार्गदर्शन करती है। यह एप्लीकेशन हिन्दी और अंग्रेजी दोनों भाषाओं में उपलब्ध है।

**English:** This is a complete Vrindavan Darshan Guide app for pilgrims visiting Shri Vrindavan Dham. It provides information about temples, leela sthals (places of divine pastimes), darshan timings, sacred stories, and visitor guidance — all in both Hindi and English.

---

## ✨ Features / विशेषताएँ

| Feature | विवरण / Description |
|---------|---------------------|
| 🌐 **Bilingual** | Full Hindi & English with one-click language toggle |
| 🛕 **Temple Directory** | 11+ mandirs with full details, stories, and timings |
| 📿 **Categories** | Prachin/Swayambhu, Historical, Modern, Leela Sthals |
| ⏰ **Darshan Timings** | Seasonal timings (Summer/Winter) for each temple |
| 📖 **Sacred Stories** | Reverential narrations from authentic scriptures |
| ℹ️ **Visitor Info** | How to reach, best time, festivals, do's & don'ts |
| 📱 **Mobile-First** | Fully responsive design |
| 🎨 **Spiritual Theme** | Saffron, maroon & gold — traditional devotional colors |

---

## 🛕 Temples Included / सम्मिलित मंदिर

### प्राचीन / स्वयंभू (Ancient / Swayambhu)
- श्री बाँके बिहारी मंदिर | Shri Banke Bihari Mandir
- श्री राधा वल्लभ मंदिर | Shri Radha Vallabh Mandir
- श्री राधा रमण मंदिर | Shri Radha Raman Mandir *(Swayambhu)*
- श्री गोविन्द देव मंदिर | Shri Govind Dev Mandir
- श्री मदन मोहन मंदिर | Shri Madan Mohan Mandir
- श्री राधा दामोदर मंदिर | Shri Radha Damodar Mandir

### ऐतिहासिक (Historical)
- श्री रंग जी मंदिर | Shri Rang Ji Mandir
- शाहजी मंदिर | Shahji Mandir

### आधुनिक (Modern)
- ISKCON वृन्दावन | ISKCON Vrindavan
- प्रेम मंदिर | Prem Mandir
- निधिवन | Nidhivan

### लीला स्थल (Leela Sthals)
- सेवा कुञ्ज | Seva Kunj
- केसी घाट | Kesi Ghat
- विश्राम घाट (मथुरा) | Vishram Ghat (Mathura)
- गोवर्धन पर्वत | Govardhan Hill (Giriraj)

---

## 🚀 Getting Started / शुरुआत कैसे करें

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation & Running Locally

```bash
# Clone the repository
git clone https://github.com/bhavyat81/VrindavanDarshan.git
cd VrindavanDarshan

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI Framework |
| **Vite 5** | Build tool & dev server |
| **React Router 6** | Client-side navigation |
| **CSS Custom Properties** | Theming & styling |
| **Google Fonts** | Tiro Devanagari Hindi, Playfair Display, Lora |
| **LocalStorage** | Language preference persistence |

---

## 📁 Project Structure

```
src/
  components/
    Header.jsx          # Header with navigation & language toggle
    Footer.jsx          # Footer with dedication
    TempleCard.jsx      # Reusable temple/sthal card component
    LanguageToggle.jsx  # Language switch button
  pages/
    Home.jsx            # Landing page with hero & quick nav
    Temples.jsx         # Temple directory with search & filter
    TempleDetailPage.jsx # Individual temple/sthal detail
    LeelaSthals.jsx     # Leela Sthals listing
    VisitorInfo.jsx     # Complete visitor guide
    About.jsx           # About Vrindavan Dham
  data/
    temples.js          # All temple data (Hindi & English)
    leelaSthals.js      # Leela Sthal data
    visitorInfo.js      # Visitor information data
  context/
    LanguageContext.jsx # Language state & toggle
  i18n/
    translations.js     # UI strings in Hindi & English
  App.jsx
  main.jsx
  index.css             # Global styles with spiritual theme
  App.css
```

---

## 🌐 Bilingual System

- Default language: **Hindi** (हिन्दी) — as most visitors are Hindi-speaking
- Click the language toggle (🌐 English / 🌐 हिन्दी) in the header to switch
- Language preference is saved in `localStorage`
- All content (temple stories, UI, etc.) is available in both languages

---

## 🙏 Sensitivity & Respect Guidelines

This app is created with the utmost respect and devotion for Shri Vrindavan Dham and its sacred traditions:

- ✅ All content uses reverential terms: "भगवान" (Bhagwan), "ठाकुर जी" (Thakur Ji)
- ✅ Self-manifested deities described as "प्रकट हुए" (prakat hue), never "बनाया गया"
- ✅ Stories sourced from authentic scriptures (Shrimad Bhagavatam, Puranas, traditional accounts)
- ✅ "श्री" (Shri) honorific used before all deity names
- ✅ No commercial commentary, no casual or disrespectful tone
- ✅ Miracles and divine events presented as sacred traditions

---

## 📸 Screenshots

*(Coming soon — add screenshots of the app here)*

---

## 🤝 Contributing

Contributions are welcome! Please ensure:
1. All new content follows the sensitivity & respect guidelines above
2. Temple information is sourced from authentic scriptures or well-established traditions
3. Both Hindi and English content is provided for any new additions

---

## ⚠️ Disclaimer / अस्वीकरण

**Hindi:** दर्शन समय त्योहारों और विशेष अवसरों पर बदल सकते हैं। कृपया स्थानीय स्तर पर सत्यापित करें। यह एप्लीकेशन केवल मार्गदर्शन हेतु है।

**English:** Darshan timings may vary during festivals and special occasions. Please verify locally. This application is for guidance purposes only.

---

*🪷 राधे राधे | Radhe Radhe 🪷*

