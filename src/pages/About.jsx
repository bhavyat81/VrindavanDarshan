import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { language, t } = useLanguage();

  const content = {
    hi: {
      intro: `श्री वृन्दावन धाम — यह वह पवित्र भूमि है जहाँ साक्षात् भगवान श्री कृष्ण ने अपनी बाल-लीलाएँ और रास-लीलाएँ रचीं। यह भूमि केवल एक स्थान नहीं, यह स्वयं भगवान का विग्रह-स्वरूप है।`,
      sections: [
        {
          title: 'वृन्दावन का महात्म्य',
          icon: '✨',
          text: `श्रीमद् भागवतम् और विभिन्न पुराणों में वृन्दावन की महिमा का विस्तार से वर्णन है। ऋषि-मुनियों और संतों ने इस भूमि को "गोलोक वृन्दावन" का पृथ्वी पर अवतरण माना है। यहाँ का कण-कण श्री कृष्ण-प्रेम से सराबोर है।`,
        },
        {
          title: 'वृन्दावन का इतिहास',
          icon: '📜',
          text: `वृन्दावन में भगवान श्री कृष्ण ने अपनी बाल्यावस्था में लीलाएँ कीं। 16वीं शताब्दी में श्री चैतन्य महाप्रभु जी की प्रेरणा से षट् गोस्वामियों (रूप, सनातन, जीव, गोपाल भट्ट, रघुनाथ दास, रघुनाथ भट्ट) ने यहाँ अनेक मंदिरों की स्थापना की और वृन्दावन को पुनः तीर्थ के रूप में प्रतिष्ठित किया।`,
        },
        {
          title: 'वृन्दावन की विशेषता',
          icon: '🌸',
          text: `वृन्दावन यमुना जी के तट पर स्थित है। यहाँ 5000 से अधिक मंदिर हैं। निधिवन, सेवा कुञ्ज, केसी घाट, और गोवर्धन — इन लीला-स्थलों पर भक्त अपने आराध्य के दिव्य स्पर्श का अनुभव करते हैं।`,
        },
        {
          title: 'इस एप्लीकेशन के बारे में',
          icon: '📱',
          text: `यह एप्लीकेशन वृन्दावन के तीर्थयात्रियों की सहायता के लिए भक्ति-भाव से निर्मित की गई है। सभी जानकारी प्रामाणिक स्रोतों और परम्परागत मान्यताओं के आधार पर प्रस्तुत की गई है। इस एप्लीकेशन का उद्देश्य केवल सेवा और मार्गदर्शन है।`,
        },
      ],
      dedication: 'श्री राधा-कृष्ण के श्री चरणों में सादर समर्पित 🙏',
    },
    en: {
      intro: `Shri Vrindavan Dham — this is the sacred land where Bhagwan Shri Krishna Himself performed His childhood leelas and divine Raas Leelas. This land is not merely a place — it is the very embodiment of Bhagwan.`,
      sections: [
        {
          title: 'Glory of Vrindavan',
          icon: '✨',
          text: `The glory of Vrindavan is described in great detail in Shrimad Bhagavatam and the Puranas. Sages and saints have regarded this land as the earthly descent of Goloka Vrindavan (the divine abode of Bhagwan). Every particle of this sacred land is drenched in Shri Krishna's divine love.`,
        },
        {
          title: 'History of Vrindavan',
          icon: '📜',
          text: `Bhagwan Shri Krishna performed His childhood leelas in Vrindavan. In the 16th century, inspired by Shri Chaitanya Mahaprabhu Ji, the Six Goswamis (Rupa, Sanatan, Jiva, Gopal Bhatta, Raghunath Das, Raghunath Bhatta) established numerous temples here and revived Vrindavan as a great pilgrimage site.`,
        },
        {
          title: 'Special Features of Vrindavan',
          icon: '🌸',
          text: `Vrindavan is situated on the banks of Yamuna Ji. It is home to over 5,000 temples. At sacred leela sthals like Nidhivan, Seva Kunj, Kesi Ghat, and Govardhan, devotees experience the divine touch of their beloved Bhagwan.`,
        },
        {
          title: 'About This Application',
          icon: '📱',
          text: `This application has been created with devotion to assist pilgrims visiting Vrindavan. All information is presented based on authentic sources and traditional accounts. The sole purpose of this application is service and guidance for devotees.`,
        },
      ],
      dedication: 'Humbly dedicated at the lotus feet of Shri Radha-Krishna 🙏',
    },
  };

  const data = content[language];

  return (
    <main className="page container">
      <div className="page-header">
        <h1 className="page-title">{t.aboutPage.title}</h1>
        <p className="page-subtitle">{t.aboutPage.subtitle}</p>
      </div>

      <div className="about-intro">
        <div className="about-om" aria-hidden="true">ॐ</div>
        <p className="about-intro__text">{data.intro}</p>
      </div>

      <div className="about-sections">
        {data.sections.map((section, i) => (
          <div className="about-card" key={i}>
            <h2 className="about-card__title">
              <span>{section.icon}</span> {section.title}
            </h2>
            <p className="about-card__text">{section.text}</p>
          </div>
        ))}
      </div>

      <div className="about-dedication">
        <p>{data.dedication}</p>
      </div>
    </main>
  );
}
