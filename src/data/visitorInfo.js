export const visitorInfo = {
  howToReach: {
    hi: {
      title: 'कैसे पहुँचें',
      sections: [
        {
          mode: '🚂 रेल मार्ग',
          details:
            'निकटतम रेलवे स्टेशन: मथुरा जंक्शन (वृन्दावन से 12 किमी)। मथुरा जंक्शन से वृन्दावन के लिए ऑटो रिक्शा, ई-रिक्शा या टेम्पो सुलभ हैं। दिल्ली (150 किमी), आगरा (60 किमी), जयपुर आदि से ट्रेनें सुलभ हैं।',
        },
        {
          mode: '🚌 सड़क मार्ग',
          details:
            'दिल्ली से वृन्दावन की दूरी लगभग 150-180 किमी है (NH 19 से)। दिल्ली के आनंद विहार, कश्मीरी गेट और आईएसबीटी से नियमित बसें उपलब्ध हैं। दिल्ली से कार/टैक्सी द्वारा लगभग 3-4 घंटे।',
        },
        {
          mode: '✈️ वायु मार्ग',
          details:
            'निकटतम हवाई अड्डे: इंदिरा गाँधी अन्तर्राष्ट्रीय हवाई अड्डा, दिल्ली (लगभग 180 किमी) और आगरा हवाई अड्डा (लगभग 70 किमी)। हवाई अड्डे से टैक्सी या बस द्वारा पहुँचा जा सकता है।',
        },
      ],
    },
    en: {
      title: 'How to Reach',
      sections: [
        {
          mode: '🚂 By Train',
          details:
            'Nearest railway station: Mathura Junction (12 km from Vrindavan). Auto rickshaws, e-rickshaws, and tempos are easily available from Mathura Junction to Vrindavan. Trains from Delhi (150 km), Agra (60 km), Jaipur are easily available.',
        },
        {
          mode: '🚌 By Road',
          details:
            'Vrindavan is approximately 150-180 km from Delhi via NH 19. Regular buses are available from Anand Vihar, Kashmiri Gate, and ISBT in Delhi. By car/taxi from Delhi, it takes approximately 3-4 hours.',
        },
        {
          mode: '✈️ By Air',
          details:
            'Nearest airports: Indira Gandhi International Airport, Delhi (approx. 180 km) and Agra Airport (approx. 70 km). Taxis or buses are available from the airport.',
        },
      ],
    },
  },

  bestTime: {
    hi: {
      title: 'कब आएँ',
      content:
        'वृन्दावन यात्रा के लिए सबसे उत्तम समय अक्टूबर से मार्च तक है, जब मौसम सुहावना होता है। ग्रीष्म काल (अप्रैल-जून) में तापमान अत्यधिक रहता है — इस दौरान शीतल वस्त्र और पर्याप्त जल-पान आवश्यक है। मानसून (जुलाई-सितम्बर) में हरियाली अत्यन्त सुन्दर होती है परन्तु सड़कों पर पानी भर सकता है।',
      seasons: [
        { name: 'शरद-शीत (अक्टूबर-मार्च)', desc: 'सर्वोत्तम समय — सुहावना मौसम', icon: '⭐' },
        { name: 'ग्रीष्म (अप्रैल-जून)', desc: 'गर्मी अधिक — सुबह जल्दी दर्शन करें', icon: '☀️' },
        { name: 'वर्षा (जुलाई-सितम्बर)', desc: 'हरियाली सुन्दर — वर्षा से सावधान रहें', icon: '🌧️' },
      ],
    },
    en: {
      title: 'Best Time to Visit',
      content:
        'The best time for a Vrindavan yatra (pilgrimage) is October to March, when the weather is pleasant. Summers (April-June) can be very hot — cool clothing and adequate water intake are essential. During Monsoon (July-September) the greenery is beautiful but roads may be waterlogged.',
      seasons: [
        { name: 'Autumn-Winter (Oct-March)', desc: 'Best time — pleasant weather', icon: '⭐' },
        { name: 'Summer (April-June)', desc: 'Very hot — visit early in the morning', icon: '☀️' },
        { name: 'Monsoon (July-Sep)', desc: 'Beautiful greenery — be cautious of rains', icon: '🌧️' },
      ],
    },
  },

  festivals: {
    hi: {
      title: 'प्रमुख उत्सव',
      list: [
        {
          name: 'श्री कृष्ण जन्माष्टमी',
          time: 'अगस्त / सितम्बर',
          desc: 'भगवान श्री कृष्ण का प्राकट्य उत्सव — वृन्दावन में असाधारण उल्लास और भव्य आयोजन',
          icon: '🎊',
        },
        {
          name: 'होली (फाल्गुन)',
          time: 'मार्च',
          desc: 'वृन्दावन की होली विश्व-प्रसिद्ध है। बरसाना की लट्ठमार होली और वृन्दावन की फूलों की होली अत्यन्त दर्शनीय है',
          icon: '🌈',
        },
        {
          name: 'श्री राधाष्टमी',
          time: 'अगस्त / सितम्बर',
          desc: 'श्रीमती राधा रानी का प्राकट्य उत्सव — भव्य उत्सव और विशेष दर्शन',
          icon: '🌸',
        },
        {
          name: 'गुरु पूर्णिमा',
          time: 'जुलाई',
          desc: 'गुरु-शिष्य परम्परा का पावन उत्सव — विशेष पूजन और भजन',
          icon: '🙏',
        },
        {
          name: 'कार्तिक मास',
          time: 'अक्टूबर / नवम्बर',
          desc: 'भगवान की पूजा का विशेष मास — पूरे माह विशेष आयोजन, दीपदान और परिक्रमा',
          icon: '🪔',
        },
        {
          name: 'दीपावली (गोवर्धन पूजा)',
          time: 'अक्टूबर / नवम्बर',
          desc: 'गोवर्धन पूजा और अन्नकूट उत्सव — श्री गिरिराज जी को 56 भोग का अर्पण',
          icon: '✨',
        },
      ],
    },
    en: {
      title: 'Major Festivals',
      list: [
        {
          name: 'Shri Krishna Janmashtami',
          time: 'August / September',
          desc: 'The divine appearance day of Bhagwan Shri Krishna — extraordinary celebrations and grand events in Vrindavan',
          icon: '🎊',
        },
        {
          name: 'Holi (Phalgun)',
          time: 'March',
          desc: 'Vrindavan\'s Holi is world-famous. The Lathmar Holi of Barsana and the Phool Wali Holi (Flower Holi) are especially magnificent',
          icon: '🌈',
        },
        {
          name: 'Shri Radhashtami',
          time: 'August / September',
          desc: 'The divine appearance day of Shrimati Radha Rani — grand celebrations and special darshan',
          icon: '🌸',
        },
        {
          name: 'Guru Purnima',
          time: 'July',
          desc: 'The sacred festival of the Guru-disciple tradition — special worship and devotional singing',
          icon: '🙏',
        },
        {
          name: 'Kartik Maas',
          time: 'October / November',
          desc: 'The special month of worship of Bhagwan — month-long special events, deepdaan (lamp offerings), and parikrama',
          icon: '🪔',
        },
        {
          name: 'Diwali (Govardhan Puja)',
          time: 'October / November',
          desc: 'Govardhan Puja and Annakoot festival — offering of 56 bhog (items) to Shri Giriraj Ji',
          icon: '✨',
        },
      ],
    },
  },

  dosDonts: {
    hi: {
      dos: [
        'मंदिरों में प्रवेश से पहले जूते-चप्पल उतारें',
        'शालीन और मर्यादित वस्त्र पहनें',
        'आरती और दर्शन के समय पूर्ण श्रद्धा बनाए रखें',
        'गर्मियों में पर्याप्त जल-पान करें और पानी की बोतल साथ रखें',
        'बन्दरों (लंगूरों) के प्रति सम्मानजनक व्यवहार करें',
        'यमुना जी के दर्शन और आरती में भाग लें',
        'स्थानीय प्रसाद (पेड़ा, माखन-मिश्री) अवश्य ग्रहण करें',
        'परिक्रमा मार्ग पर नंगे पैर चलने की परम्परा का पालन करें',
      ],
      donts: [
        'मंदिरों में मोबाइल फोन का उपयोग — पहले अनुमति लें',
        'कुछ मंदिरों में फोटोग्राफी वर्जित है — नियमों का पालन करें',
        'हाथ में खाना खुला न रखें — बन्दर छीन सकते हैं',
        'पवित्र स्थलों पर अशिष्ट व्यवहार न करें',
        'मंदिर परिसर में चमड़े की वस्तुएँ न लाएँ',
        'पवित्र ग्रोव (निधिवन, सेवा कुञ्ज) में सूर्यास्त के बाद प्रवेश न करें',
      ],
    },
    en: {
      dos: [
        'Remove footwear before entering all temples',
        'Dress modestly and respectfully',
        'Maintain complete reverence during aarti and darshan',
        'Carry water bottles especially in summer',
        'Be respectful towards the monkeys (langurs) — do not tease them',
        'Participate in the Yamuna Ji darshan and aarti ceremony',
        'Do try the local prasadam (peda sweets, makhan-mishri)',
        'Follow the tradition of walking barefoot on the parikrama path',
      ],
      donts: [
        'Mobile phone use inside temples — always seek permission first',
        'Photography is restricted in certain temples — follow the rules',
        'Do not carry food openly — monkeys may snatch it',
        'Do not behave disrespectfully at sacred sites',
        'Do not bring leather items into temple premises',
        'Do not enter sacred groves (Nidhivan, Seva Kunj) after sunset',
      ],
    },
  },

  localTips: {
    hi: {
      title: 'स्थानीय सुझाव',
      tips: [
        { icon: '🛺', text: 'ऑटो/ई-रिक्शा किराया: वृन्दावन के भीतर ₹20-₹50 प्रति सवारी; मथुरा से ₹50-₹100' },
        { icon: '🍬', text: 'स्थानीय प्रसाद: मथुरा के पेड़े, बाँके बिहारी का माखन-मिश्री अवश्य लें' },
        { icon: '🕐', text: 'मंगला आरती सबसे पावन — सूर्योदय से पहले जागें और प्रातः दर्शन का लाभ लें' },
        { icon: '🧣', text: 'महिला तीर्थयात्री: दुपट्टा या स्कार्फ साथ रखें — मंदिरों में सिर ढकने की परम्परा' },
        { icon: '💧', text: 'गर्मियों में प्रातः 6-10 बजे और सायं 6-9 बजे दर्शन करें — दोपहर में गर्मी बहुत अधिक होती है' },
        { icon: '🏨', text: 'ठहरने की व्यवस्था: ISKCON गेस्ट हाउस, धर्मशाला और होटल सभी उपलब्ध हैं' },
        { icon: '📍', text: 'परिक्रमा मार्ग: बाँके बिहारी → राधा वल्लभ → राधा दामोदर → केसी घाट — पैदल परिक्रमा सुगम है' },
      ],
    },
    en: {
      title: 'Local Tips',
      tips: [
        { icon: '🛺', text: 'Auto/E-rickshaw fares: ₹20-₹50 within Vrindavan; ₹50-₹100 from Mathura' },
        { icon: '🍬', text: 'Local prasadam: Mathura\'s peda sweets, Banke Bihari\'s makhan-mishri are a must' },
        { icon: '🕐', text: 'Mangala Aarti is the most sacred — wake before sunrise and benefit from morning darshan' },
        { icon: '🧣', text: 'Women pilgrims: Carry a dupatta or scarf — the tradition of covering the head in temples' },
        { icon: '💧', text: 'In summer, do darshan at 6-10 AM and 6-9 PM — afternoons are very hot' },
        { icon: '🏨', text: 'Accommodation: ISKCON guesthouse, dharamshalas, and hotels are all available' },
        { icon: '📍', text: 'Parikrama route: Banke Bihari → Radha Vallabh → Radha Damodar → Kesi Ghat — easy walking parikrama' },
      ],
    },
  },
};

