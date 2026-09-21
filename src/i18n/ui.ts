import type { Locale } from './config';

export type NavItem = { id: string; label: string };

export type SectionCopy = { eyebrow: string; title: string; desc: string };

export type TimeSlotCard = { title: string; level: string; time: string; bullets: string[] };

export type DayRow = { label: string; text: string };

export type SourceLink = { name: string; url: string; note: string };

export type UI = {
  meta: { title: string; description: string };
  hero: {
    badge: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ratingSuffix: string;
    openHours: string;
  };
  nav: NavItem[];
  ctaButton: string;
  labels: {
    jarak: string;
    kadar: string;
    kapasiti: string;
    langkah: string;
    petua: string;
    anggaranKos: string;
    lihatPeta: string;
    bukaMaps: string;
    tableKategori: string;
    tableYuran: string;
    tableNota: string;
    foto: string;
    bukaGambar: string;
    tutupGambar: string;
    gambarSebelum: string;
    gambarSeterusnya: string;
    bahagianPasar: string;
    galeriGambar: string;
    tiketYuran: string;
    petaLokasi: string;
    makananBerdekatan: string;
    tempatMenarik: string;
    sumberRasmi: string;
    pengiktirafan: string;
  };
  priceLabel: Record<'low' | 'mid' | 'high', string>;
  floorLabel: Record<'bawah' | 'atas', string>;
  modeLabel: Record<'airport' | 'boat' | 'bus' | 'taxi' | 'grab' | 'walk' | 'car', { label: string; icon: string }>;
  sections: {
    bahagian: SectionCopy;
    galeri: SectionCopy;
    tiket: SectionCopy & { tipsTitle: string; tips: string[] };
    masa: SectionCopy & { cards: TimeSlotCard[]; dayTitle: string; days: DayRow[]; climateTitle: string; climate: string };
    parkir: SectionCopy;
    pengangkutan: SectionCopy;
    makanan: SectionCopy;
    tempatMenarik: SectionCopy;
    peta: SectionCopy & { mapsTitle: string };
    faq: SectionCopy;
    sumber: SectionCopy & { links: SourceLink[] };
  };
  footer: {
    about: string;
    quickTitle: string;
    disclaimerTitle: string;
    disclaimer: string[];
    copyright: string;
    backToTop: string;
    addressLabel: string;
  };
};

