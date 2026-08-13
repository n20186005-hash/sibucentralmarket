export const SITE = {
  name: 'Pasar Sentral Sibu',
  title: 'Pasar Sentral Sibu — Panduan Pelawat (Pasar Tertutup Terbesar Malaysia)',
  description:
    'Pasar tertutup terbesar di Malaysia dengan lebih 1,100 gerai. Terletak di Jalan Channel, Sibu, Sarawak, bertentangan dengan Terminal Penumpang Bot Ekspres. Menawarkan hasil hutan, buah eksotik, daging segar, ikan, ayam hidup, pakaian, dan makanan khas Sibu seperti Mi Kampua, Kompia, dan Kek Lapis Sarawak.',
  language: 'ms',
  locale: 'ms_MY',
  ga4Id: 'G-HXM22WWPKP',
  address: 'Jalan Channel, Pekan Sibu, 96000 Sibu, Sarawak, Malaysia',
  coordinates: {
    lat: 2.2875463,
    lng: 111.8261527,
  },
  ratingValue: 4.2,
  reviewCount: 10351,
  priceRange: 'RM',
} as const;

export const KEY_INFO = [
  {
    icon: 'ticket',
    label: 'Percuma Masuk',
    value: 'TIADA BAYARAN',
    sub: 'Terbuka untuk semua lapisan masyarakat',
  },
  {
    icon: 'clock',
    label: 'Waktu Operasi',
    value: '6:00 AM – 6:00 PM',
    sub: 'Setiap hari termasuk cuti umum',
  },
  {
    icon: 'stopwatch',
    label: 'Tempoh Disyorkan',
    value: '2 – 3 jam',
    sub: 'Meneroka gerai + makan di food court',
  },
  {
    icon: 'sun',
    label: 'Masa Terbaik',
    value: '7:00 AM – 10:00 AM',
    sub: 'Hasil segar paling lengkap & kurang sesak',
  },
] as const;

export type MarketSection = {
  id: string;
  floor: 'Tingkat Bawah' | 'Tingkat Atas';
  title: string;
  tagline: string;
  description: string;
  items: string[];
};

export const MARKET_SECTIONS: MarketSection[] = [
  {
    id: 'hasil-basah',
    floor: 'Tingkat Bawah',
    title: 'Pasar Basah & Hasil Segar',
    tagline: 'Aras Bawah · Bahagian Barat',
    description:
      'Daging segar, ikan sungai Rejang, udang, kerang, sayur-sayuran kampung, buah-buahan tropika, dan ayam hidup yang dibungkus rapi dalam surat khabar lama — satu tradisi unik Sibu.',
    items: ['Ikan Sungai Segar', 'Daging Lembu & Babi', 'Ayam & Itik Hidup', 'Sayur Kampung', 'Buah Tropika'],
  },
  {
    id: 'hasil-hutan',
    floor: 'Tingkat Bawah',
    title: 'Hasil Hutan & Etnik Dayak',
    tagline: 'Aras Bawah · Bahagian Tengah',
    description:
      'Dijual oleh wanita-wanita Iban dengan pakaian tradisional. Ulam hutan, cendawan liar, rebung, ubi, buah Dabai (Zaitun Sarawak), madu hutan, dan anyaman rotan asli.',
    items: ['Ulam & Sayur Hutan', 'Madu Hutan Asli', 'Dabai (Zaitun Sarawak)', 'Anyaman Rotan', 'Buah Eksotik'],
  },
  {
    id: 'barang-kering',
    floor: 'Tingkat Bawah',
    title: 'Barang Kering & Runcit',
    tagline: 'Aras Bawah · Bahagian Timur',
    description:
      'Kerepek ubi, sambal, belacan, kicap, serbuk rempah, ikan bilis, ikan masin, Kek Lapis Sarawak, dan barangan keperluan harian dengan harga runcit paling berpatutan di bandar.',
    items: ['Ikan Bilis & Ikan Masin', 'Sambal & Belacan', 'Kerepek & Snek', 'Kek Lapis Sarawak', 'Rempah Ratus'],
  },
  {
    id: 'pakaian',
    floor: 'Tingkat Atas',
    title: 'Pakaian & Aksesori',
    tagline: 'Aras Atas · Bahagian Hadapan',
    description:
      'Kain batik Sarawak, kain tenunan Pua Kumbu, baju kurung, t-shirt, kasut, beg tangan, barang kemas murah, dan cenderamata untuk kenang-kenangan semasa melawat Sibu.',
    items: ['Kain Tenun Pua Kumbu', 'Batik Sarawak', 'Pakaian Harian', 'Cenderamata', 'Aksesori'],
  },
  {
    id: 'makanan',
    floor: 'Tingkat Atas',
    title: 'Food Court & Makanan',
    tagline: 'Aras Atas · Bahagian Belakang',
    description:
      'Puluhan gerai makanan menjual Mi Kampua (mi kering khas Sibu), Sup Bola Kampung, Kompia (roti Fuzhou), Laksa Sarawak, Teh C Peng Special, dan nasi campur dengan harga amat berpatutan.',
    items: ['Mi Kampua Sibu', 'Kom Popia & Kompia', 'Laksa Sarawak', 'Nasi Campur', 'Teh C Peng Special'],
  },
  {
    id: 'kek-lapis',
    floor: 'Tingkat Atas',
    title: 'Kek Lapis & Kuih Tradisional',
    tagline: 'Aras Atas · Berhampiran Food Court',
    description:
      'Kek Lapis Sarawak pelbagai perisa (Oreo Cheese, Pandan, Mocha, Green Tea), kuih lapis, kuih talam, kuih bahulu, dan aneka pastri tradisional Sarawak dan Cina Fuzhou.',
    items: ['Kek Lapis Sarawak', 'Kuih Lapis & Talam', 'Kek Coklat & Keju', 'Pastri & Tart', 'Kuih Bahulu'],
  },
];

