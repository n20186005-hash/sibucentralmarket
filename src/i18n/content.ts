import type { Locale } from './config';

export type KeyInfo = {
  icon: 'ticket' | 'clock' | 'stopwatch' | 'sun';
  label: string;
  value: string;
  sub: string;
};

export type MarketSection = {
  id: string;
  floor: 'bawah' | 'atas';
  title: string;
  tagline: string;
  description: string;
  items: string[];
};

export type TicketInfo = { type: string; price: string; free: boolean; note: string };

export type ParkingSpot = {
  id: string;
  name: string;
  distance: string;
  rate: string;
  capacity: string;
  notes: string;
};

export type TransportOption = {
  id: string;
  mode: 'airport' | 'boat' | 'bus' | 'taxi' | 'grab' | 'walk' | 'car';
  title: string;
  duration: string;
  cost: string;
  steps: string[];
  tips: string;
};

export type FoodSpot = {
  id: string;
  name: string;
  distance: string;
  specialty: string[];
  price: 'low' | 'mid' | 'high';
  note: string;
};

export type NearbyAttraction = {
  id: string;
  name: string;
  distance: string;
  duration: string;
  highlight: string;
  category: string;
};

export type Faq = { q: string; a: string };

export type LocaleContent = {
  keyInfo: KeyInfo[];
  marketSections: MarketSection[];
  ticketInfo: TicketInfo[];
  parking: ParkingSpot[];
  transport: TransportOption[];
  foodSpots: FoodSpot[];
  nearby: NearbyAttraction[];
  faqs: Faq[];
};

