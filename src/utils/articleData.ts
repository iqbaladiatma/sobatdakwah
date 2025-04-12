
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean; // This property is optional
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Memahami Makna Sabar dalam Islam",
    excerpt: "Sabar merupakan salah satu sifat mulia yang diajarkan dalam Islam. Artikel ini membahas makna sabar yang sebenarnya.",
    content: `
      <p class="mb-4">Sabar dalam bahasa Arab berasal dari kata "shabara" yang artinya menahan. Secara istilah, sabar berarti menahan diri dari sifat berkeluh kesah, menahan lidah dari keluh kesah, dan menahan anggota tubuh dari perbuatan yang tidak pantas.</p>
      
      <p class="mb-4">Allah SWT berfirman dalam Al-Qur'an:</p>
      
      <blockquote class="border-l-4 border-islamic-green pl-4 italic my-6">
        "Hai orang-orang yang beriman, bersabarlah kamu dan kuatkanlah kesabaranmu dan tetaplah bersiap siaga dan bertakwalah kepada Allah supaya kamu beruntung." (QS. Ali Imran: 200)
      </blockquote>
      
      <p class="mb-4">Sabar memiliki beberapa tingkatan dan bentuk dalam Islam:</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">1. Sabar dalam Ketaatan</h3>
      <p class="mb-4">Ini adalah kesabaran untuk tetap istiqamah dalam menjalankan perintah Allah SWT. Misalnya sabar dalam menjalankan shalat lima waktu, sabar dalam berpuasa di bulan Ramadhan, dan sebagainya.</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">2. Sabar dalam Menjauhi Maksiat</h3>
      <p class="mb-4">Ini adalah kesabaran untuk menahan diri dari melakukan hal-hal yang dilarang oleh Allah SWT. Misalnya sabar untuk tidak berbohong, sabar untuk tidak membicarakan kejelekan orang lain, dan sebagainya.</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">3. Sabar dalam Menghadapi Musibah</h3>
      <p class="mb-4">Ini adalah kesabaran dalam menghadapi ujian atau cobaan dari Allah SWT. Misalnya sabar ketika kehilangan harta, sabar ketika ditimpa penyakit, sabar ketika kehilangan orang yang dicintai, dan sebagainya.</p>
      
      <p class="mb-4">Rasulullah SAW bersabda:</p>
      
      <blockquote class="border-l-4 border-islamic-green pl-4 italic my-6">
        "Sungguh menakjubkan urusan seorang mukmin. Sesungguhnya semua urusannya adalah baik baginya. Dan itu tidak dimiliki kecuali oleh seorang mukmin. Jika ia mendapat kesenangan, ia bersyukur, dan itu baik baginya. Dan jika ia tertimpa kesusahan, ia bersabar, dan itu baik baginya." (HR. Muslim)
      </blockquote>
      
      <p class="mb-4">Sabar bukanlah tanda kelemahan atau kepasrahan terhadap keadaan. Sebaliknya, sabar adalah kekuatan untuk tetap teguh dalam keimanan dan ketakwaan kepada Allah SWT meskipun dalam situasi yang sulit.</p>
      
      <p>Semoga kita semua diberikan kesabaran dalam menjalani kehidupan ini dan selalu mendapat ridha Allah SWT. Aamiin.</p>
    `,
    author: "Ahmad Fadhil",
    date: "2023-10-15",
    category: "Akhlak",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f",
    featured: true
  },
  {
    id: "2",
    title: "Keutamaan Membaca Al-Qur'an",
    excerpt: "Al-Qur'an adalah pedoman hidup umat Islam. Artikel ini membahas berbagai keutamaan membaca Al-Qur'an.",
    content: `
      <p class="mb-4">Al-Qur'an adalah firman Allah SWT yang diturunkan kepada Nabi Muhammad SAW melalui perantara Malaikat Jibril. Al-Qur'an merupakan pedoman hidup bagi umat Islam dan membacanya memiliki banyak keutamaan.</p>
      
      <p class="mb-4">Allah SWT berfirman dalam Al-Qur'an:</p>
      
      <blockquote class="border-l-4 border-islamic-green pl-4 italic my-6">
        "Sesungguhnya orang-orang yang selalu membaca kitab Allah dan mendirikan shalat dan menafkahkan sebagian dari rezeki yang Kami anugerahkan kepada mereka dengan diam-diam dan terang-terangan, mereka itu mengharapkan perniagaan yang tidak akan merugi." (QS. Fatir: 29)
      </blockquote>
      
      <p class="mb-4">Berikut adalah beberapa keutamaan membaca Al-Qur'an:</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">1. Mendapat Pahala yang Berlipat Ganda</h3>
      <p class="mb-4">Rasulullah SAW bersabda: "Barangsiapa membaca satu huruf dari Kitabullah (Al-Qur'an), maka baginya satu kebaikan, dan satu kebaikan dilipat gandakan menjadi sepuluh kali lipat. Aku tidak mengatakan alif lam mim itu satu huruf, tetapi alif satu huruf, lam satu huruf, dan mim satu huruf." (HR. Tirmidzi)</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">2. Membaca Al-Qur'an Akan Memberikan Syafaat di Hari Kiamat</h3>
      <p class="mb-4">Rasulullah SAW bersabda: "Bacalah Al-Qur'an, karena ia akan datang pada hari kiamat sebagai pemberi syafaat bagi para pembacanya." (HR. Muslim)</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">3. Menjadi Manusia Terbaik</h3>
      <p class="mb-4">Rasulullah SAW bersabda: "Sebaik-baik kalian adalah orang yang mempelajari Al-Qur'an dan mengajarkannya." (HR. Bukhari)</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">4. Rumah yang Di Dalamnya Dibacakan Al-Qur'an Diliputi Rahmat</h3>
      <p class="mb-4">Rumah yang di dalamnya dibacakan Al-Qur'an akan dipenuhi kebaikan dan rahmat Allah SWT. Sebaliknya, rumah yang di dalamnya tidak dibacakan Al-Qur'an akan terasa sempit dan kurang kebaikannya.</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">5. Hati Menjadi Tenang</h3>
      <p class="mb-4">Allah SWT berfirman dalam Al-Qur'an: "(yaitu) orang-orang yang beriman dan hati mereka menjadi tenteram dengan mengingat Allah. Ingatlah, hanya dengan mengingati Allah hati menjadi tenteram." (QS. Ar-Ra'd: 28)</p>
      
      <p class="mb-4">Membaca Al-Qur'an adalah cara untuk mengingat Allah SWT dan dengan demikian hati akan menjadi tenang.</p>
      
      <p>Semoga kita semua dimudahkan untuk senantiasa membaca, memahami, dan mengamalkan Al-Qur'an dalam kehidupan sehari-hari. Aamiin.</p>
    `,
    author: "Fatimah Azzahra",
    date: "2023-09-28",
    category: "Al-Qur'an",
    image: "https://images.unsplash.com/photo-1609599006353-e629a7d00e9f",
    featured: true
  },
  {
    id: "3",
    title: "Adab dalam Menuntut Ilmu",
    excerpt: "Menuntut ilmu dalam Islam tidak hanya tentang apa yang dipelajari, tetapi juga tentang adab dalam menuntut ilmu.",
    content: `
      <p class="mb-4">Menuntut ilmu adalah kewajiban bagi setiap muslim, sebagaimana sabda Rasulullah SAW: "Menuntut ilmu itu wajib bagi setiap muslim." (HR. Ibnu Majah)</p>
      
      <p class="mb-4">Namun, dalam menuntut ilmu, seorang muslim juga harus memperhatikan adab atau etika yang baik. Berikut adalah beberapa adab dalam menuntut ilmu dalam Islam:</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">1. Niat yang Ikhlas</h3>
      <p class="mb-4">Seorang penuntut ilmu harus memiliki niat yang ikhlas dalam menuntut ilmu, yaitu semata-mata karena Allah SWT. Bukan untuk mendapatkan pujian, jabatan, atau kepentingan duniawi lainnya.</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">2. Hormat kepada Guru</h3>
      <p class="mb-4">Menghormati guru adalah salah satu adab penting dalam menuntut ilmu. Imam Syafi'i pernah berkata: "Aku membalikkan lembaran kertas dengan sangat perlahan di hadapan guruku, Imam Malik, karena takut suara kertas tersebut akan mengganggunya."</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">3. Sabar dan Tekun</h3>
      <p class="mb-4">Menuntut ilmu memerlukan kesabaran dan ketekunan. Imam Syafi'i pernah berkata: "Barangsiapa yang tidak sabar menanggung pahitnya belajar, maka ia akan merasakan hinanya kebodohan sepanjang hidupnya."</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">4. Rendah Hati</h3>
      <p class="mb-4">Seorang penuntut ilmu harus memiliki sifat rendah hati. Semakin banyak ilmu yang dimiliki, seharusnya semakin rendah hati ia. Sebagaimana kata pepatah: "Ilmu itu seperti padi, semakin berisi semakin merunduk."</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">5. Mengamalkan Ilmu yang Dipelajari</h3>
      <p class="mb-4">Ilmu tidak hanya untuk diketahui, tetapi juga untuk diamalkan. Rasulullah SAW berdoa: "Ya Allah, aku berlindung kepada-Mu dari ilmu yang tidak bermanfaat." (HR. Muslim)</p>
      
      <p class="mb-4">Imam Malik juga pernah berkata: "Ilmu itu bukan dengan banyaknya riwayat, tetapi ilmu itu adalah cahaya yang Allah letakkan di dalam hati."</p>
      
      <p>Semoga kita semua dapat menuntut ilmu dengan adab yang baik dan mendapatkan manfaat dari ilmu yang kita pelajari, baik di dunia maupun di akhirat. Aamiin.</p>
    `,
    author: "Umar Hadi",
    date: "2023-11-05",
    category: "Pendidikan",
    image: "https://images.unsplash.com/photo-1577996693361-3a3d96306d4d",
    featured: false
  },
  {
    id: "4",
    title: "Etika Bertetangga dalam Islam",
    excerpt: "Islam sangat memperhatikan hubungan antar tetangga. Artikel ini membahas etika bertetangga dalam perspektif Islam.",
    content: `
      <p class="mb-4">Islam sangat memperhatikan hubungan antar tetangga. Bahkan, Rasulullah SAW bersabda: "Jibril senantiasa memberikan wasiat kepadaku tentang tetangga, sampai-sampai aku mengira bahwa tetangga akan mendapatkan hak waris." (HR. Bukhari dan Muslim)</p>
      
      <p class="mb-4">Berikut adalah beberapa etika bertetangga dalam Islam:</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">1. Berbuat Baik kepada Tetangga</h3>
      <p class="mb-4">Allah SWT berfirman dalam Al-Qur'an: "Sembahlah Allah dan janganlah kamu mempersekutukan-Nya dengan sesuatu apapun. Dan berbuat baiklah kepada kedua orang tua, karib-kerabat, anak-anak yatim, orang-orang miskin, tetangga yang dekat dan tetangga yang jauh." (QS. An-Nisa: 36)</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">2. Tidak Menyakiti Tetangga</h3>
      <p class="mb-4">Rasulullah SAW bersabda: "Demi Allah, tidak beriman! Demi Allah, tidak beriman! Demi Allah, tidak beriman!" Beliau ditanya, "Siapa wahai Rasulullah?" Beliau menjawab, "Orang yang tetangganya tidak aman dari gangguannya." (HR. Bukhari)</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">3. Menghormati Privasi Tetangga</h3>
      <p class="mb-4">Islam mengajarkan untuk menghormati privasi tetangga dan tidak mencampuri urusan mereka kecuali jika diminta.</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">4. Saling Membantu dalam Kebaikan</h3>
      <p class="mb-4">Rasulullah SAW bersabda: "Barangsiapa yang beriman kepada Allah dan hari akhir, maka hendaklah ia memuliakan tetangganya." (HR. Bukhari dan Muslim)</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">5. Berbagi dengan Tetangga</h3>
      <p class="mb-4">Rasulullah SAW bersabda: "Wahai kaum wanita muslimah, janganlah seorang tetangga meremehkan pemberiannya kepada tetangganya walaupun hanya berupa kaki kambing." (HR. Bukhari dan Muslim)</p>
      
      <p class="mb-4">Dalam hadits tersebut, Rasulullah SAW mengajarkan untuk saling berbagi dengan tetangga, meskipun yang diberikan hanya sedikit.</p>
      
      <p>Semoga kita semua dapat menerapkan etika bertetangga yang baik sesuai dengan ajaran Islam. Dengan demikian, kita dapat menciptakan lingkungan yang harmonis dan penuh dengan kebaikan. Aamiin.</p>
    `,
    author: "Hasan Basri",
    date: "2023-10-22",
    category: "Sosial",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f",
    featured: false
  },
  {
    id: "5",
    title: "Keutamaan Bulan Ramadhan",
    excerpt: "Ramadhan adalah bulan yang penuh berkah. Artikel ini membahas berbagai keutamaan bulan Ramadhan.",
    content: `
      <p class="mb-4">Bulan Ramadhan adalah bulan yang istimewa bagi umat Islam. Bulan ini disebut sebagai "Sayyidul Ayyam" atau pemimpin dari segala bulan. Allah SWT telah memberikan banyak keutamaan pada bulan ini.</p>
      
      <p class="mb-4">Allah SWT berfirman dalam Al-Qur'an:</p>
      
      <blockquote class="border-l-4 border-islamic-green pl-4 italic my-6">
        "Bulan Ramadhan adalah (bulan) yang di dalamnya diturunkan Al-Qur'an, sebagai petunjuk bagi manusia dan penjelasan-penjelasan mengenai petunjuk itu dan pembeda (antara yang hak dan yang batil)." (QS. Al-Baqarah: 185)
      </blockquote>
      
      <p class="mb-4">Berikut adalah beberapa keutamaan bulan Ramadhan:</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">1. Turunnya Al-Qur'an</h3>
      <p class="mb-4">Al-Qur'an pertama kali diturunkan pada bulan Ramadhan, tepatnya pada malam lailatul qadar. Ini adalah salah satu keutamaan terbesar bulan Ramadhan.</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">2. Pembuka Pintu Surga</h3>
      <p class="mb-4">Rasulullah SAW bersabda: "Ketika bulan Ramadhan tiba, pintu-pintu surga dibuka, pintu-pintu neraka ditutup, dan setan-setan dibelenggu." (HR. Bukhari dan Muslim)</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">3. Dilipatgandakannya Pahala</h3>
      <p class="mb-4">Di bulan Ramadhan, pahala ibadah dilipatgandakan. Rasulullah SAW bersabda: "Barangsiapa yang menunaikan shalat karena iman dan mengharap pahala dari Allah, maka dosanya yang telah lalu akan diampuni." (HR. Bukhari dan Muslim)</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">4. Adanya Malam Lailatul Qadar</h3>
      <p class="mb-4">Di bulan Ramadhan terdapat malam lailatul qadar, yang nilainya lebih baik dari seribu bulan. Allah SWT berfirman: "Malam kemuliaan itu lebih baik dari seribu bulan." (QS. Al-Qadr: 3)</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">5. Pengampunan Dosa</h3>
      <p class="mb-4">Rasulullah SAW bersabda: "Barangsiapa yang berpuasa di bulan Ramadhan karena iman dan mengharap pahala dari Allah, maka dosanya yang telah lalu akan diampuni." (HR. Bukhari dan Muslim)</p>
      
      <p class="mb-4">Selain itu, di bulan Ramadhan juga dianjurkan untuk memperbanyak sedekah, membaca Al-Qur'an, dan melakukan kebaikan lainnya.</p>
      
      <p>Semoga di bulan Ramadhan yang akan datang, kita semua dapat meraih semua keutamaan tersebut dan menjadi lebih baik dalam ibadah dan ketakwaan kita kepada Allah SWT. Aamiin.</p>
    `,
    author: "Zainab Aliyah",
    date: "2023-10-10",
    category: "Ibadah",
    image: "https://images.unsplash.com/photo-1562693315-673a56307dc3",
    featured: true
  },
  {
    id: "6",
    title: "Pentingnya Shalat Berjamaah",
    excerpt: "Shalat berjamaah memiliki keutamaan yang besar dalam Islam. Artikel ini membahas pentingnya shalat berjamaah.",
    content: `
      <p class="mb-4">Shalat berjamaah adalah shalat yang dilakukan secara bersama-sama dengan satu orang menjadi imam dan yang lainnya menjadi makmum. Shalat berjamaah memiliki keutamaan yang besar dalam Islam.</p>
      
      <p class="mb-4">Rasulullah SAW bersabda:</p>
      
      <blockquote class="border-l-4 border-islamic-green pl-4 italic my-6">
        "Shalat berjamaah lebih utama dua puluh tujuh derajat daripada shalat sendirian." (HR. Bukhari dan Muslim)
      </blockquote>
      
      <p class="mb-4">Berikut adalah beberapa pentingnya shalat berjamaah:</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">1. Mendapat Pahala Berlipat Ganda</h3>
      <p class="mb-4">Sebagaimana disebutkan dalam hadits di atas, shalat berjamaah memiliki keutamaan dua puluh tujuh derajat lebih utama daripada shalat sendirian.</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">2. Mempererat Persatuan dan Kesatuan</h3>
      <p class="mb-4">Shalat berjamaah adalah salah satu cara untuk mempererat persatuan dan kesatuan umat Islam. Dalam shalat berjamaah, tidak ada perbedaan antara kaya dan miskin, antara pejabat dan rakyat biasa. Semua berdiri dalam satu shaf di hadapan Allah SWT.</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">3. Disiplin dan Tepat Waktu</h3>
      <p class="mb-4">Shalat berjamaah mengajarkan kita untuk disiplin dan tepat waktu. Ketika adzan berkumandang, kita diajarkan untuk segera menuju ke masjid dan tidak menunda-nunda shalat.</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">4. Saling Mengenal dan Membantu</h3>
      <p class="mb-4">Dengan shalat berjamaah, kita dapat saling mengenal dengan sesama muslim di lingkungan kita. Dengan demikian, kita dapat saling membantu dalam kebaikan.</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">5. Mendapat Perlindungan dari Allah SWT</h3>
      <p class="mb-4">Rasulullah SAW bersabda: "Ada tujuh golongan yang akan dinaungi oleh Allah dalam naungan-Nya pada hari di mana tidak ada naungan kecuali naungan-Nya." Salah satu dari tujuh golongan tersebut adalah "seorang yang hatinya selalu tertambat dengan masjid." (HR. Bukhari dan Muslim)</p>
      
      <p class="mb-4">Shalat berjamaah di masjid adalah salah satu cara untuk menjadikan hati kita tertambat dengan masjid.</p>
      
      <p>Semoga kita semua dapat senantiasa melaksanakan shalat berjamaah dan mendapatkan semua keutamaannya. Aamiin.</p>
    `,
    author: "Muhammad Ridwan",
    date: "2023-11-12",
    category: "Ibadah",
    image: "https://images.unsplash.com/photo-1519817914152-22d216bb9170",
    featured: false
  },
  {
    id: "7",
    title: "Adab Makan dan Minum dalam Islam",
    excerpt: "Islam mengajarkan adab dalam segala hal, termasuk dalam makan dan minum. Artikel ini membahas adab makan dan minum dalam Islam.",
    content: `
      <p class="mb-4">Islam adalah agama yang sempurna dan mengatur segala aspek kehidupan manusia, termasuk adab dalam makan dan minum. Berikut adalah beberapa adab makan dan minum dalam Islam:</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">1. Membaca Bismillah Sebelum Makan dan Minum</h3>
      <p class="mb-4">Rasulullah SAW bersabda: "Jika salah seorang di antara kalian hendak makan, maka ucapkanlah 'Bismillah'. Jika lupa mengucapkannya di awal, maka ucapkanlah 'Bismillahi fi awwalihi wa akhirihi' (Dengan menyebut nama Allah pada awal dan akhirnya)." (HR. Abu Dawud dan Tirmidzi)</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">2. Makan dengan Tangan Kanan</h3>
      <p class="mb-4">Rasulullah SAW bersabda: "Jika salah seorang di antara kalian makan, maka makanlah dengan tangan kanan. Dan jika minum, minumlah dengan tangan kanan. Sesungguhnya setan makan dan minum dengan tangan kiri." (HR. Muslim)</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">3. Makan Makanan yang Terdekat</h3>
      <p class="mb-4">Rasulullah SAW bersabda kepada Umar bin Abu Salamah: "Wahai anak, bacalah bismillah, makanlah dengan tangan kananmu, dan makanlah dari makanan yang terdekat denganmu." (HR. Bukhari dan Muslim)</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">4. Tidak Meniup Makanan atau Minuman yang Panas</h3>
      <p class="mb-4">Rasulullah SAW melarang untuk meniup ke dalam makanan atau minuman. Beliau bersabda: "Jika salah seorang dari kalian makan, janganlah meniup makanannya." (HR. Abu Dawud)</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">5. Tidak Mencela Makanan</h3>
      <p class="mb-4">Rasulullah SAW tidak pernah mencela makanan. Jika beliau menyukai makanan tersebut, beliau akan memakannya. Jika tidak, beliau akan meninggalkannya tanpa mencelanya. (HR. Bukhari dan Muslim)</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">6. Duduk Saat Minum</h3>
      <p class="mb-4">Rasulullah SAW melarang minum sambil berdiri. Beliau bersabda: "Janganlah sekali-kali salah seorang dari kalian minum sambil berdiri. Jika lupa, maka hendaklah ia memuntahkannya." (HR. Muslim)</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">7. Membaca Doa Setelah Makan</h3>
      <p class="mb-4">Rasulullah SAW mengajarkan doa setelah makan: "Alhamdulillahilladzi ath'amana wa saqana wa ja'alana minal muslimin" (Segala puji bagi Allah yang telah memberi kami makan dan minum, dan menjadikan kami termasuk orang-orang muslim). (HR. Abu Dawud, Tirmidzi, dan Ibnu Majah)</p>
      
      <p>Semoga dengan menerapkan adab makan dan minum sesuai dengan ajaran Islam, kita dapat mendapatkan keberkahan dalam makanan dan minuman kita. Aamiin.</p>
    `,
    author: "Aisyah Rahmah",
    date: "2023-09-20",
    category: "Kesehatan",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    featured: false
  }
];

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.featured);
};

export const getRecentArticles = (count: number = 3): Article[] => {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = articles.map(article => article.category);
  return [...new Set(categories)];
};

// Search articles
export const searchArticles = (query: string): Article[] => {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(
    article => 
      article.title.toLowerCase().includes(lowercaseQuery) || 
      article.content.toLowerCase().includes(lowercaseQuery) ||
      article.excerpt.toLowerCase().includes(lowercaseQuery) ||
      article.author.toLowerCase().includes(lowercaseQuery) ||
      article.category.toLowerCase().includes(lowercaseQuery)
  );
};
// tambah