export type FoodSpot = {
  id: string;
  name: string;
  distance: string;
  specialty: string[];
  price: 'murah' | 'sederhana' | 'mewah';
  note: string;
};

export const FOOD_SPOTS: FoodSpot[] = [
  {
    id: 'food-court-atas',
    name: 'Food Court Pasar Sentral (Tingkat Atas)',
    distance: '0 km · Aras Atas Pasar',
    specialty: ['Mi Kampua Sibu', 'Kompia Bakar', 'Nasi Campur', 'Teh C Peng', 'Sup Bola'],
    price: 'murah',
    note: 'Pilihan paling dekat. 1 hidangan mi kampua + teh c peng hanya sekitar RM7–RM10. Ada bahagian muslim dan bukan muslim yang dipisahkan.',
  },
  {
    id: 'sibu-night-market',
    name: 'Pasar Malam Sibu (Sibu Night Market)',
    distance: '250 meter · Jalan Central',
    specialty: ['Roti Bulan Sabit', 'Chai Kuih (Cucur Sayur)', 'Bakso Bakar', 'Sate Daging', 'Soya Tahu'],
    price: 'murah',
    note: 'Waktu operasi 5:00 PM – 11:00 PM setiap hari di sepanjang Jalan Central. Berhampiran Kuil Tua Pek Kong.',
  },
  {
    id: 'tua-pek-kong-lane',
    name: 'Lorong Makan Tua Pek Kong',
    distance: '300 meter · Jalan Tunku Abdul Rahman',
    specialty: ['Kompia Fuzhou', 'Bak Kut Teh', 'Kolo Mee (Bihun Sup)', 'Kai Lan Goreng Bawang', 'Kopi O'],
    price: 'murah',
    note: 'Deretan kedai kopi lama di kaki bukit Tua Pek Kong. Roti Kompia boleh didapati segar setiap pagi.',
  },
  {
    id: 'chin-sian',
    name: 'Chin Sian Food Court (Happy World)',
    distance: '550 meter · Jalan Wong Nai Siong',
    specialty: ['Air Tiga Masam', 'Mi Goreng Basah', 'Sai Yong Choy Bihun', 'Char Kway Teow', 'Ikan Terubuk Masin'],
    price: 'sederhana',
    note: 'Mirip food court Singapore. Menu kegemaran penduduk tempatan. Cuba air tiga masam dalam cawan besar.',
  },
  {
    id: 'cabeijo',
    name: 'Restoran Cabeijo',
    distance: '700 meter · Jalan Marine',
    specialty: ['Sayur Ulam Liar', 'Sup Buntut', 'Kway Teow Goreng Sarawak', 'Sotong Kangkung', 'Itik Salai'],
    price: 'sederhana',
    note: 'Restoran yang terkenal dengan masakan kampung dan hasil hutan. Hidangan sihat, rasa asli Sarawak.',
  },
  {
    id: 'seng-kee',
    name: 'Kedai Kopi Seng Kee',
    distance: '450 meter · Jalan Ban Hock',
    specialty: ['Guang Bing on-site (Roti Fuzhou)', 'Kueh Tepung Abok', 'Kopi Muar', 'Roti Bakar Kaya', 'Tau Fu Fah'],
    price: 'murah',
    note: 'Boleh tonton pembuatan Guang Bing (sejenis roti rata tradisional Fuzhou) secara langsung. Popular untuk sarapan pagi.',
  },
];

