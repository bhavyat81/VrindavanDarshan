export const parikramaRoutes = [
  {
    id: 'short',
    name: {
      hi: 'लघु परिक्रमा',
      en: 'Short Parikrama',
    },
    description: {
      hi: '5 प्रमुख मंदिरों की परिक्रमा — लगभग 3 किमी, 2-3 घंटे',
      en: '5 major temples — approx. 3 km, 2-3 hours',
    },
    totalDistance: '~3 km',
    totalTime: {
      hi: '2–3 घंटे',
      en: '2–3 hours',
    },
    stops: [
      {
        templeId: 'banke-bihari',
        order: 1,
        distanceToNext: '0.3 km',
        timeToNext: {
          hi: '5 मिनट',
          en: '5 min',
        },
      },
      {
        templeId: 'radha-vallabh',
        order: 2,
        distanceToNext: '0.4 km',
        timeToNext: {
          hi: '7 मिनट',
          en: '7 min',
        },
      },
      {
        templeId: 'radha-raman',
        order: 3,
        distanceToNext: '0.5 km',
        timeToNext: {
          hi: '10 मिनट',
          en: '10 min',
        },
      },
      {
        templeId: 'govind-dev',
        order: 4,
        distanceToNext: '0.8 km',
        timeToNext: {
          hi: '15 मिनट',
          en: '15 min',
        },
      },
      {
        templeId: 'iskcon',
        order: 5,
        distanceToNext: null,
        timeToNext: null,
      },
    ],
  },
  {
    id: 'full',
    name: {
      hi: 'पूर्ण परिक्रमा',
      en: 'Full Parikrama',
    },
    description: {
      hi: '10+ मंदिरों और लीला स्थलों की परिक्रमा — लगभग 8 किमी, 5-6 घंटे',
      en: '10+ temples and leela sthals — approx. 8 km, 5-6 hours',
    },
    totalDistance: '~8 km',
    totalTime: {
      hi: '5–6 घंटे',
      en: '5–6 hours',
    },
    stops: [
      {
        templeId: 'banke-bihari',
        order: 1,
        distanceToNext: '0.3 km',
        timeToNext: {
          hi: '5 मिनट',
          en: '5 min',
        },
      },
      {
        templeId: 'radha-vallabh',
        order: 2,
        distanceToNext: '0.4 km',
        timeToNext: {
          hi: '7 मिनट',
          en: '7 min',
        },
      },
      {
        templeId: 'radha-raman',
        order: 3,
        distanceToNext: '0.5 km',
        timeToNext: {
          hi: '10 मिनट',
          en: '10 min',
        },
      },
      {
        templeId: 'govind-dev',
        order: 4,
        distanceToNext: '0.3 km',
        timeToNext: {
          hi: '5 मिनट',
          en: '5 min',
        },
      },
      {
        templeId: 'madan-mohan',
        order: 5,
        distanceToNext: '0.5 km',
        timeToNext: {
          hi: '10 मिनट',
          en: '10 min',
        },
      },
      {
        templeId: 'radha-damodar',
        order: 6,
        distanceToNext: '0.6 km',
        timeToNext: {
          hi: '12 मिनट',
          en: '12 min',
        },
      },
      {
        templeId: 'gopinath',
        order: 7,
        distanceToNext: '0.4 km',
        timeToNext: {
          hi: '8 मिनट',
          en: '8 min',
        },
      },
      {
        templeId: 'jugal-kishore',
        order: 8,
        distanceToNext: '0.5 km',
        timeToNext: {
          hi: '10 मिनट',
          en: '10 min',
        },
      },
      {
        templeId: 'rang-ji',
        order: 9,
        distanceToNext: '0.7 km',
        timeToNext: {
          hi: '15 मिनट',
          en: '15 min',
        },
      },
      {
        templeId: 'iskcon',
        order: 10,
        distanceToNext: '1.0 km',
        timeToNext: {
          hi: '20 मिनट',
          en: '20 min',
        },
      },
      {
        templeId: 'prem-mandir',
        order: 11,
        distanceToNext: null,
        timeToNext: null,
      },
    ],
  },
];