export const CONTENT: Record<Locale, LocaleContent> = {
  ms: {
    keyInfo: [
  {
    "icon": "clock",
    "label": "Google Maps",
    "value": "06:00–18:00",
    "sub": "Sumber berbeza; lihat penjelasan di bawah"
  },
  {
    "icon": "ticket",
    "label": "Belian",
    "value": "Bayar ikut gerai",
    "sub": "Semak harga dan cara bayaran sebelum membeli"
  },
  {
    "icon": "stopwatch",
    "label": "Cadangan lawatan",
    "value": "1–2 jam",
    "sub": "Anggaran perancangan; tambah masa untuk makan"
  },
  {
    "icon": "sun",
    "label": "Cadangan masa",
    "value": "Waktu pagi",
    "sub": "Sahkan gerai tertentu jika itulah tujuan lawatan"
  }
],
    marketSections: [
  {
    "id": "category-0",
    "floor": "bawah",
    "title": "Hasil segar",
    "tagline": "",
    "description": "Sayur dan buah berubah mengikut bekalan. Tanya peniaga tentang kesegaran, harga dan penyimpanan.",
    "items": [
      "Sayur",
      "Buah"
    ]
  },
  {
    "id": "category-1",
    "floor": "bawah",
    "title": "Pasar basah",
    "tagline": "",
    "description": "Lihat papan harga dan bezakan harga sekilogram daripada harga setiap item.",
    "items": [
      "Daging",
      "Ikan",
      "Ayam"
    ]
  },
  {
    "id": "category-2",
    "floor": "bawah",
    "title": "Hasil hutan & kraftangan",
    "tagline": "",
    "description": "Tourism Sarawak menyebut hasil hutan dan kraftangan Iban. Minta izin sebelum mengambil gambar peniaga.",
    "items": [
      "Hasil hutan",
      "Kraftangan"
    ]
  },
  {
    "id": "category-3",
    "floor": "bawah",
    "title": "Barang kering",
    "tagline": "",
    "description": "Bandingkan saiz, ramuan dan tarikh luput sebelum membeli makanan untuk dibawa pulang.",
    "items": [
      "Barang runcit",
      "Makanan berbungkus"
    ]
  },
  {
    "id": "category-4",
    "floor": "bawah",
    "title": "Gerai makanan",
    "tagline": "",
    "description": "Cari menu semasa, semak ramuan dan pesan mengikut keperluan diet anda.",
    "items": [
      "Kampua",
      "Kuih",
      "Laksa"
    ]
  },
  {
    "id": "category-5",
    "floor": "bawah",
    "title": "Cenderamata",
    "tagline": "",
    "description": "Semak bahan, saiz dan kaedah membawa pulang sebelum membuat belian.",
    "items": [
      "Barangan tempatan",
      "Hadiah"
    ]
  }
],
    ticketInfo: [
  {
    "type": "Belian di gerai",
    "price": "Ikut harga dipamerkan",
    "note": "Tanya jumlah akhir sebelum memesan.",
    "free": false
  },
  {
    "type": "Parkir",
    "price": "Ikut papan kadar",
    "note": "Semak tempoh caj dan cara bayaran di lokasi.",
    "free": false
  }
],
    parking: [
  {
    "id": "lembangan",
    "name": "Lembangan Multi-storey Car Park",
    "distance": "Bersebelahan pasar",
    "rate": "Semak papan kadar",
    "capacity": "Ikut kekosongan semasa",
    "notes": "Cari pintu masuk parkir yang ditandakan. Jangan gunakan kadar lama atau anggap akses UTC sama dengan waktu parkir."
  }
],
    transport: [
  {
    "id": "airport",
    "mode": "airport",
    "title": "Dari Lapangan Terbang Sibu",
    "duration": "Semak perjalanan semasa",
    "cost": "Tanya harga sebelum naik",
    "steps": [
      "Pilih teksi atau e-hailing yang tersedia.",
      "Tetapkan Pasar Sentral Sibu, Jalan Channel."
    ],
    "tips": "Sahkan tempat mengambil penumpang dan jumlah tambang."
  },
  {
    "id": "walk",
    "mode": "walk",
    "title": "Dari terminal bot atau pusat bandar",
    "duration": "Ikut lokasi mula",
    "cost": "Tiada tambang untuk berjalan",
    "steps": [
      "Pasar berada bertentangan Terminal Penumpang Bot Ekspres.",
      "Gunakan laluan pejalan kaki dan lintasan yang selamat."
    ],
    "tips": "Sahkan perkhidmatan bot secara berasingan; lokasi terminal tidak menjamin sesuatu laluan beroperasi."
  },
  {
    "id": "car",
    "mode": "car",
    "title": "Memandu sendiri",
    "duration": "Ikut trafik semasa",
    "cost": "Parkir dibayar berasingan",
    "steps": [
      "Buka peta pasar.",
      "Cari parkir sah; Lembangan ialah pilihan bersebelahan."
    ],
    "tips": "Jangan berhenti di laluan pemunggahan atau menghalang pintu pasar."
  }
],
    foodSpots: [
  {
    "id": "food-0",
    "name": "Gerai makanan pasar",
    "distance": "Di dalam pasar",
    "specialty": [
      "Kampua",
      "Kuih",
      "Laksa"
    ],
    "price": "low",
    "note": "Rujukan makanan daripada Sarawak Tourism Board; pilihan bergantung pada gerai yang dibuka."
  },
  {
    "id": "food-1",
    "name": "Kedai makanan di bandar Sibu",
    "distance": "Semak peta kedai pilihan",
    "specialty": [
      "Kompia",
      "Minuman"
    ],
    "price": "low",
    "note": "Jika kedai pilihan tutup, cari alternatif yang sedang dibuka dan semak menu sendiri."
  }
],
    nearby: [
  {
    "id": "nearby-0",
    "name": "Tua Pek Kong Temple",
    "category": "Warisan",
    "highlight": "Kuil di bandar Sibu; hormati ruang ibadat.",
    "distance": "Semak sebelum datang",
    "duration": "Semak sebelum datang"
  },
  {
    "id": "nearby-1",
    "name": "Sibu Heritage Centre",
    "category": "Sejarah",
    "highlight": "Pilihan untuk mengenali sejarah bandar selepas lawatan pasar.",
    "distance": "Semak sebelum datang",
    "duration": "Semak sebelum datang"
  },
  {
    "id": "nearby-2",
    "name": "Rejang Esplanade",
    "category": "Tepi sungai",
    "highlight": "Pilihan berjalan di tepi sungai mengikut cuaca dan akses semasa.",
    "distance": "Semak sebelum datang",
    "duration": "Semak sebelum datang"
  }
],
    faqs: [
  {
    "q": "Di manakah Pasar Sentral Sibu?",
    "a": "Di Jalan Channel, Pekan Sibu, 96000 Sibu, Sarawak, bertentangan Terminal Penumpang Bot Ekspres. Gunakan pautan peta pada halaman ini."
  },
  {
    "q": "Adakah pasar tutup pada 18:00 atau 23:00?",
    "a": "Google Maps menunjukkan 06:00–18:00 setiap hari; Sarawak Tourism Board menyenaraikan 06:00–23:00. Kedua-duanya disemak pada 19 Oktober 2026. Waktu gerai berbeza dan sumber ini tidak mengesahkan semua gerai dibuka sehingga malam. Hubungi nombor pada peta, +60 84-313 449, atau gerai pilihan sebelum lawatan lewat."
  },
  {
    "q": "Di mana boleh parkir?",
    "a": "SMC menyenaraikan Kompleks Parkir Bertingkat Lembangan bersebelahan pasar. Semak kadar, waktu akses dan kekosongan pada papan di lokasi."
  },
  {
    "q": "Adakah semua gerai menerima kad atau e-wallet?",
    "a": "Jangan anggap kaedah bayaran sama. Bawa pilihan tunai dan tanya peniaga sebelum memesan."
  },
  {
    "q": "Adakah semua makanan halal?",
    "a": "Semak status halal, ramuan dan penyediaan dengan gerai pilihan; penyenaraian pasar tidak mengesahkan semua makanan."
  },
  {
    "q": "Bagaimana dengan akses kerusi roda dan kemudahan?",
    "a": "Sahkan laluan tanpa tangga ke gerai pilihan, lif, tandas dan kemudahan lain sebelum datang. Penyenaraian umum tidak menjamin akses ke setiap tingkat."
  },
  {
    "q": "Bolehkah saya mengambil gambar?",
    "a": "Minta izin sebelum mengambil gambar orang atau gerai dari dekat. Ikut papan arahan dan jangan halang laluan."
  },
  {
    "q": "Adakah jumlah ulasan dikemas kini secara langsung?",
    "a": "Tidak. 4.2/5 daripada 10,414 ulasan ialah rekod Google Maps pada 2026-10-19. Buka pautan asal untuk angka terkini."
  }
],
  },

  en: {
    keyInfo: [
  {
    "icon": "clock",
    "label": "Google Maps",
    "value": "06:00–18:00",
    "sub": "Sources differ; see the explanation below"
  },
  {
    "icon": "ticket",
    "label": "Shopping",
    "value": "Pay each stall",
    "sub": "Check prices and payment methods before buying"
  },
  {
    "icon": "stopwatch",
    "label": "Suggested visit",
    "value": "1–2 hours",
    "sub": "Planning estimate; allow longer for a meal"
  },
  {
    "icon": "sun",
    "label": "Suggested timing",
    "value": "Morning",
    "sub": "Confirm a particular stall if it is your main reason to visit"
  }
],
    marketSections: [
  {
    "id": "category-0",
    "floor": "bawah",
    "title": "Fresh produce",
    "tagline": "",
    "description": "Availability changes with supply. Ask about freshness, unit prices and storage.",
    "items": [
      "Vegetables",
      "Fruit"
    ]
  },
  {
    "id": "category-1",
    "floor": "bawah",
    "title": "Wet-market goods",
    "tagline": "",
    "description": "Check the price board and distinguish prices per kilogram from prices per item.",
    "items": [
      "Meat",
      "Fish",
      "Poultry"
    ]
  },
  {
    "id": "category-2",
    "floor": "bawah",
    "title": "Jungle produce & crafts",
    "tagline": "",
    "description": "Tourism Sarawak notes Iban produce and crafts. Ask permission before photographing vendors.",
    "items": [
      "Jungle produce",
      "Crafts"
    ]
  },
  {
    "id": "category-3",
    "floor": "bawah",
    "title": "Dry goods",
    "tagline": "",
    "description": "Compare pack sizes, ingredients and expiry dates before buying food to take home.",
    "items": [
      "Groceries",
      "Packaged food"
    ]
  },
  {
    "id": "category-4",
    "floor": "bawah",
    "title": "Food stalls",
    "tagline": "",
    "description": "Read the current menu and ask about ingredients and dietary requirements.",
    "items": [
      "Kampua",
      "Kuih",
      "Laksa"
    ]
  },
  {
    "id": "category-5",
    "floor": "bawah",
    "title": "Souvenirs",
    "tagline": "",
    "description": "Check materials, dimensions and how you will carry purchases home.",
    "items": [
      "Local goods",
      "Gifts"
    ]
  }
],
    ticketInfo: [
  {
    "type": "Stall purchases",
    "price": "Displayed price",
    "note": "Confirm the total before ordering.",
    "free": false
  },
  {
    "type": "Parking",
    "price": "Posted tariff",
    "note": "Check charging periods and payment methods on arrival.",
    "free": false
  }
],
    parking: [
  {
    "id": "lembangan",
    "name": "Lembangan Multi-storey Car Park",
    "distance": "Beside the market",
    "rate": "Check posted tariff",
    "capacity": "Subject to availability",
    "notes": "Follow the marked car-park entrance. Do not rely on old prices or assume UTC office hours are the same as parking access."
  }
],
    transport: [
  {
    "id": "airport",
    "mode": "airport",
    "title": "From Sibu Airport",
    "duration": "Check current journey estimate",
    "cost": "Confirm fare before boarding",
    "steps": [
      "Choose an available taxi or e-hailing service.",
      "Set Sibu Central Market, Jalan Channel, as the destination."
    ],
    "tips": "Confirm the pickup point and final fare."
  },
  {
    "id": "walk",
    "mode": "walk",
    "title": "From the boat terminal or town centre",
    "duration": "Depends on your starting point",
    "cost": "No fare for walking",
    "steps": [
      "The market is opposite the Express Boat Passenger Terminal.",
      "Use safe pedestrian routes and crossings."
    ],
    "tips": "Check boat services separately; the terminal’s location does not establish that a particular route operates."
  },
  {
    "id": "car",
    "mode": "car",
    "title": "Driving to the market",
    "duration": "Depends on current traffic",
    "cost": "Parking charged separately",
    "steps": [
      "Open the market map.",
      "Look for legal parking; Lembangan is an adjacent option."
    ],
    "tips": "Keep loading areas and market entrances clear."
  }
],
    foodSpots: [
  {
    "id": "food-0",
    "name": "Market food stalls",
    "distance": "Inside the market",
    "specialty": [
      "Kampua",
      "Kuih",
      "Laksa"
    ],
    "price": "low",
    "note": "Food examples from Sarawak Tourism Board; availability depends on the stalls open."
  },
  {
    "id": "food-1",
    "name": "Sibu town food shops",
    "distance": "Check your chosen shop’s map",
    "specialty": [
      "Kompia",
      "Drinks"
    ],
    "price": "low",
    "note": "If a chosen shop is closed, find an open alternative and check its current menu."
  }
],
    nearby: [
  {
    "id": "nearby-0",
    "name": "Tua Pek Kong Temple",
    "category": "Heritage",
    "highlight": "A Sibu temple; respect spaces used for worship.",
    "distance": "Check before visiting",
    "duration": "Check before visiting"
  },
  {
    "id": "nearby-1",
    "name": "Sibu Heritage Centre",
    "category": "History",
    "highlight": "An option for exploring the town’s history after the market.",
    "distance": "Check before visiting",
    "duration": "Check before visiting"
  },
  {
    "id": "nearby-2",
    "name": "Rejang Esplanade",
    "category": "Riverfront",
    "highlight": "Consider a riverfront walk when weather and access allow.",
    "distance": "Check before visiting",
    "duration": "Check before visiting"
  }
],
    faqs: [
  {
    "q": "Where is Sibu Central Market?",
    "a": "On Jalan Channel, Pekan Sibu, 96000 Sibu, Sarawak, opposite the Express Boat Passenger Terminal. Use this page’s market map link."
  },
  {
    "q": "Does the market close at 18:00 or 23:00?",
    "a": "Google Maps lists 06:00–18:00 daily; Sarawak Tourism Board lists 06:00–23:00. Both were checked on 19 October 2026. Individual stalls have different hours, and neither listing confirms that every stall trades late. Before an evening visit, contact your chosen stall or the number shown on Maps: +60 84-313 449."
  },
  {
    "q": "Where can I park?",
    "a": "SMC identifies the Lembangan multi-storey car park beside the market. Check tariffs, access hours and availability on the signs at the site."
  },
  {
    "q": "Does every stall accept cards or e-wallets?",
    "a": "Do not assume payment methods are uniform. Carry a cash alternative and ask the vendor before ordering."
  },
  {
    "q": "Is all the food halal?",
    "a": "Check halal status, ingredients and preparation with your chosen vendor; a market listing does not certify every stall."
  },
  {
    "q": "What about wheelchair access and facilities?",
    "a": "Confirm a step-free route to your chosen stall, lifts, toilets and other facilities before visiting. A general listing does not guarantee access to every floor."
  },
  {
    "q": "Can I take photographs?",
    "a": "Ask before photographing people or stalls at close range. Follow signs and keep aisles clear."
  },
  {
    "q": "Is the review count live?",
    "a": "No. The 4.2/5 rating and 10,414 reviews are a Google Maps snapshot checked on 2026-10-19. Open the original listing for current figures."
  }
],
  },

  zh: {
    keyInfo: [
  {
    "icon": "clock",
    "label": "Google Maps",
    "value": "06:00–18:00",
    "sub": "来源存在差异，详见下方说明"
  },
  {
    "icon": "ticket",
    "label": "购物消费",
    "value": "按摊位结算",
    "sub": "购买前确认价格与支付方式"
  },
  {
    "icon": "stopwatch",
    "label": "建议停留",
    "value": "1–2小时",
    "sub": "行程估计；用餐需另留时间"
  },
  {
    "icon": "sun",
    "label": "建议时段",
    "value": "上午",
    "sub": "若专程寻找某摊位，请提前确认"
  }
],
    marketSections: [
  {
    "id": "category-0",
    "floor": "bawah",
    "title": "新鲜蔬果",
    "tagline": "",
    "description": "供应随季节及到货情况变化，购买前询问新鲜度、计价单位与保存方式。",
    "items": [
      "蔬菜",
      "水果"
    ]
  },
  {
    "id": "category-1",
    "floor": "bawah",
    "title": "湿货",
    "tagline": "",
    "description": "看清价目牌，区分每公斤与每件的售价。",
    "items": [
      "肉类",
      "鱼类",
      "家禽"
    ]
  },
  {
    "id": "category-2",
    "floor": "bawah",
    "title": "山产与手工艺",
    "tagline": "",
    "description": "旅游局介绍了伊班山产及手工艺品。拍摄摊主前请先征得同意。",
    "items": [
      "山产",
      "手工艺品"
    ]
  },
  {
    "id": "category-3",
    "floor": "bawah",
    "title": "干货杂货",
    "tagline": "",
    "description": "准备带回的食品应核对规格、配料和保质期。",
    "items": [
      "杂货",
      "包装食品"
    ]
  },
  {
    "id": "category-4",
    "floor": "bawah",
    "title": "熟食摊位",
    "tagline": "",
    "description": "查看当天菜单，向摊主确认配料及饮食要求。",
    "items": [
      "干盘面",
      "传统糕点",
      "叻沙"
    ]
  },
  {
    "id": "category-5",
    "floor": "bawah",
    "title": "伴手礼",
    "tagline": "",
    "description": "购买前确认材质、尺寸以及携带方式。",
    "items": [
      "本地商品",
      "礼品"
    ]
  }
],
    ticketInfo: [
  {
    "type": "摊位消费",
    "price": "按标示价格",
    "note": "下单前确认最终金额。",
    "free": false
  },
  {
    "type": "停车",
    "price": "按现场价目",
    "note": "到达后确认计费时段与支付方式。",
    "free": false
  }
],
    parking: [
  {
    "id": "lembangan",
    "name": "Lembangan Multi-storey Car Park",
    "distance": "市场旁",
    "rate": "查看现场收费牌",
    "capacity": "以实时空位为准",
    "notes": "按指示寻找停车场入口；不要沿用旧价目，也不要把UTC办公时间当作停车场开放时间。"
  }
],
    transport: [
  {
    "id": "airport",
    "mode": "airport",
    "title": "从诗巫机场出发",
    "duration": "查看实时路程估计",
    "cost": "上车前确认车资",
    "steps": [
      "选择当时可用的出租车或网约车。",
      "目的地设为Jalan Channel的Sibu Central Market。"
    ],
    "tips": "确认上车点与最终费用。"
  },
  {
    "id": "walk",
    "mode": "walk",
    "title": "从码头或市中心步行",
    "duration": "取决于起点",
    "cost": "步行无需车资",
    "steps": [
      "市场位于快艇客运码头对面。",
      "使用安全的人行道与过街位置。"
    ],
    "tips": "船班请另向运营方查询；码头位置不代表某航线仍在运营。"
  },
  {
    "id": "car",
    "mode": "car",
    "title": "自驾到访",
    "duration": "取决于实时路况",
    "cost": "停车费另计",
    "steps": [
      "打开市场地图。",
      "寻找合法停车位，市场旁有Lembangan停车场。"
    ],
    "tips": "不要占用装卸通道或堵住市场入口。"
  }
],
    foodSpots: [
  {
    "id": "food-0",
    "name": "市场熟食摊位",
    "distance": "市场内",
    "specialty": [
      "干盘面",
      "糕点",
      "叻沙"
    ],
    "price": "low",
    "note": "这些是旅游局介绍的食品类别，实际供应取决于当天营业摊位。"
  },
  {
    "id": "food-1",
    "name": "诗巫市区餐饮店",
    "distance": "查看目标店铺地图",
    "specialty": [
      "光饼",
      "饮料"
    ],
    "price": "low",
    "note": "若目标店铺关闭，可寻找正在营业的替代店，并自行核对菜单。"
  }
],
    nearby: [
  {
    "id": "nearby-0",
    "name": "大伯公庙",
    "category": "文化",
    "highlight": "诗巫市区庙宇，参观时尊重礼拜空间。",
    "distance": "到访前确认",
    "duration": "到访前确认"
  },
  {
    "id": "nearby-1",
    "name": "诗巫文化遗产中心",
    "category": "历史",
    "highlight": "逛市场后了解城市历史的一个选择。",
    "distance": "到访前确认",
    "duration": "到访前确认"
  },
  {
    "id": "nearby-2",
    "name": "拉让江滨公园",
    "category": "河滨",
    "highlight": "根据天气及现场开放情况安排河边散步。",
    "distance": "到访前确认",
    "duration": "到访前确认"
  }
],
    faqs: [
  {
    "q": "诗巫中央市场在哪里？",
    "a": "地址为Jalan Channel, Pekan Sibu, 96000 Sibu, Sarawak，位于快艇客运码头对面。请使用本页市场地图链接导航。"
  },
  {
    "q": "市场是18点还是23点关门？",
    "a": "2026年10月19日核对时，Google Maps显示每日06:00–18:00，砂拉越旅游局页面则列为06:00–23:00。各摊位营业时间不同，两种资料都不能保证每个摊位营业到晚上。计划晚间到访时，请先联系目标摊位，或拨打地图所列电话+60 84-313 449确认。"
  },
  {
    "q": "附近哪里可以停车？",
    "a": "市议会资料列出市场旁的Lembangan多层停车场。收费、进出时间和空位请查看现场指示。"
  },
  {
    "q": "所有摊位都支持银行卡或电子钱包吗？",
    "a": "不能假定各摊支付方式相同。准备现金备选，下单前向摊主确认。"
  },
  {
    "q": "所有食品都是清真的吗？",
    "a": "请向目标摊位确认清真状态、配料及制作方式，市场整体条目不能认证每个摊位。"
  },
  {
    "q": "轮椅通道及其他设施如何确认？",
    "a": "到访前确认目标摊位的无台阶路线、电梯、厕所等设施。一般地点信息不能保证每一层均可通行。"
  },
  {
    "q": "可以拍照吗？",
    "a": "近距离拍摄人物或摊位前先征得同意，遵守现场告示，不要阻塞通道。"
  },
  {
    "q": "评价数是实时的吗？",
    "a": "不是。4.2/5分与10,414则评价为2026-10-19核对的Google Maps记录，最新数字请查看原地图条目。"
  }
],
  },
};