export type TransportOption = {
  id: string;
  mode: 'kapal_terbang' | 'bot' | 'bas' | 'teksi' | 'grab' | 'berjalan' | 'kereta';
  title: string;
  duration: string;
  cost: string;
  steps: string[];
  tips: string;
};

export const TRANSPORT: TransportOption[] = [
  {
    id: 'airport',
    mode: 'kapal_terbang',
    title: 'Dari Lapangan Terbang Sibu (SBW)',
    duration: '20 – 25 minit',
    cost: 'RM25 – RM40',
    steps: [
      'Tiba di Arrival Hall Lapangan Terbang Sibu (SBW)',
      'Ambil teksi di kaunter teksi rasmi sebelah kiri keluar',
      'Atau buka aplikasi Grab untuk tambang tetap',
      'Beritahu pemandu "Pasar Sentral Jalan Channel" atau "Sibu Central Market"',
      'Pasar terletak bertentangan Terminal Bot Ekspres Sibu',
    ],
    tips: 'Lebih murah gunakan Grab berbanding teksi biasa. Tambang lebih tinggi waktu hujan lebat atau waktu puncak.',
  },
  {
    id: 'bot-ekspres',
    mode: 'bot',
    title: 'Dari Terminal Penumpang Bot Ekspres Sibu',
    duration: '1 – 3 minit berjalan',
    cost: 'Percuma',
    steps: [
      'Turun dari bot ekspres di Terminal Sibu',
      'Keluar terminal, lihat ke sebelah kiri anda',
      'Bangunan Pasar Sentral Sibu kelihatan jelas hanya 50 meter sahaja',
      'Gunakan lintasan pejalan kaki di Jalan Channel',
    ],
    tips: 'Jika datang dari Kuching, Bintulu, Kapit atau Belaga menggunakan bot ekspres, anda hanya perlu merentas jalan sahaja. Lokasi pasar sangat strategik!',
  },
  {
    id: 'bas-bandar',
    mode: 'bas',
    title: 'Bas Bandar Sibu (Local Bus)',
    duration: '25 – 45 minit',
    cost: 'RM1 – RM2 seorang',
    steps: [
      'Pergi ke Stesen Bas Bandar Sibu di Jalan P. Ramlee',
      'Cari bas laluan yang melalui Jalan Channel atau Jalan Wong Nai Siong',
      'Turun di perhentian "Pasar Sentral" atau berhampiran Terminal Bot',
      'Berjalan kaki 2–3 minit ke pintu utama pasar',
    ],
    tips: 'Bas beroperasi dari 6:30 AM hingga 8:00 PM. Perkhidmatan kurang kerap pada hujung minggu. Lebih baik guna Grab jika tidak biasa.',
  },
  {
    id: 'teksi',
    mode: 'teksi',
    title: 'Teksi Bandar (Dari Pusat Bandar / Hotel)',
    duration: '5 – 12 minit',
    cost: 'RM6 – RM18',
    steps: [
      'Hubungi teksi di tempat menunggu teksi (contoh: depan Wisma Sanyan, Medan Hotel)',
      'Atau minta kakitangan hotel panggil teksi untuk anda',
      'Pastikan meter digunakan atau bincang harga SEBELUM naik',
      'Alamat: Jalan Channel, bertentangan Terminal Bot Ekspres Sibu',
    ],
    tips: 'Kebanyakan teksi Sibu tidak guna meter. Semak harga dahulu. Grab lebih disyorkan untuk harga jelas.',
  },
  {
    id: 'grab',
    mode: 'grab',
    title: 'Grab / E-Hailing',
    duration: '5 – 15 minit',
    cost: 'RM4 – RM20',
    steps: [
      'Buka aplikasi Grab di telefon pintar',
      'Tetapkan destinasi: "Pasar Sentral Sibu" atau "Sibu Central Market"',
      'Pilih GrabCar, GrabTaxi, atau JustGrab',
      'Bayar secara tunai, kad kredit, atau e-wallet dalam aplikasi',
    ],
    tips: 'Pilihan paling senang, harga tetap dan selamat. Jika sibuk, cuba tambah sedikit "boost" untuk dapatkan pemandu.',
  },
  {
    id: 'berjalan',
    mode: 'berjalan',
    title: 'Berjalan Kaki Dari Wisma Sanyan / Pekan Sibu',
    duration: '5 – 10 minit',
    cost: 'Percuma',
    steps: [
      'Dari Wisma Sanyan (bangunan tertinggi Sibu), turun ke Jalan Wong Nai Siong',
      'Berjalan arah sungai Rejang (Tebing Sungai Rejang)',
      'Pusing kanan ke Jalan Channel',
      'Pasar di sebelah kiri anda, tidak lama sebelum Terminal Bot',
    ],
    tips: 'Sesuai pagi atau petang. Cuba elak 12:00 – 2:00 PM kerana cuaca sangat panas dan lembap.',
  },
  {
    id: 'kereta',
    mode: 'kereta',
    title: 'Pemanduan Kereta Sendiri',
    duration: 'Bergantung pada lokasi',
    cost: 'Bayaran parkir RM2 – RM6/jam',
    steps: [
      'Gunakan Waze / Google Maps cari "Sibu Central Market"',
      'Pilih parkir Jalan Channel di sebelah pasar',
      'Atau parkir di Wisma Sanyan / Medan Hotel jika parkir jalan penuh',
      'Gunakan mesin kupon parkir atau bayar menggunakan app e-wallet',
    ],
    tips: 'Parkir jalan cepat penuh waktu 8:00 AM – 12:00 PM. Wisma Sanyan (5 minit jalan) ada parkir bertingkat.',
  },
];

