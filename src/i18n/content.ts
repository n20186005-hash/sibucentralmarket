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
      { icon: 'ticket', label: 'Percuma Masuk', value: 'TIADA BAYARAN', sub: 'Terbuka untuk semua lapisan masyarakat' },
      { icon: 'clock', label: 'Waktu Operasi', value: '6:00 AM – 6:00 PM', sub: 'Setiap hari termasuk cuti umum' },
      { icon: 'stopwatch', label: 'Tempoh Disyorkan', value: '2 – 3 jam', sub: 'Meneroka gerai + makan di food court' },
      { icon: 'sun', label: 'Masa Terbaik', value: '7:00 AM – 10:00 AM', sub: 'Hasil segar paling lengkap & kurang sesak' },
    ],
    marketSections: [
      {
        id: 'hasil-basah',
        floor: 'bawah',
        title: 'Pasar Basah & Hasil Segar',
        tagline: 'Aras Bawah · Bahagian Barat',
        description:
          'Daging segar, ikan sungai Rejang, udang, kerang, sayur-sayuran kampung, buah-buahan tropika, dan ayam hidup yang dibungkus rapi dalam surat khabar lama — satu tradisi unik Sibu.',
        items: ['Ikan Sungai Segar', 'Daging Lembu & Babi', 'Ayam & Itik Hidup', 'Sayur Kampung', 'Buah Tropika'],
      },
      {
        id: 'hasil-hutan',
        floor: 'bawah',
        title: 'Hasil Hutan & Etnik Dayak',
        tagline: 'Aras Bawah · Bahagian Tengah',
        description:
          'Dijual oleh wanita-wanita Iban dengan pakaian tradisional. Ulam hutan, cendawan liar, rebung, ubi, buah Dabai (Zaitun Sarawak), madu hutan, dan anyaman rotan asli.',
        items: ['Ulam & Sayur Hutan', 'Madu Hutan Asli', 'Dabai (Zaitun Sarawak)', 'Anyaman Rotan', 'Buah Eksotik'],
      },
      {
        id: 'barang-kering',
        floor: 'bawah',
        title: 'Barang Kering & Runcit',
        tagline: 'Aras Bawah · Bahagian Timur',
        description:
          'Kerepek ubi, sambal, belacan, kicap, serbuk rempah, ikan bilis, ikan masin, Kek Lapis Sarawak, dan barangan keperluan harian dengan harga runcit paling berpatutan di bandar.',
        items: ['Ikan Bilis & Ikan Masin', 'Sambal & Belacan', 'Kerepek & Snek', 'Kek Lapis Sarawak', 'Rempah Ratus'],
      },
      {
        id: 'pakaian',
        floor: 'atas',
        title: 'Pakaian & Aksesori',
        tagline: 'Aras Atas · Bahagian Hadapan',
        description:
          'Kain batik Sarawak, kain tenunan Pua Kumbu, baju kurung, t-shirt, kasut, beg tangan, barang kemas murah, dan cenderamata untuk kenang-kenangan semasa melawat Sibu.',
        items: ['Kain Tenun Pua Kumbu', 'Batik Sarawak', 'Pakaian Harian', 'Cenderamata', 'Aksesori'],
      },
      {
        id: 'makanan',
        floor: 'atas',
        title: 'Food Court & Makanan',
        tagline: 'Aras Atas · Bahagian Belakang',
        description:
          'Puluhan gerai makanan menjual Mi Kampua (mi kering khas Sibu), Sup Bola Kampung, Kompia (roti Fuzhou), Laksa Sarawak, Teh C Peng Special, dan nasi campur dengan harga amat berpatutan.',
        items: ['Mi Kampua Sibu', 'Kom Popia & Kompia', 'Laksa Sarawak', 'Nasi Campur', 'Teh C Peng Special'],
      },
      {
        id: 'kek-lapis',
        floor: 'atas',
        title: 'Kek Lapis & Kuih Tradisional',
        tagline: 'Aras Atas · Berhampiran Food Court',
        description:
          'Kek Lapis Sarawak pelbagai perisa (Oreo Cheese, Pandan, Mocha, Green Tea), kuih lapis, kuih talam, kuih bahulu, dan aneka pastri tradisional Sarawak dan Cina Fuzhou.',
        items: ['Kek Lapis Sarawak', 'Kuih Lapis & Talam', 'Kek Coklat & Keju', 'Pastri & Tart', 'Kuih Bahulu'],
      },
    ],
    ticketInfo: [
      { type: 'Dewasa', price: 'Percuma', free: true, note: 'Semua umur dialu-alukan' },
      { type: 'Kanak-kanak', price: 'Percuma', free: true, note: 'Boleh dibawa masuk bersama ibu bapa' },
      { type: 'Warga Emas (60+)', price: 'Percuma', free: true, note: 'Tiada caj khas; diskaun di sesetengah gerai makanan' },
      { type: 'Pelancong Asing', price: 'Percuma', free: true, note: 'Sama seperti rakyat Malaysia' },
      { type: 'Kumpulan sekolah / NGO', price: 'Percuma', free: true, note: 'Minta izin pihak pengurusan jika rombongan besar >20 orang' },
      { type: 'Fotografi komersial', price: 'Rujuk pihak pengurusan', free: false, note: 'Gambar peribadi bebas; penggambaran iklan perlu izin MBS' },
    ],
    parking: [
      { id: 'jalan-channel', name: 'Parkir Jalan Jalan Channel', distance: 'Terus di sebelah pasar', rate: 'RM2/jam pertama, RM1 setiap 30 minit seterusnya', capacity: 'Terhad (kira-kira 50 lot)', notes: 'Paling hampir tetapi cepat penuh 8:00 AM – 12:00 PM. Mesin kupon atau bayar e-wallet.' },
      { id: 'wisma-sanyan', name: 'Parkir Wisma Sanyan', distance: '350 meter (5 minit jalan kaki)', rate: 'RM3/jam pertama, RM2 setiap jam selepas', capacity: 'Bertingkat, banyak lot (lebih 300)', notes: 'Pilihan utama jika parkir jalan penuh. Pusat membeli-belah terbesar di Sibu.' },
      { id: 'terminal-bot', name: 'Parkir Terminal Bot Ekspres Sibu', distance: '150 meter (2 minit jalan kaki)', rate: 'RM2/jam, maks RM8 sehari', capacity: 'Sederhana (kira-kira 80 lot)', notes: 'Sesuai jika anda sambung perjalanan ke Kuching / Kapit dengan bot selepas pasar.' },
      { id: 'medan-hotel', name: 'Parkir Medan Hotel / Jalan P. Ramlee', distance: '500 meter (7 minit jalan kaki)', rate: 'RM2/jam', capacity: 'Sederhana', notes: 'Harga murah, berhampiran stesen bas. Kawasan agak sibuk waktu petang.' },
      { id: 'sunshine-mall', name: 'Parkir Sunshine Mall (Sarawak Plaza)', distance: '650 meter (9 minit jalan kaki)', rate: 'RM3/jam pertama, RM2 setiap jam selepas', capacity: 'Banyak', notes: 'Alternatif jika Wisma Sanyan penuh. Boleh akses dari Jalan Central.' },
      { id: 'tua-pek-kong', name: 'Parkir Berhampiran Kuil Tua Pek Kong', distance: '300 meter (4 minit jalan kaki)', rate: 'RM1 – RM2/jam', capacity: 'Terhad (kira-kira 30 lot)', notes: 'Jika datang awal boleh dapat lot. Boleh lawat kuil sebelum atau selepas pasar.' },
    ],
    transport: [
      {
        id: 'airport',
        mode: 'airport',
        title: 'Dari Lapangan Terbang Sibu (SBW) ke Pasar Sentral',
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
        mode: 'boat',
        title: 'Dari Terminal Penumpang Bot Ekspres Sibu',
        duration: '1 – 3 minit berjalan',
        cost: 'Percuma',
        steps: [
          'Turun dari bot ekspres di Terminal Sibu',
          'Keluar terminal, lihat ke sebelah kiri anda',
          'Bangunan Pasar Sentral Sibu kelihatan jelas hanya 50 meter sahaja',
          'Gunakan lintasan pejalan kaki di Jalan Channel',
        ],
        tips: 'Jika datang dari Kuching, Bintulu, Kapit atau Belaga dengan bot ekspres, anda hanya perlu merentas jalan. Lokasi pasar sangat strategik!',
      },
      {
        id: 'bas-bandar',
        mode: 'bus',
        title: 'Bas Bandar Sibu (Local Bus)',
        duration: '25 – 45 minit',
        cost: 'RM1 – RM2 seorang',
        steps: [
          'Pergi ke Stesen Bas Bandar Sibu di Jalan P. Ramlee',
          'Cari bas laluan yang melalui Jalan Channel atau Jalan Wong Nai Siong',
          'Turun di perhentian "Pasar Sentral" atau berhampiran Terminal Bot',
          'Berjalan kaki 2–3 minit ke pintu utama pasar',
        ],
        tips: 'Bas beroperasi 6:30 AM – 8:00 PM, kurang kerap pada hujung minggu. Lebih baik guna Grab jika tidak biasa.',
      },
      {
        id: 'teksi',
        mode: 'taxi',
        title: 'Teksi Bandar (Dari Pusat Bandar / Hotel)',
        duration: '5 – 12 minit',
        cost: 'RM6 – RM18',
        steps: [
          'Dapatkan teksi di tempat menunggu teksi (contoh: depan Wisma Sanyan, Medan Hotel)',
          'Atau minta kakitangan hotel panggil teksi untuk anda',
          'Pastikan meter digunakan atau bincang harga SEBELUM naik',
          'Alamat: Jalan Channel, bertentangan Terminal Bot Ekspres Sibu',
        ],
        tips: 'Kebanyakan teksi Sibu tidak guna meter — semak harga dahulu. Grab lebih disyorkan untuk harga jelas.',
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
        tips: 'Pilihan paling senang, harga tetap dan selamat. Jika sibuk, tambah sedikit "boost" untuk dapatkan pemandu.',
      },
      {
        id: 'berjalan',
        mode: 'walk',
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
        mode: 'car',
        title: 'Pemanduan Kereta Sendiri & Parkir',
        duration: 'Bergantung pada lokasi',
        cost: 'Bayaran parkir RM2 – RM6/jam',
        steps: [
          'Gunakan Waze / Google Maps cari "Sibu Central Market"',
          'Pilih parkir Jalan Channel di sebelah pasar',
          'Atau parkir di Wisma Sanyan / Medan Hotel jika parkir jalan penuh',
          'Gunakan mesin kupon parkir atau bayar menggunakan app e-wallet',
        ],
        tips: 'Parkir jalan cepat penuh 8:00 AM – 12:00 PM. Wisma Sanyan (5 minit jalan) ada parkir bertingkat.',
      },
    ],
    foodSpots: [
      {
        id: 'food-court-atas',
        name: 'Food Court Pasar Sentral (Tingkat Atas)',
        distance: '0 km · Aras Atas Pasar',
        specialty: ['Mi Kampua Sibu', 'Kompia Bakar', 'Nasi Campur', 'Teh C Peng', 'Sup Bola'],
        price: 'low',
        note: 'Pilihan paling dekat. 1 hidangan mi kampua + teh c peng hanya sekitar RM7–RM10. Ada bahagian muslim dan bukan muslim yang dipisahkan.',
      },
      {
        id: 'sibu-night-market',
        name: 'Pasar Malam Sibu (Sibu Night Market)',
        distance: '250 meter · Jalan Central',
        specialty: ['Roti Bulan Sabit', 'Chai Kuih (Cucur Sayur)', 'Bakso Bakar', 'Sate Daging', 'Soya Tahu'],
        price: 'low',
        note: 'Waktu operasi 5:00 PM – 11:00 PM setiap hari di sepanjang Jalan Central. Berhampiran Kuil Tua Pek Kong.',
      },
      {
        id: 'tua-pek-kong-lane',
        name: 'Lorong Makan Tua Pek Kong',
        distance: '300 meter · Jalan Tunku Abdul Rahman',
        specialty: ['Kompia Fuzhou', 'Bak Kut Teh', 'Kolo Mee (Bihun Sup)', 'Kai Lan Goreng Bawang', 'Kopi O'],
        price: 'low',
        note: 'Deretan kedai kopi lama di kaki bukit Tua Pek Kong. Roti Kompia boleh didapati segar setiap pagi.',
      },
      {
        id: 'chin-sian',
        name: 'Chin Sian Food Court (Happy World)',
        distance: '550 meter · Jalan Wong Nai Siong',
        specialty: ['Air Tiga Masam', 'Mi Goreng Basah', 'Sai Yong Choy Bihun', 'Char Kway Teow', 'Ikan Terubuk Masin'],
        price: 'mid',
        note: 'Mirip food court Singapore. Menu kegemaran penduduk tempatan. Cuba air tiga masam dalam cawan besar.',
      },
      {
        id: 'cabeijo',
        name: 'Restoran Cabeijo',
        distance: '700 meter · Jalan Marine',
        specialty: ['Sayur Ulam Liar', 'Sup Buntut', 'Kway Teow Goreng Sarawak', 'Sotong Kangkung', 'Itik Salai'],
        price: 'mid',
        note: 'Restoran yang terkenal dengan masakan kampung dan hasil hutan. Hidangan sihat, rasa asli Sarawak.',
      },
      {
        id: 'seng-kee',
        name: 'Kedai Kopi Seng Kee',
        distance: '450 meter · Jalan Ban Hock',
        specialty: ['Guang Bing on-site (Roti Fuzhou)', 'Kueh Tepung Abok', 'Kopi Muar', 'Roti Bakar Kaya', 'Tau Fu Fah'],
        price: 'low',
        note: 'Boleh tonton pembuatan Guang Bing (roti rata tradisional Fuzhou) secara langsung. Popular untuk sarapan pagi.',
      },
    ],
    nearby: [
      { id: 'tua-pek-kong', name: 'Kuil Tua Pek Kong Sibu (大伯公庙)', distance: '300 meter', duration: '30 – 45 minit', highlight: 'Kuil Cina tertua di Sibu, terletak di tebing Sungai Rejang. Ada tangga 100+ anak tangga ke puncak bukit dengan pemandangan panorama bandar dan sungai terpanjang Malaysia.', category: 'Sejarah · Agama' },
      { id: 'rejang-esplanade', name: 'Rejang Esplanade (Tebing Sungai Rejang)', distance: '100 meter', duration: '1 – 2 jam', highlight: 'Jalur pejalan kaki yang cantik di sepanjang tebing sungai Rejang terpanjang di Malaysia. Boleh berjalan ke arah Tua Pek Kong sambil menikmati angin sungai.', category: 'Taman · Rekreasi' },
      { id: 'sibu-heritage', name: 'Sibu Heritage Centre (Pusat Warisan Sibu)', distance: '500 meter (8 minit jalan)', duration: '1.5 – 2 jam', highlight: 'Galeri sejarah perbandaran Sibu, pameran imigrasi Cina Fuzhou dari tahun 1900-an, warisan etnik Iban/Melanau/Malay, dan pakaian tradisional.', category: 'Muzium · Sejarah' },
      { id: 'bukit-lima', name: 'Bukit Lima Nature Reserve', distance: '4 km (10 – 15 minit kereta)', duration: '2 – 3 jam', highlight: 'Hutan simpan hijau di tengah bandar dengan laluan mendaki berjenjalan, kanopi hutan primer, merpati dan burung liar. Tempat senaman kegemaran penduduk.', category: 'Alam Semula Jadi · Hiking' },
      { id: 'night-market', name: 'Pasar Malam Sibu (Night Market)', distance: '250 meter (Jalan Central)', duration: '1 – 2 jam', highlight: 'Setiap petang 5PM–11PM. Roti bulan sabit, chai kuih, bakso bakar, sate, dan banyak snek tempatan. Rasa seperti jalan-jalan di Fuzhou, China.', category: 'Makanan · Pasar Malam' },
      { id: 'bawang-assan', name: 'Rumah Panjang Iban Bawang Assan', distance: '30 minit bot dari Terminal Bot', duration: '4 – 6 jam (lawatan setengah hari)', highlight: 'Rumah panjang tradisional kaum Iban di seberang sungai Rejang. Boleh melihat tarian ngajat, mencuba tuak (arak nasi tradisional), dan memahami budaya asli Sarawak.', category: 'Budaya · Rumah Panjang' },
      { id: 'wisma-sanyan', name: 'Menara Wisma Sanyan', distance: '350 meter (5 minit jalan)', duration: '1 – 2 jam', highlight: 'Bangunan tertinggi di Sibu (28 tingkat). Pusat membeli-belah moden dengan kafe, restoran, pawagam, dan supermarket. Boleh singgah sejukkan badan selepas pasar.', category: 'Membeli-belah · Moden' },
      { id: 'sungai-rajang-cruise', name: 'Krus Sungai Rejang (Sibu River Cruise)', distance: '200 meter dari Terminal Bot', duration: '2 – 3 jam', highlight: 'Naiki bot persiaran sekitar sungai Rejang, melihat rumah terapung, kampung Melayu, dan pemandangan matahari terbenam. Ada juga krus makan malam.', category: 'Krus · Pemandangan Sungai' },
    ],
    faqs: [
      { q: 'Adakah bayaran masuk ke Pasar Sentral Sibu?', a: 'TIDAK. Kemasukan ke Pasar Sentral Sibu adalah PERCUMA untuk semua orang, termasuk rakyat Malaysia mahupun pelancong antarabangsa. Anda hanya bayar untuk barang dan makanan yang dibeli.' },
      { q: 'Bilakah waktu operasi sebenar Pasar Sentral?', a: 'Pasar beroperasi setiap hari termasuk cuti umum dari jam 6:00 PAGI hingga 6:00 PETANG. Sesetengah gerai makanan tingkat atas dan kedai pakaian mungkin dibuka kemudian (7:00 AM) atau tutup awal 5:00 PM. Petua: gerai paling segar buka seawal 5:30 AM!' },
      { q: 'Bagaimana cara dari Lapangan Terbang Sibu (SBW) ke Pasar Sentral?', a: 'Jarak kira-kira 25 km, perjalanan 20 – 25 minit. Paling mudah ambil Grab (RM25–RM35) atau teksi kaunter lapangan terbang (RM35–RM40). Beritahu pemandu destinasi "Pasar Sentral Jalan Channel" — bangunannya betul-betul bertentangan Terminal Bot Ekspres Sibu.' },
      { q: 'Di mana boleh parkir berhampiran Pasar Sentral Sibu?', a: 'Parkir tepi jalan Jalan Channel paling hampir (RM2/jam) tetapi cepat penuh 8:00 AM – 12:00 PM. Alternatif terbaik: parkir bertingkat Wisma Sanyan (350 m, RM3/jam pertama) atau Terminal Bot Ekspres (150 m, maks RM8 sehari).' },
      { q: 'Adakah menawar harga dibenarkan di Pasar Sentral Sibu?', a: 'Ya, terutamanya untuk barang sayur, buah, hasil hutan, dan pakaian. Bagi gerai yang sudah tulis harga jelas (contoh: Mi Kampua RM5), biasanya tidak perlu tawar. Tawar dengan sopan dan senyum — ia sebahagian daripada budaya pasar Sibu.' },
      { q: 'Adakah kad kredit / e-wallet diterima?', a: 'Kebanyakan gerai kecil PASAR BASAH hanya menerima WANG TUNAI. Duit syiling banyak diperlukan untuk belian kecil. Tingkat atas: kedai pakaian, beberapa gerai makanan, dan Kek Lapis menerima QR Pay (Touch ‘n Go, Boost, GrabPay). Ada mesin ATM Maybank di luar pasar.' },
      { q: 'Apakah makanan WAJIB CUBA di Pasar Sentral Sibu?', a: '3 hidangan ikonik: (1) Mi Kampua Sibu — mi kering campur sos bawang goreng dan minyak bijan, biasanya dengan sup tulang. (2) Kompia — roti rata bakar khas Fuzhou, boleh makan kosong atau berinti daging. (3) Teh C Peng Special — 3 lapisan teh susu ais rasa unik Sibu. Cuba juga Dabai (buah zaitun Sarawak) jika ada musim.' },
      { q: 'Adakah Pasar Sentral mesra OKU / kerusi roda?', a: 'Ya. Pintu masuk utama mempunyai cerun untuk kerusi roda. Laluan di tingkat bawah agak luas. Tandas awam dan lif disediakan. Walau bagaimanapun, waktu puncak (8:00–11:00 AM) mungkin agak sesak untuk navigasi kerusi roda.' },
      { q: 'Bolehkah ambil gambar di dalam pasar?', a: 'Ya, gambar untuk kegunaan peribadi digalakkan — pasar adalah objek fotografi yang sangat menarik! Jika ingin mengambil gambar DEKAT penjual (khususnya wanita Iban dengan pakaian tradisional), minta izin dulu sebagai tanda hormat. Jangan halang laluan pejalan kaki.' },
      { q: 'Bagaimana dengan kebersihan dan keselesaan?', a: 'Pasar Sentral Sibu diiktiraf sebagai salah satu pasar tertutup TERBERSIH di Malaysia. Walaupun pasar basah, lantai sentiasa dicuci dan kering dengan baik. Ada kipas siling dan pengudaraan yang baik. Air minuman awam dan tempat duduk tersedia di tingkat atas.' },
      { q: 'Bilakah MASA TERBAIK untuk melawat?', a: '7:00 AM – 10:00 AM adalah TERBAIK: semua hasil segar masih lengkap (ikan sungai, daging pagi, buah masak pohon), kurang sesak, dan cuaca belum terlalu panas. Jika hanya mahu BELI MAKANAN dan cuba Mi Kampua, datang 11:00 AM – 2:00 PM.' },
      { q: 'Apakah "buah eksotik" yang boleh dijumpai di sini?', a: 'Pasar Sentral terkenal dengan hasil hutan Sarawak: Dabai (zaitun Sarawak, makan dengan kicap & gula), Terung Asam, Buah Mata Kucing, Rambutan Hutan, Durian Hutan (musim tertentu), Nangka Mini, Cempedak, dan pelbagai ulaman hutan.' },
      { q: 'Apakah yang unik tentang pembungkusan ayam hidup di Sibu?', a: 'Satu tradisi TANPA TANDINGAN di Pasar Sentral Sibu: penjual ayam Cina membungkus ayam/itik hidup di dalam "tiub" daripada surat khabar lama! Bentuknya khas supaya ayam tidak boleh lari dan kekal kemas — satu pemandangan ikonik.' },
      { q: 'Adakah tempat menyimpan bagasi besar?', a: 'Tiada perkhidmatan locker di dalam pasar. Jika ada beg pakaian besar, boleh tinggalkan di hotel (kebanyakan hotel Sibu menyimpan percuma) atau di kaunter Terminal Bot Ekspres bertentangan (bayaran kecil RM2–RM5/beg).' },
      { q: 'Adakah Wi-Fi percuma? Berapa liputan 4G?', a: 'Wi-Fi percuma TIDAK disediakan secara rasmi. Bagaimanapun, semua pengendali utama Malaysia (Maxis, Celcom, Digi, U Mobile, Yes) mempunyai liputan 4G LTE yang SANGAT BAIK di kawasan pasar dan sekitar bandar Sibu.' },
      { q: 'Bolehkah saya dapatkan Kek Lapis Sarawak di pasar?', a: 'TENTU SAHAJA. Ada beberapa gerai Kek Lapis di tingkat atas (berhampiran food court) dan tingkat bawah (barang kering). Harga bermula RM8–RM15 sepotong kecil, RM40–RM80 sebiji. Mereka membungkus rapi untuk dibawa balik sebagai oleh-oleh.' },
      { q: 'Apakah musim durian di Sibu? Boleh dapat di sini?', a: 'Musim durian Sarawak jatuh pada bulan November – Januari (musim hujan). Musim durian hutan sedikit lebih awal (OKT–NOV). Jika datang musim durian, ada gerai khusus jual durian dengan harga RM10–RM30 sebiji — jauh lebih murah daripada Semenanjung Malaysia!' },
      { q: 'Adakah tempat solat & tandas awam?', a: 'Ya. Surau untuk lelaki dan wanita disediakan di tingkat atas (berhampiran food court). Tandas awam ada di setiap tingkat, RM0.20–RM0.50 seorang. Bahagian makanan Muslim dipisahkan dengan baik dari bahagian bukan Muslim.' },
      { q: 'Bolehkah saya bawa balik hasil hutan (Dabai, sayur hutan) ke Semenanjung / luar negeri?', a: 'Hasil segar seperti sayur dan buah-buahan (termasuk Dabai) BOLEH dibawa balik dalam bagasi terdaftar untuk penerbangan domestik Malaysia. Untuk durian, minta penjual bungkus rapat dengan plastik anti-bau. TIDAK DIGALAKKAN bawa ke luar negara tanpa permit.' },
    ],
  },

  en: {
    keyInfo: [
      { icon: 'ticket', label: 'Free entry', value: 'NO FEE', sub: 'Open to everyone, locals and visitors alike' },
      { icon: 'clock', label: 'Opening hours', value: '6:00 AM – 6:00 PM', sub: 'Every day including public holidays' },
      { icon: 'stopwatch', label: 'Recommended duration', value: '2 – 3 hours', sub: 'Browse the stalls + eat at the food court' },
      { icon: 'sun', label: 'Best time', value: '7:00 AM – 10:00 AM', sub: 'Freshest produce and fewer crowds' },
    ],
    marketSections: [
      {
        id: 'hasil-basah',
        floor: 'bawah',
        title: 'Wet Market & Fresh Produce',
        tagline: 'Ground Floor · West Wing',
        description:
          'Fresh meat, Rejang river fish, prawns, clams, kampung vegetables, tropical fruit, and live poultry neatly packed in old newspaper — a tradition unique to Sibu.',
        items: ['Fresh River Fish', 'Beef & Pork', 'Live Chicken & Duck', 'Kampung Vegetables', 'Tropical Fruit'],
      },
      {
        id: 'hasil-hutan',
        floor: 'bawah',
        title: 'Jungle Produce & Dayak Heritage',
        tagline: 'Ground Floor · Central Section',
        description:
          'Sold by Iban women in traditional dress: jungle ferns, wild mushrooms, bamboo shoots, tubers, Dabai (Sarawak olive), wild honey and hand-woven rattan.',
        items: ['Jungle Greens & Ferns', 'Wild Forest Honey', 'Dabai (Sarawak Olive)', 'Rattan Weaving', 'Exotic Fruit'],
      },
      {
        id: 'barang-kering',
        floor: 'bawah',
        title: 'Dry Goods & Groceries',
        tagline: 'Ground Floor · East Wing',
        description:
          'Cassava crackers, sambal, belacan (shrimp paste), soy sauce, spice mixes, dried anchovies, salted fish, Sarawak layer cake and daily necessities at the most affordable retail prices in town.',
        items: ['Dried Anchovies & Salted Fish', 'Sambal & Belacan', 'Crackers & Snacks', 'Sarawak Layer Cake', 'Spices'],
      },
      {
        id: 'pakaian',
        floor: 'atas',
        title: 'Clothing & Accessories',
        tagline: 'Upper Floor · Front Section',
        description:
          'Sarawak batik, hand-woven Pua Kumbu cloth, baju kurung, t-shirts, shoes, handbags, affordable jewellery and souvenirs to remember your Sibu trip by.',
        items: ['Pua Kumbu Weave', 'Sarawak Batik', 'Everyday Wear', 'Souvenirs', 'Accessories'],
      },
      {
        id: 'makanan',
        floor: 'atas',
        title: 'Food Court & Dining',
        tagline: 'Upper Floor · Back Section',
        description:
          'Dozens of food stalls selling Mi Kampua (Sibu’s signature dry noodles), kampung meatball soup, Kompia (Fuzhou bread), Sarawak laksa, Teh C Peng Special and mixed rice at very reasonable prices.',
        items: ['Sibu Mi Kampua', 'Kompia & Kom Popia', 'Sarawak Laksa', 'Mixed Rice', 'Teh C Peng Special'],
      },
      {
        id: 'kek-lapis',
        floor: 'atas',
        title: 'Layer Cake & Traditional Kuih',
        tagline: 'Upper Floor · Near the Food Court',
        description:
          'Sarawak layer cake in many flavours (Oreo Cheese, Pandan, Mocha, Green Tea), kuih lapis, kuih talam, bahulu, and assorted Sarawak and Fuzhou pastries.',
        items: ['Sarawak Layer Cake', 'Kuih Lapis & Talam', 'Chocolate & Cheese Cake', 'Pastries & Tarts', 'Bahulu'],
      },
    ],
    ticketInfo: [
      { type: 'Adults', price: 'Free', free: true, note: 'All ages welcome' },
      { type: 'Children', price: 'Free', free: true, note: 'May enter together with parents' },
      { type: 'Seniors (60+)', price: 'Free', free: true, note: 'No special charge; discounts at some food stalls' },
      { type: 'Foreign visitors', price: 'Free', free: true, note: 'Same as Malaysian citizens' },
      { type: 'School / NGO groups', price: 'Free', free: true, note: 'Ask management for permission if the group exceeds 20 people' },
      { type: 'Commercial photography', price: 'Contact management', free: false, note: 'Personal photos are fine; advertising shoots need SMC approval' },
    ],
    parking: [
      { id: 'jalan-channel', name: 'Jalan Channel street parking', distance: 'Right next to the market', rate: 'RM2 first hour, RM1 per 30 min after', capacity: 'Limited (about 50 bays)', notes: 'Closest option but fills up fast 8:00 AM – 12:00 PM. Coupon machine or e-wallet payment.' },
      { id: 'wisma-sanyan', name: 'Wisma Sanyan parking', distance: '350 m (5 min walk)', rate: 'RM3 first hour, RM2 per hour after', capacity: 'Multi-storey, 300+ bays', notes: 'Main alternative when street parking is full. Sibu’s largest shopping complex.' },
      { id: 'terminal-bot', name: 'Sibu Express Boat Terminal parking', distance: '150 m (2 min walk)', rate: 'RM2/hour, max RM8 per day', capacity: 'Moderate (about 80 bays)', notes: 'Ideal if you continue to Kuching or Kapit by boat after the market.' },
      { id: 'medan-hotel', name: 'Medan Hotel / Jalan P. Ramlee parking', distance: '500 m (7 min walk)', rate: 'RM2/hour', capacity: 'Moderate', notes: 'Cheap and near the bus station. The area gets busy in the evening.' },
      { id: 'sunshine-mall', name: 'Sunshine Mall (Sarawak Plaza) parking', distance: '650 m (9 min walk)', rate: 'RM3 first hour, RM2 per hour after', capacity: 'Plenty', notes: 'Backup if Wisma Sanyan is full. Accessible from Jalan Central.' },
      { id: 'tua-pek-kong', name: 'Parking near Tua Pek Kong Temple', distance: '300 m (4 min walk)', rate: 'RM1 – RM2/hour', capacity: 'Limited (about 30 bays)', notes: 'Arrive early to get a bay. Visit the temple before or after the market.' },
    ],
    transport: [
      {
        id: 'airport',
        mode: 'airport',
        title: 'From Sibu Airport (SBW) to Sibu Central Market',
        duration: '20 – 25 minutes',
        cost: 'RM25 – RM40',
        steps: [
          'Arrive at the arrival hall of Sibu Airport (SBW)',
          'Take a taxi from the official taxi counter on the left as you exit',
          'Or open the Grab app for a fixed fare',
          'Tell the driver "Pasar Sentral, Jalan Channel" or "Sibu Central Market"',
          'The market sits directly opposite the Sibu Express Boat Terminal',
        ],
        tips: 'Grab is usually cheaper than a regular taxi. Fares rise during heavy rain or peak hours.',
      },
      {
        id: 'bot-ekspres',
        mode: 'boat',
        title: 'From the Sibu Express Boat Passenger Terminal',
        duration: '1 – 3 minutes on foot',
        cost: 'Free',
        steps: [
          'Step off the express boat at the Sibu terminal',
          'Leave the terminal and look to your left',
          'The Sibu Central Market building is clearly visible just 50 m away',
          'Use the pedestrian crossing on Jalan Channel',
        ],
        tips: 'Arriving from Kuching, Bintulu, Kapit or Belaga by express boat? You only need to cross the road — the market could not be closer.',
      },
      {
        id: 'bas-bandar',
        mode: 'bus',
        title: 'Sibu local bus',
        duration: '25 – 45 minutes',
        cost: 'RM1 – RM2 per person',
        steps: [
          'Go to the Sibu local bus station on Jalan P. Ramlee',
          'Find a route running along Jalan Channel or Jalan Wong Nai Siong',
          'Get off at the "Pasar Sentral" stop or near the boat terminal',
          'Walk 2–3 minutes to the main entrance',
        ],
        tips: 'Buses run 6:30 AM – 8:00 PM and are less frequent on weekends. Use Grab if you are unfamiliar with the routes.',
      },
      {
        id: 'teksi',
        mode: 'taxi',
        title: 'Town taxi (from the centre or your hotel)',
        duration: '5 – 12 minutes',
        cost: 'RM6 – RM18',
        steps: [
          'Find a taxi at a taxi stand (for example in front of Wisma Sanyan or Medan Hotel)',
          'Or ask your hotel staff to call one for you',
          'Make sure the meter is used, or agree on the fare BEFORE you get in',
          'Address: Jalan Channel, opposite the Sibu Express Boat Terminal',
        ],
        tips: 'Most Sibu taxis do not use the meter — check the price first. Grab is recommended for transparent pricing.',
      },
      {
        id: 'grab',
        mode: 'grab',
        title: 'Grab / e-hailing',
        duration: '5 – 15 minutes',
        cost: 'RM4 – RM20',
        steps: [
          'Open the Grab app on your phone',
          'Set the destination to "Pasar Sentral Sibu" or "Sibu Central Market"',
          'Choose GrabCar, GrabTaxi or JustGrab',
          'Pay by cash, credit card or e-wallet in the app',
        ],
        tips: 'The easiest, safest option with fixed pricing. During busy hours, add a small "boost" to secure a driver.',
      },
      {
        id: 'berjalan',
        mode: 'walk',
        title: 'On foot from Wisma Sanyan / Sibu town centre',
        duration: '5 – 10 minutes',
        cost: 'Free',
        steps: [
          'From Wisma Sanyan (Sibu’s tallest building), head down to Jalan Wong Nai Siong',
          'Walk towards the Rejang river (the Rejang Esplanade)',
          'Turn right into Jalan Channel',
          'The market is on your left, just before the boat terminal',
        ],
        tips: 'Best in the morning or late afternoon. Avoid 12:00 – 2:00 PM when it is very hot and humid.',
      },
      {
        id: 'kereta',
        mode: 'car',
        title: 'Driving yourself & parking',
        duration: 'Depends on your starting point',
        cost: 'Parking RM2 – RM6 per hour',
        steps: [
          'Search "Sibu Central Market" in Waze or Google Maps',
          'Try the Jalan Channel street parking next to the market',
          'Or park at Wisma Sanyan / Medan Hotel if street parking is full',
          'Use the coupon machine or pay through an e-wallet app',
        ],
        tips: 'Street parking fills up quickly between 8:00 AM and 12:00 PM. Wisma Sanyan (5 minutes away) has a multi-storey car park.',
      },
    ],
    foodSpots: [
      {
        id: 'food-court-atas',
        name: 'Pasar Sentral Food Court (Upper Floor)',
        distance: '0 km · inside the market',
        specialty: ['Sibu Mi Kampua', 'Grilled Kompia', 'Mixed Rice', 'Teh C Peng', 'Meatball Soup'],
        price: 'low',
        note: 'The closest option. A plate of Mi Kampua plus Teh C Peng costs around RM7–RM10. Muslim and non-Muslim sections are separated.',
      },
      {
        id: 'sibu-night-market',
        name: 'Sibu Night Market (Pasar Malam)',
        distance: '250 m · Jalan Central',
        specialty: ['Crescent Moon Bun', 'Chai Kuih (Vegetable Fritter)', 'Grilled Bakso', 'Meat Satay', 'Soya Bean Curd'],
        price: 'low',
        note: 'Open daily 5:00 PM – 11:00 PM along Jalan Central, near Tua Pek Kong Temple.',
      },
      {
        id: 'tua-pek-kong-lane',
        name: 'Tua Pek Kong Food Lane',
        distance: '300 m · Jalan Tunku Abdul Rahman',
        specialty: ['Fuzhou Kompia', 'Bak Kut Teh', 'Kolo Mee', 'Fried Kai Lan with Garlic', 'Kopi O'],
        price: 'low',
        note: 'A row of old kopitiams at the foot of Tua Pek Kong hill. Kompia bread is freshly made every morning.',
      },
      {
        id: 'chin-sian',
        name: 'Chin Sian Food Court (Happy World)',
        distance: '550 m · Jalan Wong Nai Siong',
        specialty: ['Three-Sour Drink', 'Wet Fried Noodles', 'Sai Yong Choy Bihun', 'Char Kway Teow', 'Salted Terubuk Fish'],
        price: 'mid',
        note: 'Similar to a Singapore hawker centre and a local favourite. Try the three-sour drink in a large cup.',
      },
      {
        id: 'cabeijo',
        name: 'Restoran Cabeijo',
        distance: '700 m · Jalan Marine',
        specialty: ['Wild Jungle Salad', 'Oxtail Soup', 'Sarawak Fried Kway Teow', 'Squid with Kangkung', 'Smoked Duck'],
        price: 'mid',
        note: 'Known for kampung-style cooking and jungle produce. Healthy dishes with authentic Sarawak flavours.',
      },
      {
        id: 'seng-kee',
        name: 'Seng Kee Kopitiam',
        distance: '450 m · Jalan Ban Hock',
        specialty: ['Fresh Guang Bing (Fuzhou Bread)', 'Abok Flour Kueh', 'Muar Coffee', 'Kaya Toast', 'Tau Fu Fah'],
        price: 'low',
        note: 'You can watch Guang Bing, a traditional Fuzhou flatbread, being made on site. Popular for breakfast.',
      },
    ],
    nearby: [
      { id: 'tua-pek-kong', name: 'Tua Pek Kong Temple Sibu (大伯公庙)', distance: '300 m', duration: '30 – 45 minutes', highlight: 'Sibu’s oldest Chinese temple on the banks of the Rejang. Climb 100+ steps to the hilltop for a panoramic view of the town and Malaysia’s longest river.', category: 'History · Religion' },
      { id: 'rejang-esplanade', name: 'Rejang Esplanade (Rejang Riverfront)', distance: '100 m', duration: '1 – 2 hours', highlight: 'A pleasant riverside promenade along Malaysia’s longest river. Walk towards Tua Pek Kong and enjoy the river breeze.', category: 'Park · Recreation' },
      { id: 'sibu-heritage', name: 'Sibu Heritage Centre', distance: '500 m (8 min walk)', duration: '1.5 – 2 hours', highlight: 'A gallery of Sibu’s town history: Fuzhou Chinese immigration from the 1900s, Iban/Melanau/Malay heritage and traditional costumes.', category: 'Museum · History' },
      { id: 'bukit-lima', name: 'Bukit Lima Nature Reserve', distance: '4 km (10 – 15 min drive)', duration: '2 – 3 hours', highlight: 'A green forest reserve in the middle of town with boardwalks, primary forest canopy and wild birds. A favourite exercise spot for locals.', category: 'Nature · Hiking' },
      { id: 'night-market', name: 'Sibu Night Market', distance: '250 m (Jalan Central)', duration: '1 – 2 hours', highlight: 'Open 5 PM – 11 PM daily. Crescent moon buns, chai kuih, grilled bakso, satay and plenty of local snacks — it feels like a street in Fuzhou, China.', category: 'Food · Night Market' },
      { id: 'bawang-assan', name: 'Bawang Assan Iban Longhouse', distance: '30 min by boat from the terminal', duration: '4 – 6 hours (half-day trip)', highlight: 'Traditional Iban longhouses across the Rejang river. Watch the ngajat dance, try tuak (traditional rice wine) and learn about Sarawak’s indigenous culture.', category: 'Culture · Longhouse' },
      { id: 'wisma-sanyan', name: 'Wisma Sanyan Tower', distance: '350 m (5 min walk)', duration: '1 – 2 hours', highlight: 'Sibu’s tallest building (28 floors) with a modern mall, cafés, restaurants, a cinema and a supermarket — a good place to cool off after the market.', category: 'Shopping · Modern' },
      { id: 'sungai-rajang-cruise', name: 'Rejang River Cruise (Sibu River Cruise)', distance: '200 m from the boat terminal', duration: '2 – 3 hours', highlight: 'Sightseeing boat trips along the Rejang past floating houses and Malay villages, with sunset and dinner cruise options.', category: 'Cruise · River Views' },
    ],
    faqs: [
      { q: 'Is there an entrance fee for Sibu Central Market?', a: 'NO. Entry to Sibu Central Market is FREE for everyone, both Malaysians and international visitors. You only pay for the goods and food you buy.' },
      { q: 'What are the actual opening hours of Pasar Sentral Sibu?', a: 'The market operates daily, including public holidays, from 6:00 AM to 6:00 PM. Some upper-floor food stalls and clothing shops open later (7:00 AM) or close early at 5:00 PM. Tip: the freshest stalls open as early as 5:30 AM!' },
      { q: 'How do I get from Sibu Airport (SBW) to Sibu Central Market?', a: 'It is about 25 km, a 20 – 25 minute ride. The easiest way is Grab (RM25–RM35) or an airport taxi from the official counter (RM35–RM40). Tell the driver "Pasar Sentral, Jalan Channel" — the building is directly opposite the Sibu Express Boat Terminal.' },
      { q: 'Where can I park near Sibu Central Market?', a: 'Street parking on Jalan Channel is the closest (RM2/hour) but fills up between 8:00 AM and 12:00 PM. Best alternatives: the multi-storey Wisma Sanyan car park (350 m, RM3 first hour) or the Express Boat Terminal (150 m, max RM8 per day).' },
      { q: 'Is bargaining allowed at Sibu Central Market?', a: 'Yes, especially for vegetables, fruit, jungle produce and clothing. For stalls with clearly displayed prices (for example Mi Kampua at RM5), bargaining is unnecessary. Bargain politely and smile — it is part of Sibu market culture.' },
      { q: 'Are credit cards or e-wallets accepted?', a: 'Most small WET MARKET stalls accept CASH ONLY, so keep plenty of small change. On the upper floor, clothing shops, some food stalls and layer cake sellers accept QR Pay (Touch ‘n Go, Boost, GrabPay). There is a Maybank ATM outside the market.' },
      { q: 'What food must I try at Sibu Central Market?', a: 'Three iconic dishes: (1) Mi Kampua — Sibu’s dry tossed noodles with fried shallot sauce and sesame oil, usually served with bone soup. (2) Kompia — a Fuzhou flatbread, plain or filled with meat. (3) Teh C Peng Special — Sibu’s three-layer iced milk tea. Also try Dabai (Sarawak olive) when in season.' },
      { q: 'Is Sibu Central Market wheelchair accessible?', a: 'Yes. The main entrance has a wheelchair ramp, ground-floor aisles are fairly wide, and public toilets and a lift are available. During the 8:00 – 11:00 AM peak it can be crowded, which makes wheelchair navigation harder.' },
      { q: 'Can I take photos inside the market?', a: 'Yes, photos for personal use are encouraged — the market is a photographer’s dream. If you want close-ups of the sellers (especially Iban women in traditional dress), please ask permission first as a sign of respect, and do not block the walkways.' },
      { q: 'How clean and comfortable is the market?', a: 'Sibu Central Market is recognised as one of the CLEANEST indoor markets in Malaysia. Despite being a wet market, the floors are washed and kept dry, with ceiling fans and good ventilation. Public drinking water and seating are available on the upper floor.' },
      { q: 'When is the BEST time to visit Sibu Central Market?', a: '7:00 AM – 10:00 AM is best: the full range of fresh produce is still available (river fish, morning meat, tree-ripened fruit), it is less crowded and the weather is still cool. If you only want to EAT and try Mi Kampua, come between 11:00 AM and 2:00 PM.' },
      { q: 'What “exotic fruit” can I find here?', a: 'The market is famous for Sarawak jungle produce: Dabai (Sarawak olive, eaten with soy sauce and sugar), Terung Asam, longan, wild rambutan, wild durian (in season), jackfruit, cempedak and many jungle greens.' },
      { q: 'What is special about the live-chicken packaging in Sibu?', a: 'A tradition you will not see anywhere else: Chinese poultry sellers wrap live chickens and ducks inside a "tube" made from old newspaper. The shape keeps the birds secure and tidy — an iconic Sibu sight worth photographing.' },
      { q: 'Is there luggage storage?', a: 'There is no locker service inside the market. For large suitcases, leave them at your hotel (most Sibu hotels store luggage free) or at the counter of the Express Boat Terminal opposite (around RM2–RM5 per bag).' },
      { q: 'Is there free Wi-Fi? How good is the 4G coverage?', a: 'Free Wi-Fi is NOT officially provided. However, all major Malaysian operators (Maxis, Celcom, Digi, U Mobile, Yes) have VERY GOOD 4G LTE coverage at the market and around Sibu town.' },
      { q: 'Can I buy Sarawak layer cake (Kek Lapis) at the market?', a: 'Absolutely. Several layer cake stalls operate on the upper floor (near the food court) and on the ground floor (dry goods). Prices start around RM8–RM15 per small slice and RM40–RM80 per whole cake. They pack it well for taking home.' },
      { q: 'When is durian season in Sibu? Can I find it here?', a: 'Sarawak’s durian season runs November to January (the rainy season), with wild durian slightly earlier (Oct–Nov). In season there are dedicated durian stalls at the front of the market selling for RM10–RM30 each — far cheaper than in Peninsular Malaysia.' },
      { q: 'Are there prayer rooms and public toilets?', a: 'Yes. Prayer rooms (surau) for men and women are on the upper floor near the food court. Public toilets are on each floor (RM0.20–RM0.50 per use). The Muslim and non-Muslim food sections are clearly separated.' },
      { q: 'Can I take jungle produce (Dabai, jungle vegetables) home?', a: 'Fresh vegetables and fruit, including Dabai, can go in checked luggage on domestic Malaysian flights. For durian, ask the seller to wrap it tightly in odour-proof plastic. Taking fresh produce ABROAD without a permit is not recommended.' },
    ],
  },

  zh: {
    keyInfo: [
      { icon: 'ticket', label: '免费入场', value: '无需门票', sub: '本地居民与旅客皆可自由进入' },
      { icon: 'clock', label: '营业时间', value: '6:00 AM – 6:00 PM', sub: '含公共假期每天营业' },
      { icon: 'stopwatch', label: '建议停留', value: '2 – 3 小时', sub: '逛摊位 + 在美食中心用餐' },
      { icon: 'sun', label: '最佳时段', value: '7:00 AM – 10:00 AM', sub: '生鲜最齐全、人潮较少' },
    ],
    marketSections: [
      {
        id: 'hasil-basah',
        floor: 'bawah',
        title: '湿巴刹与生鲜',
        tagline: '楼下 · 西侧',
        description: '新鲜肉类、拉让江渔获、虾、蚌、甘榜蔬菜、热带水果，以及用旧报纸包得整整齐齐的活鸡活鸭——诗巫独一无二的传统。',
        items: ['拉让江鲜鱼', '牛肉与猪肉', '活鸡活鸭', '甘榜蔬菜', '热带水果'],
      },
      {
        id: 'hasil-hutan',
        floor: 'bawah',
        title: '森林物产与达雅文化',
        tagline: '楼下 · 中段',
        description: '由身穿传统服饰的伊班族妇女摆卖：野生蕨类、野生菌、竹笋、根茎类、达拜果（砂拉越橄榄）、野生蜂蜜与手工藤编。',
        items: ['野菜与蕨类', '纯野生蜂蜜', '达拜果（砂拉越橄榄）', '藤编工艺品', '稀有水果'],
      },
      {
        id: 'barang-kering',
        floor: 'bawah',
        title: '干货与杂货',
        tagline: '楼下 · 东侧',
        description: '木薯片、参巴酱、虾酱（belacan）、酱油、香料粉、江鱼仔、咸鱼、砂拉越千层糕与日用品，是全城最实惠的零售价。',
        items: ['江鱼仔与咸鱼', '参巴与虾酱', '薯片零食', '砂拉越千层糕', '各式香料'],
      },
      {
        id: 'pakaian',
        floor: 'atas',
        title: '服饰与配件',
        tagline: '楼上 · 前段',
        description: '砂拉越峇迪布、Pua Kumbu 手工织布、马来套装（baju kurung）、T 恤、鞋子、手提包、平价首饰与伴手礼，留住诗巫回忆。',
        items: ['Pua Kumbu 织布', '砂拉越峇迪', '日常服饰', '伴手礼', '配件饰品'],
      },
      {
        id: 'makanan',
        floor: 'atas',
        title: '美食中心与餐饮',
        tagline: '楼上 · 后段',
        description: '数十个摊位售卖干盘面（诗巫招牌干拌面）、乡村肉丸汤、光饼（福州面包）、砂拉越叻沙、三色奶茶（Teh C Peng Special）与经济饭，价格非常实惠。',
        items: ['诗巫干盘面', '光饼与咸光饼', '砂拉越叻沙', '经济饭', '三色奶茶'],
      },
      {
        id: 'kek-lapis',
        floor: 'atas',
        title: '千层糕与传统糕点',
        tagline: '楼上 · 美食中心附近',
        description: '多种口味的砂拉越千层糕（Oreo 芝士、班兰、摩卡、绿茶）、九层糕、达兰糕、bahulu 鸡蛋糕，以及砂拉越与福州传统糕点。',
        items: ['砂拉越千层糕', '九层糕与达兰糕', '巧克力与芝士蛋糕', '糕点与挞类', '鸡蛋糕 Bahulu'],
      },
    ],
    ticketInfo: [
      { type: '成人', price: '免费', free: true, note: '各年龄层欢迎' },
      { type: '儿童', price: '免费', free: true, note: '可由家长陪同入场' },
      { type: '乐龄人士（60+）', price: '免费', free: true, note: '无特别收费；部分餐摊有折扣' },
      { type: '外国旅客', price: '免费', free: true, note: '与马来西亚公民相同' },
      { type: '学校 / NGO 团体', price: '免费', free: true, note: '团体超过 20 人请先向管理方申请' },
      { type: '商业摄影', price: '需洽管理方', free: false, note: '个人拍照自由；广告拍摄须诗巫市议会核准' },
    ],
    parking: [
      { id: 'jalan-channel', name: 'Jalan Channel 路边停车', distance: '就在市场旁', rate: '首小时 RM2，之后每 30 分钟 RM1', capacity: '有限（约 50 格）', notes: '最近但 8:00 AM – 12:00 PM 很快停满，可用固本机器或电子钱包付费。' },
      { id: 'wisma-sanyan', name: '三洋大厦停车场', distance: '350 米（步行 5 分钟）', rate: '首小时 RM3，之后每小时 RM2', capacity: '多层停车场，逾 300 格', notes: '路边停满时的首选，也是诗巫最大购物中心。' },
      { id: 'terminal-bot', name: '诗巫快艇码头停车场', distance: '150 米（步行 2 分钟）', rate: '每小时 RM2，每日上限 RM8', capacity: '中等（约 80 格）', notes: '逛完市场要搭船前往古晋或加帛最方便。' },
      { id: 'medan-hotel', name: 'Medan Hotel / Jalan P. Ramlee 停车', distance: '500 米（步行 7 分钟）', rate: '每小时 RM2', capacity: '中等', notes: '价格便宜、靠近巴士站，傍晚人车较多。' },
      { id: 'sunshine-mall', name: 'Sunshine Mall（砂拉越广场）停车场', distance: '650 米（步行 9 分钟）', rate: '首小时 RM3，之后每小时 RM2', capacity: '充足', notes: '三洋大厦停满时的备用选择，可由 Jalan Central 进出。' },
      { id: 'tua-pek-kong', name: '大伯公庙附近停车', distance: '300 米（步行 4 分钟）', rate: '每小时 RM1 – RM2', capacity: '有限（约 30 格）', notes: '早点到容易有位，可顺道参观大伯公庙。' },
    ],
    transport: [
      {
        id: 'airport',
        mode: 'airport',
        title: '从诗巫机场（SBW）到诗巫中央市场',
        duration: '20 – 25 分钟',
        cost: 'RM25 – RM40',
        steps: [
          '抵达诗巫机场（SBW）入境大厅',
          '在出口左侧的官方德士柜台乘车',
          '或打开 Grab App 叫车，价格固定',
          '告知司机目的地「Pasar Sentral, Jalan Channel」或「Sibu Central Market」',
          '市场就在诗巫快艇码头正对面',
        ],
        tips: 'Grab 通常比一般德士便宜；大雨或高峰时段车资会较高。',
      },
      {
        id: 'bot-ekspres',
        mode: 'boat',
        title: '从诗巫快艇客运码头出发',
        duration: '步行 1 – 3 分钟',
        cost: '免费',
        steps: [
          '在诗巫码头下船',
          '走出码头后往左看',
          '诗巫中央市场建筑就在约 50 米外，非常明显',
          '走 Jalan Channel 的行人穿越道',
        ],
        tips: '从古晋、民都鲁、加帛或 Belaga 搭快艇抵达，只需过一条马路，位置极佳。',
      },
      {
        id: 'bas-bandar',
        mode: 'bus',
        title: '诗巫市区巴士',
        duration: '25 – 45 分钟',
        cost: '每人 RM1 – RM2',
        steps: [
          '前往 Jalan P. Ramlee 的诗巫市区巴士站',
          '搭乘行经 Jalan Channel 或 Jalan Wong Nai Siong 的路线',
          '在「Pasar Sentral」站或快艇码头附近下车',
          '步行 2–3 分钟到市场正门',
        ],
        tips: '巴士营运时间为 6:30 AM – 8:00 PM，周末班次较少；不熟悉路线建议直接叫 Grab。',
      },
      {
        id: 'teksi',
        mode: 'taxi',
        title: '市区德士（从市中心或饭店出发）',
        duration: '5 – 12 分钟',
        cost: 'RM6 – RM18',
        steps: [
          '在德士候客处上车（如三洋大厦前、Medan Hotel）',
          '或请饭店柜台代为叫车',
          '确认跳表，或上车前先谈好价钱',
          '地址：Jalan Channel，诗巫快艇码头对面',
        ],
        tips: '诗巫多数德士不跳表，务必先问价；建议用 Grab，价格透明。',
      },
      {
        id: 'grab',
        mode: 'grab',
        title: 'Grab / 电召车',
        duration: '5 – 15 分钟',
        cost: 'RM4 – RM20',
        steps: [
          '打开手机上的 Grab App',
          '目的地设为「Pasar Sentral Sibu」或「Sibu Central Market」',
          '选择 GrabCar、GrabTaxi 或 JustGrab',
          '可用现金、信用卡或电子钱包在 App 内付款',
        ],
        tips: '最方便、价格固定又安全的选择；叫不到车时可加点「boost」。',
      },
      {
        id: 'berjalan',
        mode: 'walk',
        title: '从三洋大厦／市中心步行',
        duration: '5 – 10 分钟',
        cost: '免费',
        steps: [
          '从诗巫最高建筑三洋大厦（Wisma Sanyan）走到 Jalan Wong Nai Siong',
          '朝拉让江（河滨公园）方向前进',
          '右转进入 Jalan Channel',
          '市场就在左手边，快艇码头之前',
        ],
        tips: '建议清晨或傍晚步行；12:00 – 2:00 PM 又热又湿，尽量避免。',
      },
      {
        id: 'kereta',
        mode: 'car',
        title: '自驾与停车',
        duration: '视出发地点而定',
        cost: '停车 RM2 – RM6 / 小时',
        steps: [
          '在 Waze 或 Google 地图搜寻「Sibu Central Market」',
          '先试市场旁 Jalan Channel 的路边停车',
          '路边满位时改停三洋大厦或 Medan Hotel',
          '使用固本机器或以电子钱包 App 付费',
        ],
        tips: '8:00 AM – 12:00 PM 路边车位很快满；三洋大厦（步行 5 分钟）有多层停车场。',
      },
    ],
    foodSpots: [
      {
        id: 'food-court-atas',
        name: '中央市场美食中心（楼上）',
        distance: '0 公里 · 市场内',
        specialty: ['诗巫干盘面', '烤光饼', '经济饭', '三色奶茶', '肉丸汤'],
        price: 'low',
        note: '最近的选择，一碗干盘面加三色奶茶约 RM7–RM10，清真与非清真区分开。',
      },
      {
        id: 'sibu-night-market',
        name: '诗巫夜市（Pasar Malam）',
        distance: '250 米 · Jalan Central',
        specialty: ['新月形面包', '菜粿（炸蔬菜饼）', '烤肉丸 Bakso', '沙爹', '豆浆豆花'],
        price: 'low',
        note: '每天 5:00 PM – 11:00 PM 营业，位于 Jalan Central，靠近大伯公庙。',
      },
      {
        id: 'tua-pek-kong-lane',
        name: '大伯公庙美食街',
        distance: '300 米 · Jalan Tunku Abdul Rahman',
        specialty: ['福州光饼', '肉骨茶', '哥罗面（Kolo Mee）', '蒜香炒菜心（Kai Lan）', '咖啡乌'],
        price: 'low',
        note: '大伯公庙山脚的老咖啡店街，光饼每天清晨新鲜出炉。',
      },
      {
        id: 'chin-sian',
        name: 'Chin Sian 美食中心（Happy World）',
        distance: '550 米 · Jalan Wong Nai Siong',
        specialty: ['三酸饮料', '湿炒面', 'Sai Yong Choy 米粉', '炒粿条', '咸鲥鱼（Terubuk）'],
        price: 'mid',
        note: '类似新加坡小贩中心，是本地人的爱店；三酸饮料记得点大杯。',
      },
      {
        id: 'cabeijo',
        name: 'Cabeijo 餐馆',
        distance: '700 米 · Jalan Marine',
        specialty: ['野生山菜沙拉', '牛尾汤', '砂拉越炒粿条', '苏东炒蕹菜', '熏鸭'],
        price: 'mid',
        note: '以乡村料理与森林食材闻名，健康且道地的砂拉越风味。',
      },
      {
        id: 'seng-kee',
        name: 'Seng Kee 咖啡店',
        distance: '450 米 · Jalan Ban Hock',
        specialty: ['现做光饼（福州面包）', 'Abok 粉糕', '麻坡咖啡', '加央烤面包', '豆腐花'],
        price: 'low',
        note: '可现场观看光饼（福州传统扁面包）制作过程，是热门早餐店。',
      },
    ],
    nearby: [
      { id: 'tua-pek-kong', name: '诗巫大伯公庙（Tua Pek Kong）', distance: '300 米', duration: '30 – 45 分钟', highlight: '诗巫最古老的华人庙宇，位于拉让江畔。登上 100 多级台阶可俯瞰市区与马来西亚最长河流。', category: '历史 · 宗教' },
      { id: 'rejang-esplanade', name: '拉让河滨公园（Rejang Esplanade）', distance: '100 米', duration: '1 – 2 小时', highlight: '沿着马来西亚最长河流的河滨步道，可一路散步到大伯公庙，享受河风。', category: '公园 · 休闲' },
      { id: 'sibu-heritage', name: '诗巫文物中心（Sibu Heritage Centre）', distance: '500 米（步行 8 分钟）', duration: '1.5 – 2 小时', highlight: '诗巫城镇历史展馆：1900 年代福州华人移民、伊班／马兰诺／马来族群文化与传统服饰。', category: '博物馆 · 历史' },
      { id: 'bukit-lima', name: 'Bukit Lima 森林保留区', distance: '4 公里（车程 10 – 15 分钟）', duration: '2 – 3 小时', highlight: '市区中的绿色森林保留区，有栈道、原始林树冠层与野生鸟类，是居民最爱的运动地点。', category: '自然 · 健行' },
      { id: 'night-market', name: '诗巫夜市', distance: '250 米（Jalan Central）', duration: '1 – 2 小时', highlight: '每天 5PM–11PM 营业。新月形面包、菜粿、烤肉丸、沙爹与多种在地小吃，宛如走入中国福州的街道。', category: '美食 · 夜市' },
      { id: 'bawang-assan', name: 'Bawang Assan 伊班长屋', distance: '码头搭船 30 分钟', duration: '4 – 6 小时（半日游）', highlight: '拉让江对岸的传统伊班长屋，可欣赏 ngajat 舞蹈、品尝 tuak（传统米酒）并认识砂拉越原住民文化。', category: '文化 · 长屋' },
      { id: 'wisma-sanyan', name: '三洋大厦（Wisma Sanyan）', distance: '350 米（步行 5 分钟）', duration: '1 – 2 小时', highlight: '诗巫最高建筑（28 层），内有购物中心、咖啡厅、餐厅、电影院与超市，逛完市场可来吹冷气。', category: '购物 · 现代' },
      { id: 'sungai-rajang-cruise', name: '拉让江游船（Sibu River Cruise）', distance: '距码头 200 米', duration: '2 – 3 小时', highlight: '搭乘游船游览拉让江，沿途可见水上房屋与马来村落，另有黄昏与晚餐航次。', category: '游船 · 河景' },
    ],
    faqs: [
      { q: '诗巫中央市场需要门票吗？', a: '不需要。诗巫中央市场对所有人免费开放，无论马来西亚公民或国际旅客都无需门票，只需为购买的商品与餐饮付费。' },
      { q: '诗巫中央市场的实际营业时间是？', a: '市场每天营业，含公共假期，时间为 6:00 AM 至 6:00 PM。部分楼上餐摊与服饰店较晚开（7:00 AM）或提前 5:00 PM 收摊。小贴士：最新鲜的摊位凌晨 5:30 就开始营业！' },
      { q: '从诗巫机场（SBW）怎么到诗巫中央市场？', a: '距离约 25 公里，车程 20 – 25 分钟。最方便是叫 Grab（RM25–RM35）或搭乘机场出口左侧的官方德士（RM35–RM40）。跟司机说「Pasar Sentral, Jalan Channel」，市场就在诗巫快艇码头正对面。' },
      { q: '诗巫中央市场附近哪里可以停车？', a: 'Jalan Channel 路边停车最近（每小时 RM2），但 8:00 AM – 12:00 PM 很快停满。最佳替代：三洋大厦多层停车场（350 米，首小时 RM3）或快艇码头停车场（150 米，每日上限 RM8）。' },
      { q: '诗巫中央市场可以杀价吗？', a: '可以，尤其是蔬菜、水果、森林物产与服饰。若摊位已明确标价（例如干盘面 RM5），通常不需杀价。杀价要有礼貌、带着微笑——这是诗巫巴刹文化的一部分。' },
      { q: '市场接受信用卡或电子钱包吗？', a: '湿巴刹多数小摊位只收现金，请准备充足零钱。楼上的服饰店、部分餐摊与千层糕摊位接受 QR Pay（Touch ‘n Go、Boost、GrabPay）。市场外有 Maybank 提款机。' },
      { q: '诗巫中央市场必吃哪些美食？', a: '三大招牌：（1）干盘面 Mi Kampua——诗巫特色干拌面，配油葱酱与麻油，通常附骨头汤。（2）光饼 Kompia——福州面饼，可原味或包肉馅。（3）三色奶茶 Teh C Peng Special——诗巫独有的三层冰奶茶。当季也别错过达拜果（砂拉越橄榄）。' },
      { q: '诗巫中央市场适合轮椅／行动不便者吗？', a: '适合。正门设有轮椅坡道，楼下通道相当宽敞，并配有公共厕所与电梯。不过 8:00 – 11:00 AM 高峰时段人潮拥挤，轮椅通行会较吃力。' },
      { q: '市场内可以拍照吗？', a: '可以，个人用途的摄影非常受欢迎——市场是绝佳的拍摄题材。若想近距离拍摊贩（尤其穿传统服饰的伊班族妇女），请先征询同意以示尊重，也不要挡住通道。' },
      { q: '市场的整洁与舒适度如何？', a: '诗巫中央市场被公认为马来西亚最干净的室内市场之一。虽是湿巴刹，地板经常清洗并保持干燥，配有吊扇与良好通风。楼上提供公共饮水与座位。' },
      { q: '什么时候造访诗巫中央市场最好？', a: '7:00 AM – 10:00 AM 最佳：各类生鲜（江鱼、清晨肉品、树上熟水果）最齐全、人潮较少、天气也还凉爽。若只想用餐、品尝干盘面，11:00 AM – 2:00 PM 前来即可。' },
      { q: '这里有哪些「稀有水果」？', a: '市场以砂拉越森林物产闻名：达拜果（砂拉越橄榄，蘸酱油加糖食用）、酸茄 Terung Asam、龙眼、野生红毛丹、野生榴梿（特定季节）、菠萝蜜、尖蜜拉（cempedak）与多种野菜。' },
      { q: '诗巫「报纸包活鸡」有什么特别？', a: '这是别处看不到的传统：华人鸡贩会用旧报纸把活鸡活鸭卷成「纸筒」，造型特殊，让鸡只既跑不掉又整齐——是诗巫极具代表性的画面，很值得拍下来。' },
      { q: '有寄放大件行李的地方吗？', a: '市场内没有寄物柜。若有大型行李箱，可寄放饭店（诗巫多数饭店免费寄存），或对街快艇码头柜台（每件约 RM2–RM5）。' },
      { q: '有免费 Wi-Fi 吗？4G 讯号如何？', a: '官方未提供免费 Wi-Fi，但马来西亚主要电信业者（Maxis、Celcom、Digi、U Mobile、Yes）在市场与诗巫市区的 4G LTE 讯号都非常好。' },
      { q: '在市场买得到砂拉越千层糕吗？', a: '买得到。楼上（美食中心附近）与楼下（干货区）都有多家千层糕摊位，小片约 RM8–RM15，整条 RM40–RM80，摊商会妥善包装方便带回国。' },
      { q: '诗巫的榴梿季节是什么时候？这里买得到吗？', a: '砂拉越榴梿季为 11 月至次年 1 月（雨季），野生榴梿略早（10–11 月）。产季时市场前会有专属榴梿摊，每颗 RM10–RM30，比西马便宜很多。' },
      { q: '有祈祷室与公共厕所吗？', a: '有。楼上（美食中心附近）设有男女祈祷室（surau），每层楼都有公共厕所（每次 RM0.20–RM0.50）。清真与非清真餐饮区清楚分开。' },
      { q: '森林物产（达拜果、野菜）可以带回国吗？', a: '蔬菜与水果（含达拜果）在马来西亚国内航班可放托运行李。榴梿请请摊商用防臭塑胶严密包装。未经许可不建议携带生鲜农产品出国。' },
    ],
  },
};