export const UI: Record<Locale, UI> = {
  ms: {
    meta: {
      title: 'Pasar Sentral Sibu Panduan Pelancongan',
      description:
        'Pasar tertutup terbesar di Malaysia dengan lebih 1,100 gerai di Jalan Channel, Sibu, Sarawak. Waktu operasi 6:00 AM – 6:00 PM, masuk percuma, panduan bahagian pasar, parkir, pengangkutan, makanan & Kek Lapis Sarawak.',
    },
    hero: {
      badge: 'Sibu · Sarawak · Bumi Kenyalang',
      subtitle: 'Pasar Tertutup TERBESAR di Malaysia · Lebih 1,100 Gerai',
      ctaPrimary: 'Teroka Bahagian',
      ctaSecondary: 'Cara Ke Sana',
      ratingSuffix: 'ulasan Google',
      openHours: '6:00 AM – 6:00 PM · Setiap hari',
    },
    nav: [
      { id: 'info-penting', label: 'Info Penting' },
      { id: 'bahagian', label: 'Bahagian Pasar' },
      { id: 'galeri', label: 'Galeri' },
      { id: 'tiket', label: 'Tiket & Yuran' },
      { id: 'masa-terbaik', label: 'Masa Terbaik' },
      { id: 'parkir', label: 'Parkir' },
      { id: 'pengangkutan', label: 'Pengangkutan' },
      { id: 'makanan', label: 'Makanan' },
      { id: 'tempat-menarik', label: 'Tempat Menarik' },
      { id: 'peta', label: 'Peta' },
      { id: 'faq', label: 'FAQ' },
    ],
    ctaButton: 'Lawati Kami',
    labels: {
      jarak: 'Jarak dari pasar',
      kadar: 'Kadar Bayaran',
      kapasiti: 'Kapasiti',
      langkah: 'Langkah-langkah',
      petua: '💡 Petua Tempatan',
      anggaranKos: 'Anggaran kos',
      lihatPeta: 'Lihat peta',
      bukaMaps: 'Buka dalam Google Maps',
      tableKategori: 'Kategori Pengunjung',
      tableYuran: 'Yuran Masuk',
      tableNota: 'Nota & Catatan',
      foto: 'Foto #',
      bukaGambar: 'Buka gambar',
      tutupGambar: 'Tutup gambar',
      gambarSebelum: 'Gambar sebelumnya',
      gambarSeterusnya: 'Gambar seterusnya',
      bahagianPasar: 'Bahagian Pasar',
      galeriGambar: 'Galeri Gambar',
      tiketYuran: 'Tiket & Yuran',
      petaLokasi: 'Peta Lokasi',
      makananBerdekatan: 'Makanan Berdekatan',
      tempatMenarik: 'Tempat Menarik',
      sumberRasmi: 'Sumber Rasmi',
      pengiktirafan: 'Pengiktirafan',
    },
    priceLabel: { low: 'Ekonomi', mid: 'Sederhana', high: 'Mewah' },
    floorLabel: { bawah: 'Tingkat Bawah', atas: 'Tingkat Atas' },
    modeLabel: {
      airport: { label: 'Kapal Terbang (SBW)', icon: '✈' },
      boat: { label: 'Bot Ekspres', icon: '🚢' },
      bus: { label: 'Bas Bandar', icon: '🚌' },
      taxi: { label: 'Teksi Bandar', icon: '🚕' },
      grab: { label: 'Grab / E-Hailing', icon: '📱' },
      walk: { label: 'Berjalan Kaki', icon: '🚶' },
      car: { label: 'Kereta Sendiri', icon: '🚗' },
    },
    sections: {
      bahagian: {
        eyebrow: '6 Bahagian Utama · 2 Tingkat',
        title: 'Susun atur Pasar Sentral Sibu',
        desc: 'Bangunan 2 tingkat yang menggabungkan bekas Pasar Basah dan Pasar Lembangan (Dayak) asal. Aras bawah untuk hasil segar & basah, aras atas untuk pakaian, makanan, dan Kek Lapis. Navigasi laluan yang luas & berudara baik — sebuah muzium hidup budaya Sibu.',
      },
      galeri: {
        eyebrow: 'Galeri Gambar · Klik untuk Besar',
        title: 'Sekitar Pasar Sentral Sibu',
        desc: 'Gambar sebenar Pasar Sentral Sibu — suasana gerai hasil hutan, mi kampua tingkat atas, tradisi ayam dibalut surat khabar, dan landskap Sungai Rejang yang mengiringi kunjungan anda di bandar Angsa (Swan Town).',
      },
      tiket: {
        eyebrow: 'Tiket & Yuran Masuk',
        title: 'Kemasukan adalah PERCUMA untuk SEMUA',
        desc: 'Tiada bayaran masuk dikenakan ke atas semua kategori pengunjung. Pasar Sentral Sibu adalah PASAR AWAM yang dibiayai oleh Majlis Bandaraya Sibu (MBS) untuk rakyat dan pelancong. Anda hanya membayar untuk barang belian, parkir, dan makanan sahaja.',
        tipsTitle: '💡 Tips Belian Cekap',
        tips: [
          'Bawa WANG TUNAI secukupnya — kebanyakan gerai kecil tak terima kad.',
          'Tawar harga secara sopan — biasa untuk buah, sayur, dan pakaian.',
          'Datang sebelum 10 AM untuk pilihan hasil segar PALING lengkap.',
          'Minta resit jika beli Kek Lapis atau barang untuk dihantar.',
          'Sediakan duit syiling — banyak diperlukan untuk belian kecil (RM0.20–RM5).',
        ],
      },
      masa: {
        eyebrow: 'Masa Terbaik & Tempoh Lawatan',
        title: 'Bila & berapa lama sebaiknya melawat Pasar Sentral Sibu?',
        desc: 'Pasar dibuka sepanjang hari, namun jangka masa tertentu menawarkan pengalaman yang lebih baik. Sibu berada di zon iklim ekuatori — pagi sejuk dan petang sering kali hujan rencana di musim utara.',
        cards: [
          {
            title: 'Waktu Pagi Segar',
            level: 'TERBAIK · ⭐⭐⭐⭐⭐',
            time: '7:00 AM – 10:00 AM',
            bullets: [
              'Hasil segar baru tiba dari pekan & sungai Rejang',
              'Buah-buahan pilihan, ikan sungai baru diturunkan',
              'Kurang sesak — ruang luas untuk memilih',
              'Udara pagi Sibu masih sejuk & nyaman berjalan',
            ],
          },
          {
            title: 'Makan & Mi Kampua',
            level: 'Bagus · ⭐⭐⭐⭐',
            time: '11:00 AM – 2:00 PM',
            bullets: [
              'Food court tingkat atas penuh operasi',
              'Masa terbaik cuba Mi Kampua + Sup Bola',
              'Beli Kek Lapis sebelum pilihan habis',
              'Parkir jalan lebih mudah selepas 11 pagi',
            ],
          },
          {
            title: 'Tempoh Disyorkan',
            level: 'Kesesuaian · ⭐⭐⭐⭐⭐',
            time: '2 – 3 jam santai',
            bullets: [
              '1 jam: melintas pantas & beli keperluan sahaja',
              '2.5 jam: pilih teliti + cuba makanan + beli Kek Lapis',
              'Gabung Tua Pek Kong + Rejang Esplanade = setengah hari',
              'Gabung Rumah Panjang Bawang Assan = sehari penuh',
            ],
          },
        ],
        dayTitle: '📅 Hari paling sesuai untuk melawat',
        days: [
          { label: 'Isnin – Jumaat:', text: 'Pilihan lengkap, kurang pelancong, ruang luas untuk memilih & tawar harga.' },
          { label: 'Sabtu & Ahad:', text: 'Paling MERIAH! Ramai keluarga tempatan & pelancong. Cuba elak puncak 9–11 pagi.' },
          { label: 'Cuti Umum & Gawai (Jun):', text: 'Beberapa gerai etnik tutup tetapi ada gerai khas jual hasil perayaan.' },
          { label: 'Musim Durian (Nov–Jan):', text: 'Waktu TERBAIK jika peminat Raja Buah — gerai khas di depan pasar!' },
        ],
        climateTitle: '🌤️ Iklim Sibu · Bumi Kenyalang',
        climate:
          'Suhu sepanjang tahun antara 23°C – 33°C dengan kelembapan melebihi 80%. Musim hujan utama November – Februari (hujan petang). Musim kemarau lebih jelas Mei – Ogos. Bawa payung mini untuk lindungan matahari & hujan, serta botol air minuman — berjalan 2 jam di pasar haba badan akan naik!',
      },
      parkir: {
        eyebrow: 'Maklumat Parkir Kenderaan',
        title: 'Di mana hendak letak kereta berhampiran Pasar Sentral Sibu?',
        desc: 'Parkir di Jalan Channel adalah terhad dan cepat penuh pada waktu pagi. Berikut adalah pilihan tempat parkir terbaik berhampiran Pasar Sentral Sibu untuk rujukan anda.',
      },
      pengangkutan: {
        eyebrow: 'Pengangkutan Terperinci',
        title: '7 cara ke Pasar Sentral Sibu',
        desc: 'Dari Lapangan Terbang Sibu (SBW), stesen bas, Terminal Bot Ekspres, dan sekitar bandar. Panduan langkah demi langkah lengkap termasuk anggaran kos dan petua tempatan yang sebenarnya.',
      },
      makanan: {
        eyebrow: 'Makanan Berdekatan · 6 Pilihan Terbaik',
        title: 'Di mana hendak makan & minum berhampiran pasar?',
        desc: 'Dari food court tingkat atas pasar (Mi Kampua RM5!), ke lorong kedai kopi Fuzhou di kaki bukit Tua Pek Kong, ke restoran masakan ulam hutan. Semua pilihan dalam 700m dari Pasar Sentral Sibu.',
      },
      tempatMenarik: {
        eyebrow: 'Tempat Menarik Berdekatan',
        title: 'Gabungkan lawatan anda di Sibu',
        desc: 'Pasar Sentral terletak di jantung Bandar Sibu. Manfaatkan lokasi strategik untuk meneroka tempat menarik berhampiran — dari Kuil Tua Pek Kong di bukit, ke Pusat Warisan Sibu, Rumah Panjang Iban di sungai Rejang, sehingga menara membeli-belah Wisma Sanyan.',
      },
      peta: {
        eyebrow: 'Peta Lokasi Interaktif',
        title: 'Cari lokasi Pasar Sentral Sibu di Google Maps',
        desc: 'Navigasi terus dari lokasi semasa anda ke Pasar Sentral Sibu di Jalan Channel, bertentangan Terminal Bot Ekspres Sibu, Sarawak.',
        mapsTitle: 'Peta Pasar Sentral Sibu, Sarawak',
      },
      faq: {
        eyebrow: 'Soalan Lazim',
        title: 'FAQ · Soalan yang sering ditanya tentang Pasar Sentral Sibu',
        desc: 'Jawapan lengkap untuk persoalan paling kerap diajukan oleh pelawat sebelum dan semasa melawat Pasar Sentral Sibu — waktu operasi, cara tawar harga, makanan wajib cuba, parkir, petua bergambar, hinggalah musim durian Sarawak.',
      },
      sumber: {
        eyebrow: 'Rujukan Rasmi',
        title: 'Sumber rasmi & pautan luar',
        desc: 'Laman ini ialah panduan pelawat tidak rasmi. Sila rujuk pautan berikut untuk pengesahan maklumat terkini sebelum merancang perjalanan ke Sibu.',
        links: [
          { name: 'Google Maps — Pasar Sentral Sibu', url: 'https://maps.app.goo.gl/HYSyTqsXHgBokYvu5', note: 'Lokasi, ulasan & navigasi' },
          { name: 'Majlis Bandaraya Sibu (SMC)', url: 'https://smc.gov.my/', note: 'Pengurusan pasar awam Sibu' },
          { name: 'Sarawak Tourism Board', url: 'https://sarawaktourism.com/', note: 'Maklumat pelancongan negeri' },
        ],
      },
    },
    footer: {
      about:
        'Panduan pelawat tidak rasmi untuk Pasar Sentral Sibu — pasar tertutup terbesar di Malaysia, terletak di Jalan Channel bertentangan Terminal Bot Ekspres Sibu. Meneroka hasil hutan Sarawak, warisan Fuzhou, dan cita rasa mi kampua yang tersohor.',
      quickTitle: 'Pautan Pantas',
      disclaimerTitle: 'Penafian Tidak Rasmi',
      disclaimer: [
        'Laman web ini adalah inisiatif panduan pelawat bebas dan TIDAK dikendalikan, dikeluarkan, atau diwakili oleh pihak pengurusan Pasar Sentral Sibu, Majlis Bandaraya Sibu (MBS), Tourism Sarawak, atau mana-mana agensi kerajaan Persekutuan atau Negeri Sarawak.',
        'Rujuk pihak pengurusan pasar di talian +60 84-313 449 atau laman web rasmi Sarawak Tourism Board untuk pengesahan maklumat terkini sebelum merancang perjalanan anda ke Sibu.',
      ],
      copyright: 'Panduan pelawat tidak rasmi · Swan Town, Sarawak.',
      backToTop: 'Kembali ke atas',
      addressLabel: 'Alamat',
    },
  },

  en: {
    meta: {
      title: 'Sibu Central Market Travel Guide',
      description:
        'Malaysia’s largest indoor market with 1,100+ stalls on Jalan Channel, Sibu, Sarawak. Open 6:00 AM – 6:00 PM, free entry. Market layout, parking, how to get there from Sibu Airport, food, and Sarawak layer cake.',
    },
    hero: {
      badge: 'Sibu · Sarawak · Borneo',
      subtitle: 'Malaysia’s LARGEST indoor market · 1,100+ stalls',
      ctaPrimary: 'Explore sections',
      ctaSecondary: 'How to get there',
      ratingSuffix: 'Google reviews',
      openHours: '6:00 AM – 6:00 PM · Daily',
    },
    nav: [
      { id: 'info-penting', label: 'Key Info' },
      { id: 'bahagian', label: 'Market Layout' },
      { id: 'galeri', label: 'Gallery' },
      { id: 'tiket', label: 'Tickets & Fees' },
      { id: 'masa-terbaik', label: 'Best Time' },
      { id: 'parkir', label: 'Parking' },
      { id: 'pengangkutan', label: 'Getting Here' },
      { id: 'makanan', label: 'Food Nearby' },
      { id: 'tempat-menarik', label: 'Nearby' },
      { id: 'peta', label: 'Map' },
      { id: 'faq', label: 'FAQ' },
    ],
    ctaButton: 'Visit Us',
    labels: {
      jarak: 'Distance from market',
      kadar: 'Parking rate',
      kapasiti: 'Capacity',
      langkah: 'Step-by-step',
      petua: '💡 Local tip',
      anggaranKos: 'Estimated cost',
      lihatPeta: 'View map',
      bukaMaps: 'Open in Google Maps',
      tableKategori: 'Visitor type',
      tableYuran: 'Entrance fee',
      tableNota: 'Notes',
      foto: 'Photo #',
      bukaGambar: 'Open photo',
      tutupGambar: 'Close photo',
      gambarSebelum: 'Previous photo',
      gambarSeterusnya: 'Next photo',
      bahagianPasar: 'Market Layout',
      galeriGambar: 'Photo Gallery',
      tiketYuran: 'Tickets & Fees',
      petaLokasi: 'Location Map',
      makananBerdekatan: 'Food Nearby',
      tempatMenarik: 'Nearby Attractions',
      sumberRasmi: 'Official Sources',
      pengiktirafan: 'Disclaimer',
    },
    priceLabel: { low: 'Budget', mid: 'Mid-range', high: 'Premium' },
    floorLabel: { bawah: 'Ground Floor', atas: 'Upper Floor' },
    modeLabel: {
      airport: { label: 'From the airport (SBW)', icon: '✈' },
      boat: { label: 'Express boat', icon: '🚢' },
      bus: { label: 'Local bus', icon: '🚌' },
      taxi: { label: 'Town taxi', icon: '🚕' },
      grab: { label: 'Grab / e-hailing', icon: '📱' },
      walk: { label: 'On foot', icon: '🚶' },
      car: { label: 'By car', icon: '🚗' },
    },
    sections: {
      bahagian: {
        eyebrow: '6 main sections · 2 floors',
        title: 'How Sibu Central Market is laid out',
        desc: 'A two-storey building that merges the old wet market with the Dayak “Pasar Lembangan”. The ground floor is for fresh and wet produce, the upper floor for clothing, food and Sarawak layer cake. Wide, well-ventilated aisles make it a living museum of Sibu culture.',
      },
      galeri: {
        eyebrow: 'Photo gallery · click to enlarge',
        title: 'Around Sibu Central Market',
        desc: 'Real photographs of Sibu Central Market — jungle-produce stalls, Mi Kampua on the upper floor, the newspaper-wrapped chicken tradition, and the Rejang riverfront that frames your visit to the Swan Town.',
      },
      tiket: {
        eyebrow: 'Tickets & entrance fees',
        title: 'Entry is FREE for everyone',
        desc: 'No entrance fee is charged for any visitor category. Sibu Central Market is a PUBLIC market run by the Sibu Municipal Council (SMC) for locals and travellers alike. You only pay for what you buy, for parking and for food.',
        tipsTitle: '💡 Smart shopping tips',
        tips: [
          'Bring enough CASH — most small stalls do not accept cards.',
          'Bargain politely — normal for fruit, vegetables and clothing.',
          'Arrive before 10 AM for the fullest choice of fresh produce.',
          'Ask for a receipt when buying layer cake or goods to ship.',
          'Keep small change handy — very useful for small purchases (RM0.20–RM5).',
        ],
      },
      masa: {
        eyebrow: 'Best time & how long to stay',
        title: 'When to visit Sibu Central Market and how long to spend',
        desc: 'The market is open all day, but certain hours give a much better experience. Sibu sits in an equatorial climate zone — cool mornings and frequent afternoon showers during the monsoon.',
        cards: [
          {
            title: 'Fresh morning hours',
            level: 'BEST · ⭐⭐⭐⭐⭐',
            time: '7:00 AM – 10:00 AM',
            bullets: [
              'Fresh produce just in from upriver and the Rejang',
              'Best fruit selection, river fish just unloaded',
              'Less crowded — plenty of room to choose',
              'Sibu mornings are still cool and pleasant to walk',
            ],
          },
          {
            title: 'Eating & Mi Kampua',
            level: 'Good · ⭐⭐⭐⭐',
            time: '11:00 AM – 2:00 PM',
            bullets: [
              'Upper-floor food court running at full tilt',
              'Best time to try Mi Kampua + meatball soup',
              'Buy layer cake before the choice sells out',
              'Street parking easier after 11 AM',
            ],
          },
          {
            title: 'Recommended duration',
            level: 'Fit · ⭐⭐⭐⭐⭐',
            time: '2 – 3 relaxed hours',
            bullets: [
              '1 hour: quick walk-through and essentials only',
              '2.5 hours: browse properly, eat, and buy layer cake',
              'Add Tua Pek Kong + Rejang Esplanade = half a day',
              'Add Bawang Assan longhouse = a full day',
            ],
          },
        ],
        dayTitle: '📅 Best days to visit',
        days: [
          { label: 'Monday – Friday:', text: 'Full selection, fewer tourists, plenty of room to browse and bargain.' },
          { label: 'Saturday & Sunday:', text: 'Most LIVELY! Local families and visitors. Avoid the 9–11 AM peak.' },
          { label: 'Public holidays & Gawai (June):', text: 'Some ethnic stalls close, but special festive stalls appear.' },
          { label: 'Durian season (Nov–Jan):', text: 'BEST time for durian lovers — dedicated stalls out front!' },
        ],
        climateTitle: '🌤️ Sibu climate · Land of the Hornbills',
        climate:
          'Temperatures stay between 23°C and 33°C year round with humidity above 80%. The main rainy season runs November to February (afternoon showers); the drier spell is roughly May to August. Bring a small umbrella for sun and rain, plus a water bottle — two hours in the market will warm you up.',
      },
      parkir: {
        eyebrow: 'Parking information',
        title: 'Where to park near Sibu Central Market',
        desc: 'Parking along Jalan Channel is limited and fills up quickly in the morning. These are the best parking options near Sibu Central Market.',
      },
      pengangkutan: {
        eyebrow: 'Getting here in detail',
        title: '7 ways to reach Sibu Central Market',
        desc: 'From Sibu Airport (SBW), the bus station, the Express Boat Terminal and around town. Full step-by-step directions with estimated costs and honest local tips.',
      },
      makanan: {
        eyebrow: 'Food nearby · 6 best picks',
        title: 'Where to eat and drink near the market',
        desc: 'From the market’s own upper-floor food court (Mi Kampua for RM5!), to the Fuzhou kopitiam lane below Tua Pek Kong hill, to a restaurant serving wild jungle salads. All within 700 m of Sibu Central Market.',
      },
      tempatMenarik: {
        eyebrow: 'Nearby attractions',
        title: 'Combine your Sibu visit',
        desc: 'Sibu Central Market sits in the heart of Sibu town. Use its central location to reach nearby attractions — Tua Pek Kong temple on the hill, the Sibu Heritage Centre, Iban longhouses on the Rejang, and the Wisma Sanyan shopping tower.',
      },
      peta: {
        eyebrow: 'Interactive location map',
        title: 'Find Sibu Central Market on Google Maps',
        desc: 'Navigate straight from your current location to Sibu Central Market on Jalan Channel, opposite the Sibu Express Boat Terminal, Sarawak.',
        mapsTitle: 'Map of Sibu Central Market, Sarawak',
      },
      faq: {
        eyebrow: 'Frequently asked questions',
        title: 'FAQ · Common questions about Sibu Central Market',
        desc: 'Complete answers to the questions visitors ask most before and during a visit to Sibu Central Market — opening hours, bargaining, must-try food, parking, photo etiquette and the Sarawak durian season.',
      },
      sumber: {
        eyebrow: 'Official references',
        title: 'Official sources & outbound links',
        desc: 'This is an unofficial visitor guide. Please check the links below to confirm the latest information before planning your trip to Sibu.',
        links: [
          { name: 'Google Maps — Sibu Central Market', url: 'https://maps.app.goo.gl/HYSyTqsXHgBokYvu5', note: 'Location, reviews & navigation' },
          { name: 'Sibu Municipal Council (SMC)', url: 'https://smc.gov.my/', note: 'Authority managing Sibu public markets' },
          { name: 'Sarawak Tourism Board', url: 'https://sarawaktourism.com/', note: 'State tourism information' },
        ],
      },
    },
    footer: {
      about:
        'An unofficial visitor guide to Sibu Central Market — Malaysia’s largest indoor market, on Jalan Channel opposite the Sibu Express Boat Terminal. Explore Sarawak jungle produce, Fuzhou heritage and the famous Mi Kampua.',
      quickTitle: 'Quick Links',
      disclaimerTitle: 'Unofficial disclaimer',
      disclaimer: [
        'This site is an independent visitor guide and is NOT operated, issued or endorsed by the management of Sibu Central Market, the Sibu Municipal Council (SMC), Tourism Sarawak, or any federal or Sarawak state government agency.',
        'Contact the market management on +60 84-313 449 or check the official Sarawak Tourism Board website to confirm the latest information before planning your trip to Sibu.',
      ],
      copyright: 'Unofficial visitor guide · Swan Town, Sarawak.',
      backToTop: 'Back to top',
      addressLabel: 'Address',
    },
  },

  zh: {
    meta: {
      title: '诗巫中央市场 旅游指南',
      description:
        '马来西亚最大室内市场，逾 1,100 个摊位，位于砂拉越诗巫 Jalan Channel。营业时间 6:00 AM – 6:00 PM，免费入场。含市场分区、停车、机场交通、美食与砂拉越千层糕完整攻略。',
    },
    hero: {
      badge: '诗巫 · 砂拉越 · 婆罗洲',
      subtitle: '马来西亚最大室内市场 · 逾 1,100 个摊位',
      ctaPrimary: '逛市场分区',
      ctaSecondary: '交通方式',
      ratingSuffix: '条 Google 评价',
      openHours: '6:00 AM – 6:00 PM · 每天营业',
    },
    nav: [
      { id: 'info-penting', label: '重点资讯' },
      { id: 'bahagian', label: '市场分区' },
      { id: 'galeri', label: '照片' },
      { id: 'tiket', label: '门票费用' },
      { id: 'masa-terbaik', label: '最佳时间' },
      { id: 'parkir', label: '停车' },
      { id: 'pengangkutan', label: '交通方式' },
      { id: 'makanan', label: '周边美食' },
      { id: 'tempat-menarik', label: '附近景点' },
      { id: 'peta', label: '地图' },
      { id: 'faq', label: '常见问题' },
    ],
    ctaButton: '来逛市场',
    labels: {
      jarak: '距市场',
      kadar: '停车费率',
      kapasiti: '车位数量',
      langkah: '步骤',
      petua: '💡 在地小贴士',
      anggaranKos: '预估费用',
      lihatPeta: '查看地图',
      bukaMaps: '在 Google 地图打开',
      tableKategori: '访客类别',
      tableYuran: '入场费',
      tableNota: '备注',
      foto: '照片 #',
      bukaGambar: '打开照片',
      tutupGambar: '关闭照片',
      gambarSebelum: '上一张',
      gambarSeterusnya: '下一张',
      bahagianPasar: '市场分区',
      galeriGambar: '照片集',
      tiketYuran: '门票费用',
      petaLokasi: '位置地图',
      makananBerdekatan: '周边美食',
      tempatMenarik: '附近景点',
      sumberRasmi: '官方来源',
      pengiktirafan: '免责声明',
    },
    priceLabel: { low: '平价', mid: '中等', high: '高档' },
    floorLabel: { bawah: '楼下', atas: '楼上' },
    modeLabel: {
      airport: { label: '从机场（SBW）', icon: '✈' },
      boat: { label: '快艇', icon: '🚢' },
      bus: { label: '市区巴士', icon: '🚌' },
      taxi: { label: '市区德士', icon: '🚕' },
      grab: { label: 'Grab / 电召车', icon: '📱' },
      walk: { label: '步行', icon: '🚶' },
      car: { label: '自驾', icon: '🚗' },
    },
    sections: {
      bahagian: {
        eyebrow: '6 大分区 · 2 层楼',
        title: '诗巫中央市场的楼层分区',
        desc: '两层楼建筑，结合了原有的湿巴刹与达雅族「Pasar Lembangan」。楼下卖生鲜湿货，楼上卖服饰、美食与砂拉越千层糕。通道宽敞通风，宛如诗巫文化的活博物馆。',
      },
      galeri: {
        eyebrow: '照片集 · 点击放大',
        title: '诗巫中央市场实拍',
        desc: '诗巫中央市场的真实照片——森林物产摊位、楼上的干盘面、旧报纸包活鸡的传统，以及陪伴这趟旅程的拉让江河岸风光（天鹅城）。',
      },
      tiket: {
        eyebrow: '门票与费用',
        title: '入场完全免费',
        desc: '所有访客类别一律不收入场费。诗巫中央市场是由诗巫市议会（MBS）为市民与旅客经营的公共巴刹，您只需为购买的商品、停车与餐饮付费。',
        tipsTitle: '💡 精明采购小贴士',
        tips: [
          '带足现金——多数小摊位不接受刷卡。',
          '杀价要有礼貌——水果、蔬菜与服饰都很常见。',
          '早上 10 点前抵达，生鲜选择最齐全。',
          '买千层糕或要寄送的商品记得索取收据。',
          '准备零钱——小额消费（RM0.20–RM5）很常用。',
        ],
      },
      masa: {
        eyebrow: '最佳时间与建议停留',
        title: '诗巫中央市场几点去最好？要逛多久？',
        desc: '市场全天营业，但某些时段体验明显更好。诗巫属赤道气候——早晨凉爽，雨季午后常有雷阵雨。',
        cards: [
          {
            title: '清晨生鲜时段',
            level: '最佳 · ⭐⭐⭐⭐⭐',
            time: '7:00 AM – 10:00 AM',
            bullets: [
              '生鲜刚从上游乡镇与拉让江送达',
              '水果选择最多，江鱼刚卸货',
              '人潮较少，挑选空间大',
              '诗巫清晨凉爽，走动舒适',
            ],
          },
          {
            title: '用餐与干盘面',
            level: '不错 · ⭐⭐⭐⭐',
            time: '11:00 AM – 2:00 PM',
            bullets: [
              '楼上美食中心全面营业',
              '品尝干盘面 + 肉丸汤的最佳时间',
              '趁口味齐全先买千层糕',
              '11 点后路边停车较容易',
            ],
          },
          {
            title: '建议停留时间',
            level: '合适 · ⭐⭐⭐⭐⭐',
            time: '2 – 3 小时悠闲逛',
            bullets: [
              '1 小时：快速走一遍、只买必需品',
              '2.5 小时：仔细挑选 + 用餐 + 买千层糕',
              '加上大伯公庙 + 拉让河滨 = 半天',
              '加上 Bawang Assan 长屋 = 一整天',
            ],
          },
        ],
        dayTitle: '📅 最适合造访的日子',
        days: [
          { label: '周一至周五：', text: '货色齐全、旅客较少，挑选与杀价空间大。' },
          { label: '周六与周日：', text: '最热闹！本地家庭与旅客都来，尽量避开 9–11 点高峰。' },
          { label: '公共假期与丰收节（6 月）：', text: '部分族群摊位休息，但会出现节庆特产摊。' },
          { label: '榴梿季（11 月–1 月）：', text: '榴梿迷最佳时机——市场前会有专属摊位！' },
        ],
        climateTitle: '🌤️ 诗巫气候 · 犀鸟之乡',
        climate:
          '全年气温介于 23°C 至 33°C，湿度超过 80%。主要雨季为 11 月至次年 2 月（午后阵雨），5 月至 8 月较为干燥。建议携带小雨伞遮阳挡雨，并自备饮用水——在市场逛两小时会明显发热。',
      },
      parkir: {
        eyebrow: '停车资讯',
        title: '诗巫中央市场附近哪里停车？',
        desc: 'Jalan Channel 路边车位有限，早上很快停满。以下是诗巫中央市场附近最实用的停车选择。',
      },
      pengangkutan: {
        eyebrow: '交通方式详解',
        title: '前往诗巫中央市场的 7 种方式',
        desc: '从诗巫机场（SBW）、巴士站、快艇码头与市区各处出发，含完整步骤、预估费用与实在的在地建议。',
      },
      makanan: {
        eyebrow: '周边美食 · 6 个最佳选择',
        title: '市场附近吃什么、喝什么？',
        desc: '从市场楼上美食中心（干盘面 RM5！），到大伯公庙山脚的福州咖啡店街，再到主打野生山菜的餐馆，全部在诗巫中央市场 700 米内。',
      },
      tempatMenarik: {
        eyebrow: '附近景点',
        title: '串成一日诗巫行程',
        desc: '诗巫中央市场位于市中心，可顺势串联附近景点——山上的大伯公庙、诗巫文物中心、拉让江畔的伊班长屋，以及三洋大厦购物中心。',
      },
      peta: {
        eyebrow: '互动位置地图',
        title: '在 Google 地图找到诗巫中央市场',
        desc: '直接从您所在位置导航到砂拉越诗巫 Jalan Channel 的诗巫中央市场，就在诗巫快艇码头对面。',
        mapsTitle: '诗巫中央市场地图（砂拉越）',
      },
      faq: {
        eyebrow: '常见问题',
        title: '常见问题 FAQ · 关于诗巫中央市场',
        desc: '访客在造访诗巫中央市场前后最常问的问题完整解答——营业时间、杀价方式、必吃美食、停车、拍照礼仪，以及砂拉越榴梿季节。',
      },
      sumber: {
        eyebrow: '官方参考',
        title: '官方来源与外链',
        desc: '本站为非官方旅客指南，规划诗巫行程前请以下列官方来源确认最新资讯。',
        links: [
          { name: 'Google 地图 — 诗巫中央市场', url: 'https://maps.app.goo.gl/HYSyTqsXHgBokYvu5', note: '位置、评价与导航' },
          { name: '诗巫市议会（SMC）', url: 'https://smc.gov.my/', note: '公共巴刹管理单位' },
          { name: '砂拉越旅游局', url: 'https://sarawaktourism.com/', note: '州级旅游资讯' },
        ],
      },
    },
    footer: {
      about:
        '诗巫中央市场非官方旅客指南——马来西亚最大室内市场，位于 Jalan Channel、诗巫快艇码头对面。探索砂拉越森林物产、福州移民文化与远近驰名的干盘面。',
      quickTitle: '快捷链接',
      disclaimerTitle: '非官方声明',
      disclaimer: [
        '本站为独立的旅客指南，并非由诗巫中央市场管理方、诗巫市议会（MBS）、砂拉越旅游局或任何联邦／砂拉越州政府机构经营、发布或授权。',
        '规划诗巫行程前，请致电市场管理方 +60 84-313 449 或查阅砂拉越旅游局官方网站确认最新资讯。',
      ],
      copyright: '非官方旅客指南 · 天鹅城，砂拉越。',
      backToTop: '回到顶部',
      addressLabel: '地址',
    },
  },
};

export const NAV_IDS = UI.ms.nav.map((n) => n.id);