export type ParkingSpot = {
  id: string;
  name: string;
  distance: string;
  rate: string;
  capacity: string;
  notes: string;
};

export const PARKING: ParkingSpot[] = [
  {
    id: 'jalan-channel',
    name: 'Parkir Jalan Jalan Channel',
    distance: 'Terus di sebelah pasar',
    rate: 'RM2/jam pertama, RM1 setiap 30 minit seterusnya',
    capacity: 'Terhad (kira-kira 50 lot)',
    notes: 'Paling hampir tetapi cepat penuh 8:00 AM – 12:00 PM. Mesin kupon atau bayar e-wallet.',
  },
  {
    id: 'wisma-sanyan',
    name: 'Parkir Wisma Sanyan',
    distance: '350 meter (5 minit jalan kaki)',
    rate: 'RM3/jam pertama, RM2 setiap jam selepas',
    capacity: 'Bertingkat, banyak lot (lebih 300)',
    notes: 'Pilihan utama jika parkir jalan penuh. Pusat membeli belah terbesar di Sibu. Boleh singgah membeli belah selepas pasar.',
  },
  {
    id: 'terminal-bot',
    name: 'Parkir Terminal Bot Ekspres Sibu',
    distance: '150 meter (2 minit jalan kaki)',
    rate: 'RM2/jam, maks RM8 sehari',
    capacity: 'Sederhana (kira-kira 80 lot)',
    notes: 'Sesuai jika anda bercadang sambung perjalanan ke Kuching / Kapit menggunakan bot selepas pasar.',
  },
  {
    id: 'medan-hotel',
    name: 'Parkir Medan Hotel / Jalan P. Ramlee',
    distance: '500 meter (7 minit jalan kaki)',
    rate: 'RM2/jam',
    capacity: 'Sederhana',
    notes: 'Harga murah, berhampiran stesen bas. Kawasan yang agak sibuk waktu petang.',
  },
  {
    id: 'sunshine-mall',
    name: 'Parkir Sunshine Mall (Sarawak Plaza)',
    distance: '650 meter (9 minit jalan kaki)',
    rate: 'RM3/jam pertama, RM2 setiap jam selepas',
    capacity: 'Banyak',
    notes: 'Alternatif jika Wisma Sanyan penuh. Boleh akses dari Jalan Central.',
  },
  {
    id: 'tua-pek-kong',
    name: 'Parkir Berhampiran Tua Pek Kong Temple',
    distance: '300 meter (4 minit jalan kaki)',
    rate: 'RM1 – RM2/jam',
    capacity: 'Terhad (kira-kira 30 lot)',
    notes: 'Jika datang awal boleh dapat lot. Boleh melawat Kuil Tua Pek Kong sebelum atau selepas pasar.',
  },
];

