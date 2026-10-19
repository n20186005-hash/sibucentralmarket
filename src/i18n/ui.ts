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
  "title": "Pasar Sentral Sibu: Waktu, Makanan, Parkir & Peta",
  "description": "Rancang lawatan Pasar Sentral Sibu di Jalan Channel: semak perbezaan waktu operasi, makanan, parkir Lembangan dan arah perjalanan. Panduan pelawat bebas."
},
    hero: {
      badge: 'Sibu · Sarawak · Bumi Kenyalang',
      subtitle: "Pasar Sentral Sibu · Jalan Channel",
      ctaPrimary: "Semak waktu & lokasi",
      ctaSecondary: 'Cara Ke Sana',
      ratingSuffix: "ulasan Google Maps · 2026-10-19",
      openHours: "Google Maps: 06:00–18:00 · lihat nota waktu",
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
    ctaButton: "Semak waktu & lokasi",
    labels: {
      jarak: 'Jarak dari pasar',
      kadar: 'Kadar Bayaran',
      kapasiti: 'Kapasiti',
      langkah: 'Langkah-langkah',
      petua: "Perancangan",
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
  "eyebrow": "Pasar Sentral Sibu · Jalan Channel",
  "title": "Apa yang boleh dicari di Pasar Sentral Sibu?",
  "desc": "Sarawak Tourism Board menerangkan pasar dua tingkat dengan hasil segar, barang kering, makanan dan kraftangan. Kategori di bawah ialah panduan belian, bukan pelan lokasi gerai."
},
      galeri: {
        eyebrow: 'Galeri Gambar · Klik untuk Besar',
        title: 'Sekitar Pasar Sentral Sibu',
        desc: "Galeri sedia ada untuk gambaran suasana; foto bukan bukti stok atau keadaan semasa.",
      },
      tiket: {
        eyebrow: 'Tiket & Yuran Masuk',
        title: "Rancang belian dan perbelanjaan",
        desc: "Ini pasar awam di bawah Majlis Perbandaran Sibu (SMC). Belian makanan, barangan dan parkir mempunyai caj masing-masing; panduan ini tidak menjual tiket atau menjanjikan diskaun.",
        tipsTitle: '💡 Tips Belian Cekap',
        tips: [
  "Bawa wang kecil sebagai pilihan bayaran.",
  "Tanya dahulu jika hendak membayar tanpa tunai.",
  "Semak ramuan, pembungkusan dan harga setiap unit."
],
      },
      masa: {
        eyebrow: 'Masa Terbaik & Tempoh Lawatan',
        title: "Bila hendak melawat?",
        desc: "Waktu pasar tidak semestinya waktu setiap gerai. Pilih masa mengikut tujuan lawatan dan sahkan gerai pilihan terlebih dahulu.",
        cards: [
  {
    "title": "Hasil segar",
    "level": "Cadangan",
    "time": "Pagi",
    "bullets": [
      "Pertimbangkan lawatan awal.",
      "Jangan anggap semua hasil tersedia setiap hari."
    ]
  },
  {
    "title": "Makan",
    "level": "Semak gerai",
    "time": "Sebelum bertolak",
    "bullets": [
      "Tanya waktu sajian terakhir.",
      "Sahkan keperluan diet dan ramuan."
    ]
  },
  {
    "title": "Lawatan santai",
    "level": "Anggaran",
    "time": "1–2 jam",
    "bullets": [
      "Tambah masa untuk makan atau membeli.",
      "Semak cuaca sebelum berjalan ke tepi sungai."
    ]
  }
],
        dayTitle: '📅 Hari paling sesuai untuk melawat',
        days: [
  {
    "label": "Hari biasa / hujung minggu",
    "text": "Waktu dan stok setiap gerai boleh berbeza."
  },
  {
    "label": "Cuti umum",
    "text": "Hubungi gerai atau pihak pasar sebelum perjalanan khas."
  }
],
        climateTitle: '🌤️ Iklim Sibu · Bumi Kenyalang',
        climate:
          "Bawa air minuman dan payung. Semak ramalan cuaca pada hari lawatan serta keadaan laluan selepas hujan.",
      },
      parkir: {
        eyebrow: 'Maklumat Parkir Kenderaan',
        title: 'Di mana hendak letak kereta berhampiran Pasar Sentral Sibu?',
        desc: "Kompleks parkir bertingkat Lembangan terletak bersebelahan pasar menurut SMC. Kadar dan kekosongan semasa perlu disemak di lokasi.",
      },
      pengangkutan: {
        eyebrow: 'Pengangkutan Terperinci',
        title: "Cara ke Jalan Channel",
        desc: "Gunakan pin Pasar Sentral Sibu. Semak harga dan anggaran perjalanan semasa; panduan ini tidak mengesahkan jadual bas atau bot tertentu.",
      },
      makanan: {
        eyebrow: "Makanan di dalam dan sekitar pasar",
        title: "Makanan di dalam dan sekitar pasar",
        desc: "Gerai dan menu boleh berubah. Semak harga, ramuan serta status halal dengan gerai masing-masing.",
      },
      tempatMenarik: {
        eyebrow: 'Tempat Menarik Berdekatan',
        title: 'Gabungkan lawatan anda di Sibu',
        desc: "Pertimbangkan singgahan bandar berikut; semak waktu akses dan laluan secara berasingan.",
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
        desc: "Jawapan ringkas tentang waktu yang bercanggah, lokasi, parkir, belian dan kemudahan.",
      },
      sumber: {
        eyebrow: 'Rujukan Rasmi',
        title: 'Sumber rasmi & pautan luar',
        desc: "Sumber awam dan pautan rujukan; semak maklumat khusus dengan pengendali.",
        links: [
  {
    "name": "Google Maps — Sibu Central Market",
    "url": "https://maps.app.goo.gl/HYSyTqsXHgBokYvu5",
    "note": "Disemak 2026-10-19"
  },
  {
    "name": "Sarawak Tourism Board — Sibu Central Market",
    "url": "https://www.sarawaktourism.com/web/places-to-visit/town-view/sibu/major-attractions/sibu-central-market",
    "note": "Disemak 2026-10-19"
  },
  {
    "name": "Sarawak Tourism Board — Sibu",
    "url": "https://www.sarawaktourism.com/web/places-to-visit/town-view/sibu",
    "note": "Semak sebelum datang"
  },
  {
    "name": "Majlis Perbandaran Sibu (SMC) — Lembangan",
    "url": "https://smc.gov.my/web/subpage/webpage_view/726",
    "note": "Bersebelahan pasar"
  }
],
      },
    },
    footer: {
      about:
        "Panduan pelawat bebas untuk Pasar Sentral Sibu di Jalan Channel.",
      quickTitle: 'Pautan Pantas',
      disclaimerTitle: 'Penafian Tidak Rasmi',
      disclaimer: [
  "Laman ini tidak dikendalikan oleh pasar, Majlis Perbandaran Sibu atau Sarawak Tourism Board.",
  "Google Maps menunjukkan 06:00–18:00 setiap hari; Sarawak Tourism Board menyenaraikan 06:00–23:00. Kedua-duanya disemak pada 19 Oktober 2026. Waktu gerai berbeza dan sumber ini tidak mengesahkan semua gerai dibuka sehingga malam. Hubungi nombor pada peta, +60 84-313 449, atau gerai pilihan sebelum lawatan lewat."
],
      copyright: 'Panduan pelawat tidak rasmi · Swan Town, Sarawak.',
      backToTop: 'Kembali ke atas',
      addressLabel: 'Alamat',
    },
  },

  en: {
    meta: {
  "title": "Sibu Central Market: Hours, Food, Parking & Directions",
  "description": "Plan Sibu Central Market on Jalan Channel: compare opening-hour sources, find food and Lembangan parking, and get directions. Independent visitor guide."
},
    hero: {
      badge: 'Sibu · Sarawak · Borneo',
      subtitle: "Sibu Central Market · Pasar Sentral Sibu",
      ctaPrimary: "Check hours & location",
      ctaSecondary: 'How to get there',
      ratingSuffix: "Google Maps reviews · 2026-10-19",
      openHours: "Google Maps: 06:00–18:00 · see hours note",
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
    ctaButton: "Check hours & location",
    labels: {
      jarak: 'Distance from market',
      kadar: 'Parking rate',
      kapasiti: 'Capacity',
      langkah: 'Step-by-step',
      petua: "Planning note",
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
  "eyebrow": "Sibu Central Market · Pasar Sentral Sibu",
  "title": "What can you look for at Sibu Central Market?",
  "desc": "Sarawak Tourism Board describes a two-storey market with fresh produce, dry goods, food and crafts. These categories are shopping ideas, not a stall-location plan."
},
      galeri: {
        eyebrow: 'Photo gallery · click to enlarge',
        title: 'Around Sibu Central Market',
        desc: "Existing photographs offer an impression of the market, not proof of current stock or conditions.",
      },
      tiket: {
        eyebrow: 'Tickets & entrance fees',
        title: "Plan purchases and other costs",
        desc: "This public market falls under Sibu Municipal Council (SMC). Food, shopping and parking have their own charges; this guide does not sell tickets or promise discounts.",
        tipsTitle: '💡 Smart shopping tips',
        tips: [
  "Carry small cash as a payment option.",
  "Ask before relying on cashless payment.",
  "Check ingredients, packaging and unit prices."
],
      },
      masa: {
        eyebrow: 'Best time & how long to stay',
        title: "When should you visit?",
        desc: "Market hours are not necessarily individual stall hours. Choose a time for your purpose and confirm your preferred stall before travelling.",
        cards: [
  {
    "title": "Fresh produce",
    "level": "Suggestion",
    "time": "Morning",
    "bullets": [
      "Consider visiting early.",
      "Do not assume every product is stocked daily."
    ]
  },
  {
    "title": "Food visit",
    "level": "Check the stall",
    "time": "Before travelling",
    "bullets": [
      "Ask about last food orders.",
      "Confirm ingredients and dietary needs."
    ]
  },
  {
    "title": "Leisurely visit",
    "level": "Estimate",
    "time": "1–2 hours",
    "bullets": [
      "Allow extra time to eat or shop.",
      "Check the weather before a riverfront walk."
    ]
  }
],
        dayTitle: '📅 Best days to visit',
        days: [
  {
    "label": "Weekdays / weekends",
    "text": "Stall hours and stock can differ."
  },
  {
    "label": "Public holidays",
    "text": "Contact the stall or market before making a special trip."
  }
],
        climateTitle: '🌤️ Sibu climate · Land of the Hornbills',
        climate:
          "Carry drinking water and an umbrella. Check the forecast for your visit and walking conditions after rain.",
      },
      parkir: {
        eyebrow: 'Parking information',
        title: 'Where to park near Sibu Central Market',
        desc: "SMC identifies the Lembangan multi-storey car park beside the market. Check current tariffs and available spaces on arrival.",
      },
      pengangkutan: {
        eyebrow: 'Getting here in detail',
        title: "Getting to Jalan Channel",
        desc: "Use the Sibu Central Market map pin. Check current fares and travel estimates; this guide does not confirm particular bus or boat schedules.",
      },
      makanan: {
        eyebrow: "Eating in and around the market",
        title: "Eating in and around the market",
        desc: "Stalls and menus change. Confirm prices, ingredients and halal status with each vendor.",
      },
      tempatMenarik: {
        eyebrow: 'Nearby attractions',
        title: 'Combine your Sibu visit',
        desc: "Consider these town stops and check their access hours and walking routes separately.",
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
        desc: "Practical answers about conflicting hours, location, parking, shopping and facilities.",
      },
      sumber: {
        eyebrow: 'Official references',
        title: 'Official sources & outbound links',
        desc: "Public sources and reference links; confirm service-specific details with the operator.",
        links: [
  {
    "name": "Google Maps — Sibu Central Market",
    "url": "https://maps.app.goo.gl/HYSyTqsXHgBokYvu5",
    "note": "Checked 2026-10-19"
  },
  {
    "name": "Sarawak Tourism Board — Sibu Central Market",
    "url": "https://www.sarawaktourism.com/web/places-to-visit/town-view/sibu/major-attractions/sibu-central-market",
    "note": "Checked 2026-10-19"
  },
  {
    "name": "Sarawak Tourism Board — Sibu",
    "url": "https://www.sarawaktourism.com/web/places-to-visit/town-view/sibu",
    "note": "Check before visiting"
  },
  {
    "name": "Majlis Perbandaran Sibu (SMC) — Lembangan",
    "url": "https://smc.gov.my/web/subpage/webpage_view/726",
    "note": "Beside the market"
  }
],
      },
    },
    footer: {
      about:
        "An independent visitor guide to Sibu Central Market on Jalan Channel.",
      quickTitle: 'Quick Links',
      disclaimerTitle: 'Unofficial disclaimer',
      disclaimer: [
  "This website is not operated by the market, Sibu Municipal Council or Sarawak Tourism Board.",
  "Google Maps lists 06:00–18:00 daily; Sarawak Tourism Board lists 06:00–23:00. Both were checked on 19 October 2026. Individual stalls have different hours, and neither listing confirms that every stall trades late. Before an evening visit, contact your chosen stall or the number shown on Maps: +60 84-313 449."
],
      copyright: 'Unofficial visitor guide · Swan Town, Sarawak.',
      backToTop: 'Back to top',
      addressLabel: 'Address',
    },
  },

  zh: {
    meta: {
  "title": "诗巫中央市场｜营业时间、美食、停车与交通指南",
  "description": "规划诗巫中央市场之旅：核对不同来源的营业时间，了解美食、Lembangan停车场及Jalan Channel交通。独立访客指南。"
},
    hero: {
      badge: '诗巫 · 砂拉越 · 婆罗洲',
      subtitle: "诗巫中央市场 · Pasar Sentral Sibu",
      ctaPrimary: "查看时间与位置",
      ctaSecondary: '交通方式',
      ratingSuffix: "则Google Maps评价 · 2026-10-19",
      openHours: "地图所列06:00–18:00 · 请看时间说明",
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
    ctaButton: "查看时间与位置",
    labels: {
      jarak: '距市场',
      kadar: '停车费率',
      kapasiti: '车位数量',
      langkah: '步骤',
      petua: "行程提示",
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
  "eyebrow": "诗巫中央市场 · Pasar Sentral Sibu",
  "title": "诗巫中央市场可以买什么？",
  "desc": "砂拉越旅游局介绍，市场有两层，售卖生鲜、干货、食品和手工艺品。以下是购物类别提示，并非具体摊位分布图。"
},
      galeri: {
        eyebrow: '照片集 · 点击放大',
        title: '诗巫中央市场实拍',
        desc: "现有相册用于了解市场环境，不代表当天商品库存或现场状况。",
      },
      tiket: {
        eyebrow: '门票与费用',
        title: "规划购物与其他开支",
        desc: "这是诗巫市议会（SMC）管理的公共市场。食品、商品与停车各有收费；本指南不出售门票，也不承诺摊位折扣。",
        tipsTitle: '💡 精明采购小贴士',
        tips: [
  "准备零钱作为支付备选。",
  "使用电子支付前先向摊主确认。",
  "核对配料、包装与计价单位。"
],
      },
      masa: {
        eyebrow: '最佳时间与建议停留',
        title: "什么时候去比较合适？",
        desc: "市场整体时间不等于每个摊位的时间。根据购物或用餐目的安排行程，专程到访前先确认目标摊位。",
        cards: [
  {
    "title": "购买生鲜",
    "level": "行程建议",
    "time": "上午",
    "bullets": [
      "可以考虑早些到访。",
      "不要假定每天都有同样的商品。"
    ]
  },
  {
    "title": "计划用餐",
    "level": "先问摊位",
    "time": "出发前",
    "bullets": [
      "确认最后点餐时间。",
      "说明配料与饮食要求。"
    ]
  },
  {
    "title": "休闲参观",
    "level": "时间估计",
    "time": "1–2小时",
    "bullets": [
      "购物或用餐请另留时间。",
      "前往河滨散步前查天气。"
    ]
  }
],
        dayTitle: '📅 最适合造访的日子',
        days: [
  {
    "label": "平日及周末",
    "text": "摊位营业及库存安排可能不同。"
  },
  {
    "label": "公共假日",
    "text": "专程前往前先联系摊位或市场。"
  }
],
        climateTitle: '🌤️ 诗巫气候 · 犀鸟之乡',
        climate:
          "携带饮水与雨伞，查看到访当天预报，雨后留意步行路线状况。",
      },
      parkir: {
        eyebrow: '停车资讯',
        title: '诗巫中央市场附近哪里停车？',
        desc: "市议会资料确认Lembangan多层停车场位于市场旁。实时空位与收费请以现场为准。",
      },
      pengangkutan: {
        eyebrow: '交通方式详解',
        title: "如何前往Jalan Channel",
        desc: "导航请选择诗巫中央市场地点。请查询实时车资及路程估计，本指南不确认特定公交或船班时刻。",
      },
      makanan: {
        eyebrow: "市场内及周边用餐",
        title: "市场内及周边用餐",
        desc: "摊位与菜单可能变化，请逐家确认价格、配料与清真状态。",
      },
      tempatMenarik: {
        eyebrow: '附近景点',
        title: '串成一日诗巫行程',
        desc: "可考虑以下市区景点，分别核对开放时间及步行路线。",
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
        desc: "关于时间差异、位置、停车、购物与设施的实用解答。",
      },
      sumber: {
        eyebrow: '官方参考',
        title: '官方来源与外链',
        desc: "公开资料及参考链接；具体服务请向运营方确认。",
        links: [
  {
    "name": "Google Maps — Sibu Central Market",
    "url": "https://maps.app.goo.gl/HYSyTqsXHgBokYvu5",
    "note": "核对日期：2026-10-19"
  },
  {
    "name": "Sarawak Tourism Board — Sibu Central Market",
    "url": "https://www.sarawaktourism.com/web/places-to-visit/town-view/sibu/major-attractions/sibu-central-market",
    "note": "核对日期：2026-10-19"
  },
  {
    "name": "Sarawak Tourism Board — Sibu",
    "url": "https://www.sarawaktourism.com/web/places-to-visit/town-view/sibu",
    "note": "到访前确认"
  },
  {
    "name": "Majlis Perbandaran Sibu (SMC) — Lembangan",
    "url": "https://smc.gov.my/web/subpage/webpage_view/726",
    "note": "市场旁"
  }
],
      },
    },
    footer: {
      about:
        "Jalan Channel诗巫中央市场独立访客指南。",
      quickTitle: '快捷链接',
      disclaimerTitle: '非官方声明',
      disclaimer: [
  "本网站并非市场、诗巫市议会或砂拉越旅游局运营。",
  "2026年10月19日核对时，Google Maps显示每日06:00–18:00，砂拉越旅游局页面则列为06:00–23:00。各摊位营业时间不同，两种资料都不能保证每个摊位营业到晚上。计划晚间到访时，请先联系目标摊位，或拨打地图所列电话+60 84-313 449确认。"
],
      copyright: '非官方旅客指南 · 天鹅城，砂拉越。',
      backToTop: '回到顶部',
      addressLabel: '地址',
    },
  },
};

export const NAV_IDS = UI.ms.nav.map((n) => n.id);
