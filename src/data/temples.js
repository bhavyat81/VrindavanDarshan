const temples = [
  // ─────────────────────────────────────────────────
  // A. PRACHIN / SWAYAMBHU
  // ─────────────────────────────────────────────────
  {
    id: 'banke-bihari',
    category: 'prachin',
    image: null,
    name: {
      hi: 'श्री बाँके बिहारी मंदिर',
      en: 'Shri Banke Bihari Mandir',
    },
    deity: {
      hi: 'श्री बाँके बिहारी जी',
      en: 'Shri Banke Bihari Ji',
    },
    location: {
      hi: 'रंग जी मंदिर के समीप, वृन्दावन',
      en: 'Near Rang Ji Temple area, Vrindavan',
    },
    timings: {
      summer: {
        morning: '7:45 AM – 12:00 PM',
        evening: '5:30 PM – 9:30 PM',
      },
      winter: {
        morning: '8:45 AM – 1:00 PM',
        evening: '4:30 PM – 8:30 PM',
      },
    },
    story: {
      hi: 'श्री बाँके बिहारी जी का प्राकट्य निधिवन में हुआ था। परम भक्त स्वामी हरिदास जी अपनी भक्तिपूर्ण गायन-साधना में लीन थे, तब साक्षात् श्री बाँके बिहारी जी उनके सामने प्रकट हुए। ठाकुर जी का स्वरूप इतना मनोहारी और आकर्षक है कि दर्शन के समय हर कुछ मिनटों में पर्दा गिराया जाता है, ताकि भक्तगण उनके दिव्य सौन्दर्य में खो न जाएँ। यह मंदिर की अनूठी परम्परा है।',
      en: 'Shri Banke Bihari Ji prakat hue (manifested) in the sacred Nidhivan grove. Param-bhakta Swami Haridas Ji was absorbed in his devotional singing when Shri Banke Bihari Ji appeared before him. Thakur Ji\'s divine form is so enchanting that during darshan, the curtain (parda) is drawn every few minutes so that devotees are not overwhelmed by His incomparable beauty. This is the unique and sacred tradition of this temple.',
    },
    special: {
      hi: [
        'यहाँ घंटा-घड़ियाल के साथ आरती नहीं होती — यह इस मंदिर की अनूठी परम्परा है',
        'प्रत्येक कुछ मिनटों पर पर्दा गिराने की पावन परम्परा',
        'जन्माष्टमी पर विशेष अभिषेक दर्शन',
        'स्वामी हरिदास जी की साधना-भूमि निधिवन के समीप स्थित',
      ],
      en: [
        'No aarti with bells (ghanta-ghariyaal) — a unique and sacred tradition of this temple',
        'Holy tradition of drawing the curtain every few minutes during darshan',
        'Special Abhishek Darshan on Janmashtami',
        'Located near Nidhivan — the sacred grove of Swami Haridas Ji',
      ],
    },
    dosDonts: {
      dos: {
        hi: ['शांत भाव से दर्शन करें', 'पर्दा परम्परा का सम्मान करें', 'स्वच्छ व सादे वस्त्र पहनें'],
        en: ['Observe darshan with a calm and reverential attitude', 'Respect the curtain (parda) tradition', 'Wear clean, modest clothing'],
      },
      donts: {
        hi: ['मोबाइल का उपयोग न करें', 'भीड़ में धक्का-मुक्की न करें', 'ऊँचे स्वर में बात न करें'],
        en: ['Do not use mobile phones inside', 'Do not push or rush in the crowd', 'Do not speak loudly'],
      },
    },
  },

  {
    id: 'radha-vallabh',
    category: 'prachin',
    image: null,
    name: {
      hi: 'श्री राधा वल्लभ मंदिर',
      en: 'Shri Radha Vallabh Mandir',
    },
    deity: {
      hi: 'श्री राधा वल्लभ जी',
      en: 'Shri Radha Vallabh Ji',
    },
    location: {
      hi: 'वृन्दावन, उत्तर प्रदेश',
      en: 'Vrindavan, Uttar Pradesh',
    },
    timings: {
      morning: '9:00 AM – 12:00 PM',
      evening: '5:00 PM – 8:00 PM',
    },
    story: {
      hi: 'श्री राधा वल्लभ मंदिर की स्थापना 16वीं शताब्दी में श्री हित हरिवंश महाप्रभु जी ने की थी। इस मंदिर की अनूठी दार्शनिक विशेषता यह है कि यहाँ श्री राधा रानी सर्वेश्वरी हैं। मंदिर में ठाकुर जी की मूर्ति के स्थान पर केवल श्रीमती राधा रानी विराजमान हैं, और उनके पास श्री कृष्ण की बाँसुरी रखी है — यह प्रतीक है कि भगवान श्री कृष्ण ने स्वयं को श्रीमती राधा रानी को समर्पित कर दिया है। यही "राधा सर्वेश्वरी" दर्शन का सार है।',
      en: 'Shri Radha Vallabh Mandir was established in the 16th century by Shri Hit Harivansh Mahaprabhu Ji. The unique philosophical essence of this temple is "Radha Sarveshwari" — Shrimati Radha Rani is the Supreme. In the sanctum, only Shrimati Radha Rani is installed, and beside Her rests Shri Krishna\'s divine flute — symbolizing that Bhagwan Shri Krishna has offered His very Self to Shrimati Radha Rani. This is the profound meaning of Radha Sarveshwari philosophy.',
    },
    special: {
      hi: [
        '"राधा सर्वेश्वरी" — श्रीमती राधा रानी सर्वोच्च देवी का अद्वितीय दर्शन',
        'श्री कृष्ण की बाँसुरी का श्रीमती राधा रानी के पास समर्पण',
        'श्री हित हरिवंश महाप्रभु जी द्वारा स्थापित',
        '16वीं शताब्दी का प्राचीन मंदिर',
      ],
      en: [
        '"Radha Sarveshwari" — unique philosophy of Shrimati Radha Rani as Supreme Deity',
        'Shri Krishna\'s flute placed beside Shrimati Radha Rani as a symbol of divine surrender',
        'Established by Shri Hit Harivansh Mahaprabhu Ji',
        'Ancient 16th century temple',
      ],
    },
    dosDonts: {
      dos: {
        hi: ['श्रद्धापूर्वक दर्शन करें', 'मर्यादित वस्त्र पहनें', 'मंदिर परिसर की स्वच्छता बनाए रखें'],
        en: ['Observe darshan with deep reverence', 'Wear modest clothing', 'Maintain cleanliness in the temple premises'],
      },
      donts: {
        hi: ['फोटोग्राफी से पहले अनुमति लें', 'आरती के समय व्यवधान न डालें'],
        en: ['Seek permission before photography', 'Do not disturb during aarti'],
      },
    },
  },

  {
    id: 'radha-raman',
    category: 'prachin',
    image: null,
    name: {
      hi: 'श्री राधा रमण मंदिर',
      en: 'Shri Radha Raman Mandir',
    },
    deity: {
      hi: 'श्री राधा रमण जी (स्वयंभू)',
      en: 'Shri Radha Raman Ji (Swayambhu — Self-Manifested)',
    },
    location: {
      hi: 'वृन्दावन, उत्तर प्रदेश',
      en: 'Vrindavan, Uttar Pradesh',
    },
    timings: {
      summer: {
        morning: '8:00 AM – 12:00 PM',
        evening: '5:30 PM – 9:00 PM',
      },
      winter: {
        morning: '8:30 AM – 12:30 PM',
        evening: '4:30 PM – 8:00 PM',
      },
    },
    story: {
      hi: 'सन् 1542 में श्री गोपाल भट्ट गोस्वामी जी शालिग्राम शिला की अत्यन्त भक्तिपूर्वक पूजा-अर्चना करते थे। एक दिन उनकी गहन साधना और प्रेमपूर्ण प्रार्थना से प्रसन्न होकर साक्षात् श्री राधा रमण जी उस पवित्र शालिग्राम शिला से प्रकट हुए। ठाकुर जी के श्री विग्रह के पृष्ठ भाग में आज भी उस मूल शालिग्राम का स्वरूप दर्शनीय है। तब से अखण्ड ज्योति निरन्तर प्रज्वलित है — यह 1542 से आज तक एक क्षण के लिए भी नहीं बुझी।',
      en: 'In the year 1542, Shri Gopal Bhatta Goswami was performing intense and devotional worship of a sacred Shaligram Shila. Moved by his deep love and prayer, Shri Radha Raman Ji prakat hue (manifested Himself) from that sacred Shaligram Shila. Even today, the form of the original Shaligram is visible on the back of Thakur Ji\'s divine form. Since that blessed day, the eternal flame (akhand jyoti) has burned continuously — without interruption, from 1542 to this day.',
    },
    special: {
      hi: [
        'स्वयंभू विग्रह — शालिग्राम शिला से प्राकट्य',
        'सन् 1542 से अखण्ड ज्योति जलती है',
        'मुगल आक्रमणों में भी ठाकुर जी स्थानांतरित नहीं हुए — मंदिर में ही सुरक्षित रहे',
        'विग्रह के पृष्ठ भाग पर शालिग्राम का मूल स्वरूप दर्शनीय',
      ],
      en: [
        'Swayambhu (Self-manifested) deity — prakat hue from Shaligram Shila',
        'Eternal flame (akhand jyoti) burning since 1542',
        'One of the rare temples where the deity was NOT moved during Mughal invasions',
        'Original Shaligram form visible on the back of the deity',
      ],
    },
    dosDonts: {
      dos: {
        hi: ['श्रद्धा और भक्ति से दर्शन करें', 'अखण्ड ज्योति के समक्ष श्रद्धापूर्वक प्रणाम करें'],
        en: ['Observe darshan with devotion and reverence', 'Bow reverentially before the eternal flame (akhand jyoti)'],
      },
      donts: {
        hi: ['मंदिर में जूते-चप्पल न लाएँ', 'व्यावसायिक फोटोग्राफी न करें'],
        en: ['Do not bring footwear inside', 'No commercial photography'],
      },
    },
  },

  {
    id: 'govind-dev',
    category: 'prachin',
    image: null,
    name: {
      hi: 'श्री गोविन्द देव मंदिर',
      en: 'Shri Govind Dev Mandir',
    },
    deity: {
      hi: 'श्री गोविन्द देव जी',
      en: 'Shri Govind Dev Ji',
    },
    location: {
      hi: 'वृन्दावन, उत्तर प्रदेश',
      en: 'Vrindavan, Uttar Pradesh',
    },
    timings: {
      morning: '8:00 AM – 12:00 PM',
      evening: '5:00 PM – 8:30 PM',
    },
    story: {
      hi: 'श्री गोविन्द देव जी का विग्रह भगवान श्री कृष्ण के प्रपौत्र वज्रनाभ जी ने निर्मित किया था, जो भगवान की देह-छवि के सर्वाधिक सदृश माना जाता है। श्री चैतन्य महाप्रभु जी के प्रिय शिष्य रूप गोस्वामी जी ने इस विग्रह को भूमि के नीचे से प्रकट किया। मूल भव्य सात-मंजिला मंदिर का निर्माण हुआ था, परन्तु औरंगजेब के आक्रमण में इसके ऊपरी तल नष्ट कर दिए गए। ठाकुर जी को सुरक्षित रूप से जयपुर भेज दिया गया और वहाँ के राजभवन में पधराए गए। वर्तमान मंदिर उसी मूल स्थान पर स्थित है।',
      en: 'The sacred form of Shri Govind Dev Ji was crafted by Vajranabh, the great-grandson of Bhagwan Shri Krishna Himself, and is believed to most closely resemble Bhagwan\'s original divine form. Shri Rupa Goswami, the beloved disciple of Shri Chaitanya Mahaprabhu, discovered this deity from the ground. A magnificent seven-storied temple was built at this site. During Aurangzeb\'s invasion, the upper stories were destroyed, but Thakur Ji was safely and devotedly moved to Jaipur, where He resides in the royal palace. The present temple stands at the original sacred site.',
    },
    special: {
      hi: [
        'वज्रनाभ द्वारा निर्मित — भगवान श्री कृष्ण की देह-छवि के सदृश',
        'रूप गोस्वामी जी द्वारा भूमि से प्राकट्य',
        'मूल 7-मंजिला भव्य मंदिर का ऐतिहासिक स्थल',
        'ठाकुर जी अब जयपुर के राजभवन में विराजमान',
      ],
      en: [
        'Crafted by Vajranabh — believed to most resemble Bhagwan Krishna\'s divine form',
        'Discovered from the earth by Rupa Goswami',
        'Site of the original magnificent 7-storied temple',
        'Thakur Ji now resides in the royal palace in Jaipur',
      ],
    },
    dosDonts: {
      dos: {
        hi: ['श्रद्धापूर्वक दर्शन करें', 'मंदिर के इतिहास को जानें और सम्मान करें'],
        en: ['Observe darshan with reverence', 'Learn and respect the temple\'s sacred history'],
      },
      donts: {
        hi: ['मंदिर में शोर न करें', 'पवित्र परिसर में अनादर न करें'],
        en: ['Do not make noise inside the temple', 'Do not show disrespect in the sacred premises'],
      },
    },
  },

  {
    id: 'madan-mohan',
    category: 'prachin',
    image: null,
    name: {
      hi: 'श्री मदन मोहन मंदिर',
      en: 'Shri Madan Mohan Mandir',
    },
    deity: {
      hi: 'श्री मदन मोहन जी',
      en: 'Shri Madan Mohan Ji',
    },
    location: {
      hi: 'कालिया घाट के समीप, वृन्दावन',
      en: 'Near Kaliya Ghat, Vrindavan',
    },
    timings: {
      morning: '7:30 AM – 12:00 PM',
      evening: '5:00 PM – 8:30 PM',
    },
    story: {
      hi: 'श्री मदन मोहन जी का विग्रह भी वज्रनाभ जी द्वारा स्थापित है। श्री अद्वैत आचार्य जी ने इस विग्रह को एक प्राचीन वृक्ष के समीप पुनः प्रकट किया। वृन्दावन के सबसे प्राचीन मंदिरों में से एक, इस मंदिर की स्थापना श्री सनातन गोस्वामी ने की थी। एक बार एक व्यापारी श्री सनातन गोस्वामी के दर्शन को आया और ठाकुर जी की सेवा के लिए धन-सम्पत्ति अर्पित करना चाहा। उसकी नौका यमुना में फँस गई थी और उसने ठाकुर जी से प्रार्थना की। ऐसी मान्यता है कि ठाकुर जी की कृपा से नौका मुक्त हो गई।',
      en: 'The sacred form of Shri Madan Mohan Ji was also installed by Vajranabh. Shri Advaita Acharya Ji rediscovered this deity near the base of an ancient tree. One of the oldest temples in Vrindavan, it was established by Shri Sanatan Goswami. Once, a merchant visited Shri Sanatan Goswami and wished to offer wealth for the service of Thakur Ji. His boat had become stuck in the Yamuna, and he prayed to Thakur Ji for help. By the divine grace of Shri Madan Mohan Ji, the boat was freed — such are the sacred traditions of this holy place.',
    },
    special: {
      hi: [
        'वज्रनाभ द्वारा स्थापित प्राचीन विग्रह',
        'श्री सनातन गोस्वामी जी द्वारा मंदिर की स्थापना',
        'वृन्दावन के सबसे प्राचीन मंदिरों में से एक',
        'मूल विग्रह राजस्थान में सुरक्षित',
      ],
      en: [
        'Ancient deity installed by Vajranabh',
        'Temple established by Shri Sanatan Goswami',
        'One of the oldest temples in Vrindavan',
        'Original deity safely preserved in Rajasthan',
      ],
    },
    dosDonts: {
      dos: {
        hi: ['प्रातः दर्शन का लाभ अवश्य उठाएँ', 'मंगला आरती के दर्शन करें'],
        en: ['Do take the opportunity for morning darshan', 'Try to attend Mangala Aarti'],
      },
      donts: {
        hi: ['मंदिर में मोबाइल फोन का उपयोग न करें'],
        en: ['Do not use mobile phones inside the temple'],
      },
    },
  },

  {
    id: 'radha-damodar',
    category: 'prachin',
    image: null,
    name: {
      hi: 'श्री राधा दामोदर मंदिर',
      en: 'Shri Radha Damodar Mandir',
    },
    deity: {
      hi: 'श्री राधा दामोदर जी',
      en: 'Shri Radha Damodar Ji',
    },
    location: {
      hi: 'वृन्दावन, उत्तर प्रदेश',
      en: 'Vrindavan, Uttar Pradesh',
    },
    timings: {
      morning: '8:00 AM – 12:00 PM',
      evening: '5:00 PM – 8:30 PM',
    },
    story: {
      hi: 'श्री राधा दामोदर मंदिर की स्थापना श्री जीव गोस्वामी ने की थी। इस मंदिर में श्री गोपाल भट्ट गोस्वामी द्वारा प्रदत्त वह पवित्र गोवर्धन शिला विराजमान है जिस पर श्री कृष्ण के श्री चरणों का चिह्न अंकित है। यह मंदिर विशेष रूप से इसलिए भी पूजनीय है क्योंकि यहाँ श्रील प्रभुपाद जी (ISKCON के संस्थापक आचार्य) ने पश्चिम में जाने से पूर्व कई वर्षों तक निवास किया और अपने अमूल्य ग्रंथों की रचना की। उनके कक्ष आज भी दर्शनीय हैं।',
      en: 'Shri Radha Damodar Mandir was established by Shri Jiva Goswami. This temple houses the sacred Govardhana Shila, given by Gopal Bhatta Goswami, which bears the holy footprint of Bhagwan Shri Krishna. This temple is especially venerable because Srila Prabhupada (the founder-acharya of ISKCON) lived here for several years before travelling to the West, and wrote his priceless spiritual works in these very rooms. His sacred quarters are still preserved and open for darshan.',
    },
    special: {
      hi: [
        'श्री कृष्ण के चरण-चिह्न अंकित गोवर्धन शिला',
        'श्री जीव गोस्वामी द्वारा स्थापित',
        'श्रील प्रभुपाद जी के निवास के पावन कक्ष दर्शनीय',
        'षट् गोस्वामियों की साधना-भूमि',
      ],
      en: [
        'Sacred Govardhana Shila with Shri Krishna\'s divine footprint',
        'Established by Shri Jiva Goswami',
        'Sacred quarters of Srila Prabhupada preserved for darshan',
        'Associated with the Six Goswamis of Vrindavan',
      ],
    },
    dosDonts: {
      dos: {
        hi: ['गोवर्धन शिला के दर्शन अवश्य करें', 'श्रील प्रभुपाद जी के कक्षों में श्रद्धापूर्वक जाएँ'],
        en: ['Do have darshan of the sacred Govardhana Shila', 'Visit Srila Prabhupada\'s quarters with reverence'],
      },
      donts: {
        hi: ['पावन शिला को स्पर्श न करें'],
        en: ['Do not touch the sacred Shila without permission'],
      },
    },
  },

  // ─────────────────────────────────────────────────
  // B. HISTORICAL
  // ─────────────────────────────────────────────────
  {
    id: 'rang-ji',
    category: 'historical',
    image: null,
    name: {
      hi: 'श्री रंग जी मंदिर',
      en: 'Shri Rang Ji Mandir',
    },
    deity: {
      hi: 'श्री रंग जी (भगवान रंगनाथ — शयन स्वरूप विष्णु)',
      en: 'Shri Rang Ji (Lord Ranganatha — Vishnu in the divine reclining form)',
    },
    location: {
      hi: 'रंग जी मार्ग, वृन्दावन',
      en: 'Rang Ji Road, Vrindavan',
    },
    timings: {
      morning: '6:00 AM – 12:00 PM',
      evening: '4:00 PM – 9:00 PM',
    },
    story: {
      hi: 'श्री रंग जी मंदिर का निर्माण सन् 1851 में सेठ गोविन्द दास और सेठ राधाकृष्ण दास ने करवाया था। यह मंदिर वृन्दावन में अत्यन्त विशिष्ट स्थान रखता है क्योंकि इसकी स्थापत्य शैली दक्षिण भारतीय द्रविड़ और उत्तर भारतीय शैली का अद्भुत संगम है। यहाँ भगवान विष्णु के शयन स्वरूप रंगनाथ जी विराजमान हैं। मंदिर में एक विशाल स्वर्ण-स्तम्भ (ध्वज-स्तम्भ) है जो दक्षिण भारतीय मंदिरों की परम्परा का प्रतीक है।',
      en: 'Shri Rang Ji Mandir was built in 1851 by Seth Govind Das and Seth Radha Krishna Das. This temple holds a uniquely special place in Vrindavan as it is a magnificent blend of South Indian Dravidian and North Indian architectural styles — a rare and beautiful sight in this holy land. The presiding deity is Shri Rang Ji (Lord Ranganatha), Bhagwan Vishnu in His divine reclining form. The temple features a grand golden pillar (dhvaja-stambha), characteristic of South Indian temple tradition.',
    },
    special: {
      hi: [
        'दक्षिण भारतीय द्रविड़ और उत्तर भारतीय स्थापत्य का अद्भुत संगम',
        'विशाल स्वर्ण ध्वज-स्तम्भ',
        'वृन्दावन में दक्षिण भारतीय परम्परा का प्रतीक मंदिर',
        'सन् 1851 में निर्मित ऐतिहासिक मंदिर',
      ],
      en: [
        'Unique blend of South Indian Dravidian and North Indian architectural styles',
        'Grand golden flag pillar (dhvaja-stambha)',
        'Represents South Indian tradition in the heart of Vrindavan',
        'Built in 1851 — a historical treasure',
      ],
    },
    dosDonts: {
      dos: {
        hi: ['मंदिर की स्थापत्य सुंदरता का आनंद लें', 'शालीन वस्त्र पहनें'],
        en: ['Appreciate the magnificent architecture', 'Dress modestly'],
      },
      donts: {
        hi: ['मंदिर परिसर में अशिष्ट व्यवहार न करें'],
        en: ['Do not behave disrespectfully in the temple premises'],
      },
    },
  },

  {
    id: 'shahji',
    category: 'historical',
    image: null,
    name: {
      hi: 'शाहजी मंदिर',
      en: 'Shahji Mandir',
    },
    deity: {
      hi: 'श्री छोटे राधा रमण जी',
      en: 'Shri Chhote Radha Raman Ji',
    },
    location: {
      hi: 'वृन्दावन, उत्तर प्रदेश',
      en: 'Vrindavan, Uttar Pradesh',
    },
    timings: {
      morning: '8:00 AM – 12:00 PM',
      evening: '5:00 PM – 8:30 PM',
    },
    story: {
      hi: 'शाहजी मंदिर वृन्दावन के सबसे भव्य और कलात्मक मंदिरों में से एक है। यह मंदिर शाहजी (श्रीमन् शाह कुंदनलाल) ने 19वीं शताब्दी में बनवाया था। मंदिर में श्री छोटे राधा रमण जी विराजमान हैं। इस मंदिर की सबसे बड़ी विशेषता है — इसकी अत्यन्त सुन्दर संगमरमर की नक्काशी, बेल्जियन झूमर, और 15 फुट ऊँचे "बसंती कमरे" के स्तम्भ।',
      en: 'Shahji Mandir is one of the most magnificent and artistically beautiful temples in Vrindavan. It was built in the 19th century by Shahji (Shriman Shah Kundan Lal). The presiding deities are Shri Chhote Radha Raman Ji. The temple is especially renowned for its exquisite marble carvings, imported Belgian chandeliers, and the 15-foot high ornate pillars of the "Basanti Kamra" (Spring Chamber) — a masterpiece of devotional artistry.',
    },
    special: {
      hi: [
        'अत्यन्त सुन्दर संगमरमर की नक्काशी',
        'बेल्जियन झूमर — अद्भुत कला का नमूना',
        '15 फुट ऊँचे "बसंती कमरे" के भव्य स्तम्भ',
        '19वीं शताब्दी की कलात्मक शिल्प-कौशल का उत्कृष्ट उदाहरण',
      ],
      en: [
        'Exquisite marble carvings of extraordinary beauty',
        'Imported Belgian chandeliers — a marvel of art',
        '15-foot high ornate pillars of the "Basanti Kamra"',
        'An outstanding example of 19th century devotional artistry',
      ],
    },
    dosDonts: {
      dos: {
        hi: ['मंदिर की कलात्मकता को श्रद्धापूर्वक देखें', 'फर्श पर पैर रखने से पहले जूते उतारें'],
        en: ['Appreciate the artistic craftsmanship with reverence', 'Remove footwear before entering'],
      },
      donts: {
        hi: ['संगमरमर की नक्काशी को हाथ न लगाएँ'],
        en: ['Do not touch the marble carvings'],
      },
    },
  },

  // ─────────────────────────────────────────────────
  // C. MODERN
  // ─────────────────────────────────────────────────
  {
    id: 'iskcon',
    category: 'modern',
    image: null,
    name: {
      hi: 'ISKCON वृन्दावन (श्री कृष्ण बलराम मंदिर)',
      en: 'ISKCON Vrindavan (Shri Krishna Balaram Mandir)',
    },
    deity: {
      hi: 'श्री कृष्ण बलराम जी, श्री राधा श्यामसुन्दर जी, श्री गौर निताई जी',
      en: 'Shri Krishna Balaram, Shri Radha Shyamsundar, Shri Gaura Nitai',
    },
    location: {
      hi: 'रमण रेती, वृन्दावन',
      en: 'Raman Reti, Vrindavan',
    },
    timings: {
      morning: '4:15 AM – 1:00 PM',
      evening: '4:00 PM – 8:30 PM',
    },
    story: {
      hi: 'ISKCON वृन्दावन मंदिर की स्थापना सन् 1975 में परम पूजनीय श्रील अभयचरणारविन्द भक्तिवेदान्त स्वामी प्रभुपाद जी ने की थी। उन्होंने भगवद्गीता और श्रीमद् भागवतम् के ज्ञान को विश्व के कोने-कोने तक पहुँचाया। यह मंदिर विश्व भर के भक्तों का तीर्थ-स्थल बन गया है। यहाँ प्रतिदिन अनेक आरतियाँ होती हैं और प्रसाद का वितरण होता है।',
      en: 'ISKCON Vrindavan was founded in 1975 by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, who carried the message of Bhagavad Gita and Shrimad Bhagavatam to every corner of the world. This temple has become a pilgrimage destination for devotees worldwide. It hosts multiple aartis throughout the day and free prasadam (sacred food) distribution.',
    },
    special: {
      hi: [
        'श्रील प्रभुपाद जी द्वारा 1975 में स्थापित',
        'दिन में कई आरतियाँ — सर्व-सुलभ दर्शन',
        'श्रद्धालुओं के लिए गेस्ट हाउस और प्रसाद की सुविधा',
        'विश्व-विख्यात मंदिर — अन्तर्राष्ट्रीय भक्तों का तीर्थ',
      ],
      en: [
        'Founded in 1975 by Srila Prabhupada',
        'Multiple aartis throughout the day — accessible for all devotees',
        'Guesthouse and prasadam facilities for pilgrims',
        'World-renowned temple — pilgrimage destination for international devotees',
      ],
    },
    dosDonts: {
      dos: {
        hi: ['प्रातः मंगला आरती के दर्शन करें', 'मंदिर परिसर में प्रसाद ग्रहण करें', 'भजन-कीर्तन में भाग लें'],
        en: ['Attend early morning Mangala Aarti', 'Partake in prasadam in the temple premises', 'Participate in bhajan and kirtan'],
      },
      donts: {
        hi: ['मांस, मछली, अण्डा परिसर में न लाएँ', 'धूम्रपान निषिद्ध है'],
        en: ['Do not bring meat, fish, or eggs into the premises', 'Smoking is strictly prohibited'],
      },
    },
  },

  {
    id: 'prem-mandir',
    category: 'modern',
    image: null,
    name: {
      hi: 'प्रेम मंदिर',
      en: 'Prem Mandir',
    },
    deity: {
      hi: 'श्री राधा कृष्ण, श्री सीता राम',
      en: 'Shri Radha Krishna, Shri Sita Ram',
    },
    location: {
      hi: 'भक्ति नगर, वृन्दावन',
      en: 'Bhakti Nagar, Vrindavan',
    },
    timings: {
      morning: '5:30 AM – 12:00 PM',
      evening: '4:30 PM – 8:30 PM',
    },
    story: {
      hi: 'प्रेम मंदिर का निर्माण जगद्गुरु श्री कृपालु जी महाराज की प्रेरणा से हुआ और यह सन् 2012 में श्रद्धालुओं के लिए खुला। यह मंदिर इटालियन श्वेत संगमरमर से निर्मित है। मंदिर की दीवारों पर भगवान श्री कृष्ण और श्री राम की दिव्य लीलाओं के दृश्य पत्थर पर उकेरे गए हैं। रात में मंदिर का प्रकाश-प्रदर्शन (Light Show) अत्यन्त दर्शनीय और मनोहारी होता है।',
      en: 'Prem Mandir was built under the divine inspiration of Jagadguru Shri Kripalu Ji Maharaj and opened its doors to devotees in 2012. It is crafted entirely from Italian white marble. The walls of the temple are adorned with beautifully carved panels depicting the divine leelas (pastimes) of Bhagwan Shri Krishna and Shri Ram. The nightly illumination and light show is a breathtakingly beautiful and devotional experience.',
    },
    special: {
      hi: [
        'इटालियन श्वेत संगमरमर से निर्मित भव्य मंदिर',
        'दीवारों पर उकेरी गई श्री कृष्ण और श्री राम की लीलाएँ',
        'रात्रि में अत्यन्त सुन्दर प्रकाश-प्रदर्शन',
        '2012 में उद्घाटन — जगद्गुरु श्री कृपालु जी महाराज द्वारा निर्मित',
      ],
      en: [
        'Magnificent temple crafted from Italian white marble',
        'Beautifully carved panels of Shri Krishna\'s and Shri Ram\'s divine leelas',
        'Stunning light show illumination at night',
        'Opened in 2012 — built by Jagadguru Shri Kripalu Ji Maharaj',
      ],
    },
    dosDonts: {
      dos: {
        hi: ['रात्रि में प्रकाश-प्रदर्शन अवश्य देखें', 'मंदिर परिसर में शांति बनाए रखें'],
        en: ['Do witness the night light show', 'Maintain silence and serenity in the temple premises'],
      },
      donts: {
        hi: ['फोटोग्राफी के लिए मंदिर के नियमों का पालन करें'],
        en: ['Follow the temple rules regarding photography'],
      },
    },
  },

  {
    id: 'nidhivan',
    category: 'modern',
    image: null,
    name: {
      hi: 'निधिवन',
      en: 'Nidhivan',
    },
    deity: {
      hi: 'श्री राधा-कृष्ण (रासलीला स्थल)',
      en: 'Shri Radha-Krishna (sacred site of Raas Leela)',
    },
    location: {
      hi: 'वृन्दावन, उत्तर प्रदेश',
      en: 'Vrindavan, Uttar Pradesh',
    },
    timings: {
      morning: '6:00 AM – 5:00 PM',
      note: {
        hi: 'सायंकाल के बाद प्रवेश वर्जित है',
        en: 'Entry is strictly prohibited after evening',
      },
    },
    story: {
      hi: 'निधिवन वृन्दावन का अत्यन्त रहस्यमय और पवित्र वन है। ऐसी परम्परा है कि यहाँ प्रतिरात्रि भगवान श्री कृष्ण स्वयं रासलीला करते हैं। इस वन के वृक्ष रात में जोड़े में झुक जाते हैं और प्रातः फिर सीधे हो जाते हैं। ऐसी मान्यता है कि ये वृक्ष वे गोपियाँ हैं जो रासलीला में भाग लेती हैं। प्रतिरात्रि सायं की आरती के बाद यहाँ पान, मिष्ठान्न और श्रृंगार की सामग्री ठाकुर जी के लिए रखी जाती है, और प्रातः वह सब ग्रहण की हुई मिलती है। स्वामी हरिदास जी ने यहाँ अपनी साधना की थी और उन्हें यहीं बाँके बिहारी जी के दर्शन हुए थे।',
      en: 'Nidhivan is the most mysterious and sacred grove of Vrindavan. The sacred tradition holds that every night, Bhagwan Shri Krishna Himself performs the divine Raas Leela in this grove. The trees here bend in pairs at night and straighten again by morning. The devout belief is that these trees are the Gopis (divine companions of Krishna) who participate in the Raas Leela. Every night after evening aarti, paan (betel leaves), sweets, and shringar (offerings) are kept for Thakur Ji — and by morning, all are found to have been received. It was here that Swami Haridas Ji performed his devotional sadhana and received the divine darshan of Shri Banke Bihari Ji.',
    },
    special: {
      hi: [
        'नित्य रासलीला की पावन परम्परा',
        'सायंकाल के बाद प्रवेश वर्जित — सभी जीव-जंतु भी रात्रि में बाहर चले जाते हैं',
        'प्रतिरात्रि ठाकुर जी के लिए श्रृंगार सामग्री रखी जाती है',
        'स्वामी हरिदास जी की साधना-भूमि',
      ],
      en: [
        'Sacred tradition of nightly Raas Leela',
        'Entry strictly prohibited after evening — all creatures also leave at night',
        'Shringar (offerings) kept for Thakur Ji every night',
        'Sacred sadhana-bhoomi of Swami Haridas Ji',
      ],
    },
    dosDonts: {
      dos: {
        hi: ['श्रद्धा और विनम्रता से दर्शन करें', 'वन की पवित्रता का सम्मान करें'],
        en: ['Observe darshan with humility and reverence', 'Respect the sanctity of the sacred grove'],
      },
      donts: {
        hi: ['सायंकाल के बाद किसी भी स्थिति में प्रवेश न करें', 'वन में किसी चीज को क्षति न पहुँचाएँ'],
        en: ['Never enter after evening under any circumstances', 'Do not cause any harm to the sacred grove'],
      },
    },
  },
];

export default temples;