export type NearbyAttraction = {
  id: string;
  name: string;
  distance: string;
  duration: string;
  highlight: string;
  category: string;
};

export const NEARBY_ATTRACTIONS: NearbyAttraction[] = [
  {
    id: 'tua-pek-kong',
    name: 'Kuil Tua Pek Kong Sibu (大伯公庙)',
    distance: '300 meter',
    duration: '30 – 45 minit',
    highlight:
      'Kuil Cina tertua di Sibu, terletak di tebing Sungai Rejang. Ada tangga 100+ anak tangga ke puncak bukit dengan pemandangan panoram bandar dan sungai terpanjang Malaysia.',
    category: 'Sejarah · Agama',
  },
  {
    id: 'rejang-esplanade',
    name: 'Rejang Esplanade (Tebing Sungai Rejang)',
    distance: '100 meter',
    duration: '1 – 2 jam',
    highlight:
      'Jalur pejalan kaki yang cantik di sepanjang tebing sungai Rejang terpanjang di Malaysia. Boleh berjalan ke arah Tua Pek Kong sambil menikmati angin sungai yang sepoi-sepoi.',
    category: 'Taman · Rekreasi',
  },
  {
    id: 'sibu-heritage',
    name: 'Sibu Heritage Centre (Pusat Warisan Sibu)',
    distance: '500 meter (8 minit jalan)',
    duration: '1.5 – 2 jam',
    highlight:
      'Galeri sejarah perbandaran Sibu, pameran imigrasi Cina Fuzhou dari tahun 1900-an, warisan etnik Iban/Melanau/Malay, dan pakaian tradisional. Kedai cenderamata di tingkat bawah.',
    category: 'Muzium · Sejarah',
  },
  {
    id: 'bukit-lima',
    name: 'Bukit Lima Nature Reserve',
    distance: '4 km (10 – 15 minit kereta)',
    duration: '2 – 3 jam',
    highlight:
      'Hutan simpan hijau di tengah bandar dengan laluan mendaki berjenjalan, kanopi hutan primer, merpati dan burung liar. Tempat senaman dan meditasi kegemaran penduduk.',
    category: 'Alam Semula Jadi · Hiking',
  },
  {
    id: 'night-market',
    name: 'Pasar Malam Sibu (Night Market)',
    distance: '250 meter (Jalan Central)',
    duration: '1 – 2 jam',
    highlight:
      'Setiap petang 5PM–11PM. Roti bulan sabit, chai kuih, bakso bakar, sate, dan banyak snek tempatan. Rasa seperti jalan-jalan di Fuzhou, China.',
    category: 'Makanan · Pasar Malam',
  },
  {
    id: 'bawang-assan',
    name: 'Rumah Panjang Iban Bawang Assan',
    distance: '30 minit bot dari Terminal Bot',
    duration: '4 – 6 jam (lawatan setengah hari)',
    highlight:
      'Rumah panjang tradisional kaum Iban di seberang sungai Rejang. Boleh melihat tarian ngajat, mencuba tuak (arak nasi tradisional), dan memahami budaya asli Sarawak.',
    category: 'Budaya · Rumah Panjang',
  },
  {
    id: 'wisma-sanyan',
    name: 'Menara Wisma Sanyan',
    distance: '350 meter (5 minit jalan)',
    duration: '1 – 2 jam',
    highlight:
      'Bangunan tertinggi di Sibu (28 tingkat). Pusat membeli belah moden dengan kafe, restoran, pawagam, dan supermarket. Boleh singgah sejukkan badan selepas pasar.',
    category: 'Membeli-belah · Moden',
  },
  {
    id: 'sungai-rajang-cruise',
    name: 'Krus Sungai Rejang (Sibu River Cruise)',
    distance: '200 meter dari Terminal Bot',
    duration: '2 – 3 jam',
    highlight:
      'Naiki bot persiaran sekitar sungai Rejang, melihat rumah terapung, kampung Melayu, dan pemandangan matahari terbenam. Ada juga krus makan malam.',
    category: 'Krus · Pemandangan Sungai',
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const FAQS: Faq[] = [
  {
    q: 'Adakah bayaran masuk ke Pasar Sentral Sibu?',
    a: 'TIDAK. Kemasukan ke Pasar Sentral Sibu adalah PERCUMA untuk semua orang, termasuk rakyat Malaysia mahupun pelancong antarabangsa. Anda hanya bayar untuk barang dan makanan yang dibeli.',
  },
  {
    q: 'Bilakah waktu operasi sebenar Pasar Sentral?',
    a: 'Pasar beroperasi setiap hari termasuk cuti umum dari jam 6:00 PAGI hingga 6:00 PETANG. Sesetengah gerai makanan tingkat atas dan kedai pakaian mungkin dibuka kemudian (7:00 AM) atau tutup awal 5:00 PM. Petua: Gerai paling segar buka seawal 5:30 AM!',
  },
  {
    q: 'Adakah menawar harga dibenarkan di Pasar Sentral Sibu?',
    a: 'Ya, terutamanya untuk barang sayur, buah, hasil hutan, dan pakaian. Bagi gerai yang sudah tulis harga jelas (contoh: Mi Kampua RM5), biasanya tidak perlu tawar. Tawar dengan sopan dan senyum — ia adalah sebahagian daripada budaya pasar Sibu.',
  },
  {
    q: 'Adakah kad kredit / e-wallet diterima?',
    a: 'Kebanyakan gerai kecil PASAR BASAH hanya menerima WANG TUNAI. Duit syiling banyak diperlukan untuk belian kecil. Tingkat atas: kedai pakaian, beberapa gerai makanan, dan Kek Lapis menerima QR Pay (Touch \'n Go, Boost, GrabPay). Ada mesin ATM Maybank di luar pasar.',
  },
  {
    q: 'Apakah makanan WAJIB CUBA di Pasar Sentral Sibu?',
    a: '3 hidangan ikonik: (1) Mi Kampua Sibu — mi kering campur sos bawang goreng dan minyak bijan, biasanya dengan sup tulang. (2) Kompia — roti rata bakar khas Fuzhou, boleh makan kosong atau inti daging. (3) Teh C Peng Special — 3 lapisan teh susu ais rasa unik Sibu. Cuba juga Dabai (buah zaitun Sarawak) jika ada musim.',
  },
  {
    q: 'Adakah Pasar Sentral mesra OKU / kerusi roda?',
    a: 'Ya. Pintu masuk utama mempunyai cerun untuk kerusi roda. Laluan di tingkat bawah agak luas. Tandas awam dan lif disediakan. Walau bagaimanapun, waktu puncak (8:00–11:00 AM) mungkin agak sesak untuk navigasi kerusi roda.',
  },
  {
    q: 'Bolehkah ambil gambar di dalam pasar?',
    a: 'Ya, gambar untuk kegunaan peribadi digalakkan — pasar adalah objek fotografi yang sangat menarik! Jika ingin mengambil gambar DEKAT penjual (khususnya wanita Iban dengan pakaian tradisional), anda digalakkan minta izin dulu sebagai tanda hormat. Jangan halang laluan pejalan kaki.',
  },
  {
    q: 'Bagaimana dengan kebersihan dan keselesaan?',
    a: 'Pasar Sentral Sibu diiktiraf sebagai salah satu pasar tertutup TERBERSIH di Malaysia. Walaupun adalah pasar basah, lantai sentiasa dicuci dan kering dengan baik. Ada kipas siling dan pengudaraan yang baik. Air minuman awam dan tempat duduk tersedia di tingkat atas.',
  },
  {
    q: 'Bilakah MASA TERBAIK untuk melawat?',
    a: '7:00 AM – 10:00 AM adalah TERBAIK: semua jenis hasil segar masih lengkap (ikan sungai, daging pagi, buah masak pohon), kurang sesak, dan cuaca belum terlalu panas. Jika hanya mahu BELI MAKAN dan cuba Mi Kampua, boleh datang 11:00 AM – 2:00 PM. Elak waktu 12:00 PM–2:00 PM untuk pasar basah kerana banyak gerai dah mula tutup.',
  },
  {
    q: 'Apakah "buah eksotik" yang boleh dijumpai di sini?',
    a: 'Pasar Sentral terkenal dengan hasil hutan Sarawak: Dabai (zaitun Sarawak, makan dengan kicap & gula), Terung Asam, Buah Mata Kucing, Rambutan Hutan, Durian Hutan (musim tertentu), Nangka Mini, Cempedak, dan pelbagai ulaman hutan. Jika tak pasti nama, cuma tanya penjual — kebanyakan boleh berbahasa Melayu, Cina, atau Inggeris asas.',
  },
  {
    q: 'Apakah yang unik tentang pembungkusan ayam hidup di Sibu?',
    a: 'Satu tradisi TANPA ADA TANDINGAN di Pasar Sentral Sibu: para penjual ayam Cina membungkus ayam/itik hidup di dalam "tiub" yang diperbuat daripada surat khabar lama! Ia bentuk khas supaya ayam tidak boleh lari dan kekal kemas. Boleh tumpu untuk gambar — satu pemandangan ikonik.',
  },
  {
    q: 'Adakah tempat menyimpan bagasi besar?',
    a: 'Tiada perkhidmatan locker di dalam pasar. Jika ada beg pakaian besar, boleh tinggalkan di hotel (kebanyakan hotel Sibu menyimpan percuma) atau di kaunter Terminal Bot Ekspres bertentangan (bayaran kecil RM2–RM5/beg).',
  },
  {
    q: 'Adakah Wi-Fi percuma? Berapa liputan 4G?',
    a: 'Wi-Fi percuma TIDAK disediakan secara rasmi. Bagaimanapun, semua pengendali utama Malaysia (Maxis, Celcom, Digi, U Mobile, Yes) mempunyai liputan 4G LTE yang SANGAT BAIK di kawasan pasar dan sekitar bandar Sibu.',
  },
  {
    q: 'Bolehkah saya dapatkan Kek Lapis Sarawak di pasar?',
    a: 'TENTU SAHAJA. Ada beberapa gerai Kek Lapis di tingkat atas (berhampiran food court) dan juga tingkat bawah (barang kering). Harga bermula RM8–RM15 sepotong kecil, RM40–RM80 sebiji. Mereka membungkus rapi untuk dibawa balik sebagai oleh-oleh. Cuba perisa Oreo Cheese dan Pandan.',
  },
  {
    q: 'Apakah musim durian di Sibu? Boleh dapat di sini?',
    a: 'Musim durian Sarawak jatuh pada bulan November – Januari (musim hujan). Musim durian hutan pula sedikit lebih awal (OKT–NOV). Jika datang musim durian, ANDA AKAN TERBALIK BAU di pintu masuk pasar — ada gerai khusus jual durian dengan harga RM10–RM30/biji, jauh lebih murah daripada Semenanjung Malaysia!',
  },
  {
    q: 'Adakah tempat solat & tandas awam?',
    a: 'Ya. Surau untuk lelaki dan wanita disediakan di tingkat atas (berhampiran food court). Tandas awam ada di setiap tingkat, RM0.20–RM0.50 seorang. Bahagian makanan Muslim dipisahkan dengan baik dari bahagian bukan Muslim.',
  },
  {
    q: 'Bolehkah saya bawa balik hasil hutan (Dabai, sayur hutan) ke Semenanjung / luar negeri?',
    a: 'Hasil segar seperti sayur, buah-buahan (termasuk Dabai) BOLEH dibawa balik dalam bagasi terdaftar di lapangan terbang domestik Malaysia. Untuk durian, sebaiknya minta penjual bungkus rapat dengan plastik anti-bau. TIDAK DIGALAKKAN bawa ke luar negara tanpa permit.',
  },
];

export type TicketInfo = {
  type: string;
  price: string;
  note: string;
};

export const TICKET_INFO: TicketInfo[] = [
  { type: 'Dewasa', price: 'Percuma', note: 'Semua umur dialu-alukan' },
  { type: 'Kanak-kanak', price: 'Percuma', note: 'Boleh dibawa masuk bersama ibu bapa' },
  { type: 'Warga Emas (60+)', price: 'Percuma', note: 'Tiada caj khas; diskaun di sesetengah gerai makanan' },
  { type: 'Pelancong Asing', price: 'Percuma', note: 'Sama seperti rakyat Malaysia' },
  { type: 'Kumpulan sekolah / NGO', price: 'Percuma', note: 'Boleh bergerombol, minta izin pihak pengurusan jika rombongan besar >20 orang' },
  { type: 'Fotografi komersial', price: 'Rujuk pihak pengurusan', note: 'Gambar peribadi bebas. Untuk penggambaran video/iklan, mohon izin Majlis Bandaraya Sibu (SMC)' },
];

export const GALLERY: string[] = Array.from({ length: 17 }, (_, i) =>
  `/gallery/sibu-central-market-${String(i + 1).padStart(2, '0')}.jpg`);
