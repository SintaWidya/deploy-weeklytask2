const courses = [
  {
    name: 'Introduction React',
    id: 'introduction-react',
    learnedPoints: [
      {
        title: 'Definisi React',
        description: 'React adalah library javascript yang digunakan dalam membuat user interface secara interaktif dan cepat melalui web atau mobile.',
      },
      {
        title: 'Konsep Virtual DOM',
        description: 'Virtual DOM merupakan pusat dari segala web interaktif yang modern. Virtual DOM merupakan suatu konsep dalam pemrograman, yang mana representasi virtual dari user interface tersimpan di dalam memori dan kemudian disinkronkan dengan DOM sebenarnya dari library misalnya ReactDOM. Singkatnya proses ini disebut reconciliation.',
      },
      {
        title: 'Tools pada React',
        description: 'Tools yang diperlukan oleh aplikasi react: - Browser: google chrome. - Text Editor: ada beberapa aplikasi yang dapat digunakan, misalnya visual studio code. - Command Line Interface: bagi pengguna Linux atau MacOs dapat menggunakan terminal yang sudah terpasang pada OS. Bagi user Windows dapat menggunakan CMD atau powershell yang juga sudah langsung terpasang pada OS.',
      },
    ],
    tasks: [
      {
        title: 'Membuat Project React',
        description: 'Task ini bertujuan dalam membuat project react.',
      },
      {
        title: 'Tampilan Home',
        description: 'Ditampilkan screenshot home dengan react.',
      },
      {
        title: 'Tampilan About',
        description: 'Ditampilkan screenshot about dengan react.',
      },
      {
        title: 'Tampilan Contact',
        description: 'Ditampilkan screenshot contact dengan react.',
      },
    ],
    links: [
      {
        url: 'https://github.com/SintaWidya',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/Tampilan Home.png',
      '/images/Tampilan About.jpeg',
      '/images/Tampilan Contact.png',
    ],
  },
  {
    name: 'React Fundamental',
    id: 'react-fundamental',
    learnedPoints: [
      {
        title: 'Konsep JSX',
        description: 'JSX merupakan kepanjangan dari JavaScript XML. JSX merupakan extensi sintaks yang ada pada JavaScript. Atribut JSX dapat diketahui dengan adanya penggunaan tanda seperti tanda kurung kurawal sebagai penyemat ekspresi JavaScript dengan camel case yang berfungsi dalam konvensi penamaan, tanda kutip sebagai penentu string literal. Pada react, JSX digunakan untuk menggambarkan bagaimana tampilan yang ada pada UI dan akan menghasilkan react element. Konsepnya pada react ialah ekspresi JS yang valid pada JSX ditaruh dengan menggunakan kurung kurawal lalu dikompilasi. Kemudian JSX akan berperan menjadi objek dan panggilan fungsi seperti pada JavaScript umumnya.',
      },
      {
        title: 'Lifecycle pada React',
        description: 'Berikut ini merupakan beberapa lifecycle yang terdapat pada react, yaitu: 1. render() : tahapan ini berfungsi untuk menampilkan component yang dibuat ke dalam tampilan web. 2. componentDidMount() : tahapan ini umumnya dipanggil ketika component telah di render pertama kali. 3. componentDidUpdate() : tahapan ini dipanggil ketika terdapat update atau pembaruan pada component. Contohnya ialah perubahan pada state atau prop. 4. componentWillUnmount() : tahapan ini dipanggil ketika component yang telah di render sudah selesai digunakan dan akan dihilangkan. Contohnya ialah clean up action.',
      },
      {
        title: 'Direktori Structure pada React',
        description: 'Pengelompokkan file pada project react yang umum digunakan ialah pengelompokkan berdasarkan fitur atau rute serta pengelompokkan berdasarkan jenis file.',
      },
    ],
    tasks: [
      {
        title: 'Membuat Project React dengan Mengimplementasikan Komposisi Komponen, Implementasi List Rendering serta Styling',
        description: 'Task ini bertujuan dalam membuat sebuah aplikasi daftar tugas (todo list). Daftar barang itu memiliki 3 field yakni id (number), name (string), dan completed (boolean). Apabila completed adalah “True” maka nama todo-nya akan tercoret.',
      },
    ],
    links: [
      {
        url: 'https://github.com/SintaWidya',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/Jawaban.jpeg',
    ],
  },
  {
    name: 'React Routing',
    id: 'react-routing',
    learnedPoints: [
      {
        title: 'Konsep Routes',
        description: 'Router adalah modul pada react yang berfungsi dalam melakukan proses navigasi pada Single Page Application (SPA). Single Page Application (SPA) merupakan aplikasi berbasis web yang hanya memiliki 1 halaman yang bertugas dalam menangani segala aktivitas yang terdapat pada aplikasi website tersebut. Multi Page Application (MPA) atau sering disebut traditional web app merupakan aplikasi website dimana seluruh halaman web perlu dimuat ulang ketika user membuat permintaan baru. Keunggulan SPA ialah waktu loading website lebih cepat, tidak memerlukan query tambahan ke server, front end cepat dan responsif, dapat meningkatkan user experience. Kekurangan SPA ialah tidak bagus dalam SEO, loading lama saat dibuka pertama kali, kurang aman jika dibandingkan dengan website biasa, terdapat masalah pada kompabilitas browser. Keunggulan MPA ialah SEO pada website mudah dioptimisasi, mempermudahkan user untuk mengubah halaman sesuai dengan berbagai aktivitas yang berbeda, website dapat terintegrasi langsung dengan tools Google Analytics. Kekurangan MPA ialah kecepatan mengunduh dalam website lebih lama jika dibandingkan dengan SPA, user diperlukan untuk mengintegrasi front end dan back end, seringnya membutuhkan maintenance dan update, seringnya terjadi masalah dalam performa website. Berikut ini merupakan komponen penting yang akan sering digunakan pada react router dom, yaitu: - BrowserRouter : digunakan sebagai route dengan memakai API history HTML5 sehingga dapat memakai location yang berfungsi menyinkronkan UI dan URL. - Switch : digunakan untuk membungkus component route. - Route : digunakan untuk mengarahkan lalu lintas aplikasi web. - Link : digunakan untuk berpindah antar halaman property to, merujuk pada path pada route yang akan dituju.',
      },
      {
        title: 'Konsep URL Param pada React',
        description: 'Parameter URL merupakan parameter dengan nilai yang ditetapkan secara dinamis di URL halaman.  Hal tersebut akan dapat mengakibatkan data dapat diubah berdasarkan parameter karena memungkinkan rute melakukan render pada komponen yang sama ketika meneruskan komponen tersebut ke bagian dinamis URL. Kegunaannya ialah untuk paginasi, penyortiran atau penyaringan, pencarian situs, terjemahan, menggambarkan, pelacakan. Berikut ini merupakan perbedaan dari link dan redirect, yaitu: - Link : dapat dipakai pada semua kondisi, dapat memberikan history pada browser, bereaksi dengan click seperti a href. - Redirect : biasanya digunakan pada halaman 404, bersifat menimpa history pada browser, bereaksi dengan kondisi.',
      },
      {
        title: 'Konsep Hook Routing',
        description: 'Dalam hal ini terdapat beberapa penggunaan fungsi, yaitu: - useHistory : dapat memberikan akses ke instance riwayat untuk bernavigasi. Contohnya : length, go, goBack, goForward, push. - useLocation : dapat mengembalikan objek lokasi yang menunjukkan URL saat ini. - useParams : dapat mengembalikan nilai parameter URL atau objek pasangan kunci. - useRouteMatch : dapat mencocokan URL saat ini dan umumnya berguna agar diperoleh askes ke data kecocokan tanpa merender dengan sungguh-sungguh.',
      },
    ],
    tasks: [
      {
        title: 'Membuat Project Routing',
        description: 'Pada task ini dilakukan implementasi materi react routing dengan membuat website yang dapat berpindah halaman.',
      },
      {
        title: 'Tampilan Home',
        description: 'Ditampilkan screenshot home.',
      },
      {
        title: 'Tampilan Halaman Navbar',
        description: 'Ditampilkan screenshot halaman navbar.',
      },
      {
        title: 'Tampilan About The App',
        description: 'Ditampilkan screenshot about the app.',
      },
      {
        title: 'Tampilan About The Authors',
        description: 'Ditampilkan screenshot about the authors.',
      },
    ],
    links: [
      {
        url: 'https://github.com/SintaWidya',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/Tampilan Home Routing.png',
      '/images/Tampilan Halaman Navbar.png',
      '/images/Tampilan About The App.png',
      '/images/Tampilan About The Authors.png',
    ],
  },
  {
    name: 'Event Handling',
    id: 'event-handling',
    learnedPoints: [
      {
        title: 'Konsep State',
        description: 'State merupakan data private yang hanya tersedia untuk sebuah component dan tidak dapat diakses component lainnya. State pada react berupa data yang dapat dimodifikasi atau diubah dengan menggunakan setState dimana ketika terjadi modifikasi maka akan mengalami render ulang. State bersifat asynchronous dan digunakan dalam kelas (class). Adapun perbedaan antara state dan props, yaitu: - State : perubahan state bisa asynchronous, state bisa dimodifikasi dengan menggunakan this.setState, hanya terdapat dalam kelas (class), variabel pribadi dari component. - Props : props hanya bisa dibaca dan tidak dapat dimodifikasi, terdapat dalam function dan class,  variabel turunan dari component parent.',
      },
      {
        title: 'Konsep Stateful dan Stateless',
        description: '- Stateful component merupakan component yang mempunyai state dan dibuat dengan class. Kelebihan class component ialah mempunyai lifecycle. Stateful component disebut juga sebagai smart component dan container component. Pada stateful component lebih mengerti tentang aplikasi, dilakukan data fetching, dapat berinteraksi dengan aplikasi, tidak dapat digunakan kembali dan dapat meneruskan data ke anaknya. - Stateless component merupakan component yang tidak mempunyai state dan hanya mempunyai prop dimana component ini pada umumnya dibuat dengan menggunakan function karena code yang digunakan bersifat lebih ringkas. Stateless component disebut juga sebagai dump component dan presentational component. Pada stateless component tidak diketahui tentang aplikasi, tidak dilakukan data fetching, bertujuan untuk visualisasi, dapat digunakan kembali dan hanya dapat berkomunikasi dengan induk miliknya.',
      },
      {
        title: 'Konsep Handling Event',
        description: 'Handling event merupakan metode yang berfungsi dalam menangani event atau peristiwa yang dilakukan oleh pengguna pada suatu komponen contohnya ketika pengguna menekan suatu tombol. Berikut ini merupakan contoh list event, yaitu: - Clipboard Events : promise terpenuhi - Form Events : onChange, onSubmit - Mouse Events : onClick, onDoubleClick, onMouseOver - Generic Events : onError,  onLoad.',
      },
    ],
    tasks: [
      {
        title: 'Membuat Project Event Handling berupa Membuat Todo List',
        description: 'Pada task ini dibuat todo list dimana pengguna dapat menambahkan hal-hal yang akan dikerjakan, lalu melakukan checklist pada list pekerjaan yang sudah dikerjakan serta pengguna dapat menghapus suatu pekerjaan dari todo list. Terdapat juga pesan alert jika pengguna menekan tombol sumbit ketika inputan pekerjaan pengguna masih kosong sehingga pengguna harus mengisi inputan terlebih dahulu sebelum menekan tombol submit.',
      },
      {
        title: 'Tampilan Todo List',
        description: 'Ditampilkan screenshot todo list.',
      },
      {
        title: 'Tampilan Alert pada Todo List',
        description: 'Ditampilkan screenshot alert pada todo list.',
      },
    ],
    links: [
      {
        url: 'https://github.com/SintaWidya',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/Tampilan Jawaban.png',
      '/images/Tampilan Alert Jawaban.png',
    ],
  },
  {
    name: 'React Hook',
    id: 'react-hook',
    learnedPoints: [
      {
        title: 'Konsep React Hooks',
        description: 'Hooks adalah fitur terbaru pada react 16.8 yang memudahkan pengguna untuk dapat menggunakan fitur react dan state tanpa menulis kelas. Hooks yang akan dipelajari pada section ini ialah hooks dasar, yaitu useState dan useEffect. Hal yang melatarbelakangi pembuatan react hooks, yaitu: - Adanya kesulitan dalam penggunaan ulang stateful logic diantara komponen. - Komponen kompleks menjadi sulit untuk dipahami. - Kelas membingungkan manusia serta mesin. Berikut ini merupakan aturan pada hooks, yaitu: - Hanya lakukan pemanggilan hooks di tingkat atas : jangan lakukan pemanggilan hooks dari dalam conditions, loops maupun nested functions. - Hanya lakukan pemanggilan hooks dari fungsi react : jangan lakukan pemanggilan hooks dari fungsi JavaScript. Dengan kata lain, lakukan pemanggilan hooks dari komponen fungsi react dan custom hooks.',
      },
      {
        title: 'Implementasi useState dan useEffect',
        description: '- useState digunakan ketika pengguna ingin menulis function component dan memerlukan state di dalamnya. Dengan adanya useState sebagai sebuah hook maka pengguna dapat memberikan state pada function component. Contohnya ialah ketika terdapat function component dimana tidak terdapat this sehingga penulisan dan pembacaan this.state tidak dapat dilakukan. Namun, permasalahan ini dapat diselesaikan dengan melakukan pemanggilan hook useState di dalam komponen yang dibuat. - useEffect digunakan ketika pengguna melakukan efek samping atau side effects di dalam function component. Contohnya ialah ketika dilakukan pengaturan berlangganan, pengambilan data serta terdapat perubahan manual DOM di dalam komponen react. Pada react class lifecycle methods, penggabungan componentDidMount, componentDidUpdate serta componentWillUnmount dapat disebut sebagai implementasi hook useEffect. Terdapat jenis efek samping atau side effects di komponen react, yaitu effects yang memerlukan pembersihan dan effects yang tidak memerlukan pembersihan.',
      },
      {
        title: 'Konsep Custom Hooks',
        description: 'Custom hook ialah pembuatan hook sendiri yang berfungsi untuk mengekstrak komponen logika ke fungsi yang dapat dipakai kembali. Custom hook dapat digunakan pada kasus seperti form handling.',
      },
    ],
    tasks: [
      {
        title: 'Membuat Project React Hooks',
        description: 'Pada task ini dilakukan pengubahan class component pada tugas sebelumnya menjadi function component serta dilakukan pengubahan lifecycle method dan state management dengan menggunakan react hooks.',
      },
      {
        title: 'Tampilan Jawaban Tugas React Hooks',
        description: 'Ditampilkan screenshot jawaban tugas react hooks.',
      },
    ],
    links: [
      {
        url: 'https://github.com/SintaWidya',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/Tampilan.png',
    ],
  },
  {
    name: 'React Form',
    id: 'react-form',
    learnedPoints: [
      {
        title: 'Konsep Basic Form',
        description: 'Form adalah aspek penting dalam mengembangkan suatu aplikasi website yang digunakan untuk menghandle masukkan dari pengguna seperti saat sign up, login serta memberikan feedback. Terdapat beberapa jenis form, yaitu: - Elemen input : untuk inputan singkat atau tidak terlalu panjang. - Elemen textarea : untuk inputan yang  panjang atau memerlukan deskripsi. - Elemen select : untuk inputan pilihan yang sudah dilist sebelumnya sehingga pengguna hanya perlu mengklik pilihan yang ingin dipilih. - Radio button : tipe elemen input dimana pengguna hanya dapat memilih satu pilihan. Contohnya ialah pilihan jenis kelamin. - Checkbox : tipe elemen input dimana pengguna dapat memilih lebih dari satu pilihan. Contohnya ialah pilihan hobi. - Terdapat juga beberapa tipe elemen input lain seperti button, date, email, file, month, url, submit, image, dan lain-lain.',
      },
      {
        title: 'Konsep Controlled Component dan Uncontrolled Component',
        description: '- Controlled Component merupakan penggabungan cara penyimpanan dan pembaharuan state di HTML dan react dengan memakai state pada react dimana komponen react yang me-render form juga akan berperan dalam mengontrol segala hal yang terjadi dalam form pada masukkan pengguna selanjutnya. Apabila pengguna memerlukan penanganan  banyak elemen pada controlled component, hal ini dapat ditangani dengan menambahkan atribute name pada setiap elemen lalu fungsi handler akan memilih hal yang harus dikerjakan sesuai dengan nilai dari event.target.name. Controlled input akan menerima nilai saat ini sebagai prop dan callback ketika mengubah nilai tersebut dengan catatan nilai input tersebut harus berada di state tertentu. - Uncontrolled Component merupakan sebuah alternatif dari controlled component dimana dalam hal ini data form akan di handle oleh DOM-nya sendiri. Pada uncontrolled component pengguna dapat menggunakan ref untuk memperoleh nilai form dari DOM. Pada implementasi uncontrolled component harus menarik nilai dari field ketika memerlukannya contohnya ketika melakukan submit formulir. Dengan menggunakan uncontrolled component maka akan diperoleh solusi cepat walau tidak rapi dengan kode yang digunakan lebih sedikit. - Penggunaan controlled component dan uncontrolled component mempunyai kekurangan dan kelebihan masing-masing sehingga pengguna dapat menyesuaikan dengan kondisi untuk memilih pendekatan apa yang akan digunakan.',
      },
      {
        title: 'Konsep Basic Validation',
        description: 'Validasi form penting karena untuk memastikan dan mencari input data yang benar serta sesuai format, melindungi akun pengguna dan melindungi sistem atau aplikasi. Berikut ini merupakan tipe validasi data formulir, yaitu: - Client-side validation : validasi ini dilakukan pada sisi klien sehingga bersifat user-friendly karena pengguna akan diberikan informasi jika terdapat kesalahan input data form sebelum data disubmit dan dikirim ke server. Validasi ini dibedakan menjadi dua, yaitu built-in form validation (menggunakan fitur validasi dari HTML5) dan menggunakan JavaScript sehingga validasi form dapat dikostumisasi. - Server-side validation : validasi ini dilakukan pada sisi server sehingga sebelum data disimpan di database, server harus melakukan validasi data terlebih dahulu. Apabila terdapat kesalahan, feedback berupa koreksi atas kesalahan pengguna akan dikirim ke client. Validasi ini bersifat tidak user-friendly karena informasi kesalahan dikirim ketika form sudah disubmit.',
      },
    ],
    tasks: [
      {
        title: 'Membuat Project React Form',
        description: 'Pada task ini dilakukan pembuatan form untuk pendaftaran peserta coding bootcamp dengan ketentuan terdapat field nama (huruf), email, no handphone (angka), latar belakang pendidikan (radio button dengan pilihan IT dan non IT), field kelas koding, field harapan untuk coding bootcamp ini, tombol submit, tombol reset serta terdapat pesan error (alert) ketika terdapat ketidaksesuain pengisian data.',
      },
      {
        title: 'Tampilan Form yang Belum Diisi',
        description: 'Ditampilkan screenshot form yang belum diisi.',
      },
      {
        title: 'Tampilan Form Diisi Data yang Benar',
        description: 'Ditampilkan screenshot form diisi data yang benar.',
      },
      {
        title: 'Tampilan Form Berhasil Submit',
        description: 'Ditampilkan screenshot form berhasil submit.',
      },
      {
        title: 'Tampilan Form Diisi Data yang Salah',
        description: 'Ditampilkan screenshot form diisi data yang salah.',
      },
      {
        title: 'Tampilan Form Gagal Submit',
        description: 'Ditampilkan screenshot form gagal submit.',
      },
    ],
    links: [
      {
        url: 'https://github.com/SintaWidya',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/Tampilan Form Belum Diisi.png',
      '/images/Tampilan Form Diisi Data Yang Benar.png',
      '/images/Tampilan Form Berhasil Submit.png',
      '/images/Tampilan Form Diisi Data Yang Salah.png',
      '/images/Tampilan Form Gagal Submit.png',
    ],
  },
  {
    name: 'Global State Management and Data fetching',
    id: 'global-state-and-data-fetching',
    learnedPoints: [
      {
        title: 'Konsep Global State Management ',
        description: 'State management library merupakan library yang berfungsi untuk mengelola state pada suatu aplikasi JavaScript. Setiap library mempunyai pola tersendiri dalam mengelola state. Contoh state management library yang dipakai pada react ialah redux. Redux merupakan library untuk management state global yang menggunakan struktur "one-way data flow". Redux digunakan ketika terdapat penggunaan state yang banyak dan ditaruh pada banyak tempat, sering terjadi perubahan state pada app, logic untuk mengubah state kompleks, adanya codebase yang berukuran sedang sampai besar serta sedang dikerjakan bersama oleh banyak orang, ketika perlu untuk mengetahui bagaimana setiap pembaharuan state seiring dengan berjalanannya waktu. Adapun redux libraries dan tools, yaitu: - React-Redux :  memungkinkan react components berinteraksi dengan redux store dengan membaca bagian state dan mengirimkan tindakan untuk memperbaharui store. - Redux Toolkit : sangat direkomendasikan untuk menulis logika redux karena berisi paket dan fungsi yang dapat menyederhanakan sebagian besar tugas redux, mencegah kesalahan umum dan membuatnya lebih mudah untuk menulis aplikasi redux. - Redux DevTools Extension : menunjukkan riwayat perubahan state di redux store dari waktu ke waktu. Hal ini memungkinkan untuk men-debug aplikasi  secara efektif, termasuk menggunakan teknik canggih seperti "time-travel debugging". Adapun komponen penting pada redux, yaitu: - Actions : berfungsi memberikan informasi dari aplikasi ke store. Hal ini diperlukan untuk mengubah status aplikasi setelah interaksi pengguna, peristiwa internal atau panggilan API. - Reducer : pure JavaScript functions yang berfungsi untuk mengambil state aplikasi saat ini dan object action kemudian mengembalikan state aplikasi terbaru. Reducers menghitung nilai state baru berdasarkan state sebelumnya dan action. - Store : objek sentral yang berfungsi untuk menyimpan state pada aplikasi. Adapun cara memakai dan mengubah state pada redux store, yaitu: - Hooks. - Connect.',
      },
      {
        title: 'Konsep Redux Thunk dan Persisted State',
        description: '- Redux thunk merupakan thunk middleware yang memungkinkan untuk membuat action creator yang mengembalikan function bukannya action. Redux thunk diperlukan untuk mengelola side effect logic. Contohnya logic synchronous kompleks yang memerlukan akses store serta logic async seperti request data. - Persisted State pada redux menerima kunci penyimpanan dan penyedia penyimpanan state ke storage. Cara instalasinya ialah npm install redux-persist.',
      },
      {
        title: 'Konsep Data Fetching',
        description: 'Data Fetching merupakan salah satu kegiatan yang dilakukan pada setiap aplikasi seperti meminta data, mengedit data dan menyimpan data. Tujuannya ialah untuk membuat UX sesederhana dan sebaik mungkin untuk pengguna. Adapun cara untuk fetching data pada react, yaitu: - Fetch API. - Axios. - React Query Library.',
      },
    ],
    tasks: [
      {
        title: 'Membuat Project berupa Menambahkan Redux dan Redux-Persist pada Penugasan Sebelumnya',
        description: 'Pada task ini ditambahkan redux dan redux-persist pada penugasan sebelumnya.',
      },
      {
        title: 'Tampilan Source Code Implementasi Redux Persist',
        description: 'Ditampilkan screenshot source code implementasi redux persist.',
      },
      {
        title: 'Tampilan Redux dengan Store',
        description: 'Ditampilkan screenshot redux dengan store.',
      },
      {
        title: 'Tampilan About The App',
        description: 'Ditampilkan screenshot about the app.',
      },
      {
        title: 'Tampilan About The Authors',
        description: 'Ditampilkan screenshot about the authors.',
      },
      {
        title: 'Tampilan Form',
        description: 'Ditampilkan screenshot form.',
      },
    ],
    links: [
      {
        url: 'https://github.com/SintaWidya',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/Tampilan Source Code Implementasi Redux Persist.PNG',
      '/images/Tampilan Redux Dengan Store.jpeg',
      '/images/Tampilan About The App Global.jpeg',
      '/images/Tampilan About The Authors Global.jpeg',
      '/images/Tampilan Form.jpeg',
    ],
  },
  {
    name: 'Testing',
    id: 'testing',
    learnedPoints: [
      {
        title: 'Konsep Basic Testing',
        description: 'Testing merupakan proses verifikasi apakah test assertions (ekspresi boolean yang mengembalikan nilai true kecuali terdapat bug pada kode) serta kode benar selama masa aplikasi. Contohnya terdapat halaman sign up dan dilakukan testing untuk mengetahui apakah halaman tersebut berjalan dengan baik. Adapun manfaat testing, yaitu: - Merasa lebih percaya diri apabila terdapat kondisi harus mengubah suatu bagian aplikasi dan terdapat bagian lain yang menjadi broken, kita dapat segera mengetahuinya. - Mengurangi dan mencegah beberapa hal yang dapat menyebabkan adanya bug di aplikasi meskipun tidak secara keseluruhan. Adapun kategori testing pada react secara umum, yaitu: - Rendering component trees : cara mengetes di dalam environment tes yang sudah disederhanakan dan ditegaskan pada outputnya. - Menjalankan aplikasi lengkap : cara mengetes di dalam environment browser asli atau disebut dengan tes (end-to-end). Adapun pertimbangan dalam memilih tools, yaitu: - Kecepetan iterasi vs environment yang realistis. - Seberapa banyak mock. Adapun rekomendasi tools untuk testing, yaitu: - Menggunakan Jest : dengan jest akan diperoleh kecepatan iterasi yang bagus dengan dikombinasikan dengan fitur-fitur yang powerful seperti mocking modules dan timers. - Menggunakan React Testing Library : seperangkat helpers yang memungkinkan untuk mengetes komponen react tanpa bergantung pada implementasinya sehingga refactoring menjadi mudah dan diperoleh best practices untuk aksesibilitas.',
      },
      {
        title: 'Konsep Basic Testing with RTL',
        description: '- Rendering Komponen. Render RTL berfungsi untuk merender file JSX yang diperlukan. Setelahnya, user baru diberikan akses menuju komponen react yang akan diuji. Fungsi debug RTL dapat digunakan untuk memastikan apakah file JSX sudah dirender. Debug RTL dapat digunakan untuk selalu memastikan jika user tidak yakin seperti apa hasil dan fungsi render RTL. React Testing Library digunakan untuk berinteraksi dengan komponen. Oleh karena itulah user melihat struktur HTML sebagai output dari fungsi render. - Memilih Elemen. React Testing Library memberikan berbagai fungsi untuk elemen. Elemen ini berfungsi untuk assertions serta interaksi pengguna. Selain itu, dapat dipilih elemen dengan fungsi object screen RTL. Contohnya getByText yang berfungsi memilih teks dari elemen yang telah dipilih. ',
      },
      {
        title: 'Konsep Testing Custom Hook',
        description: 'Pada testing custom hook, library yang digunakan ialah React Hooks Testing Library dimana akan terdapat alat untuk mengetes hooks tanpa merender satu komponen. ',
      },
    ],
    tasks: [
      {
        title: 'Membuat Project berupa File Testing',
        description: 'Pada task ini dibuat project testing.',
      },
      {
        title: 'Tampilan Jawaban Tugas Testing',
        description: 'Ditampilkan screenshot jawaban tugas testing.',
      },
    ],
    links: [
      {
        url: 'https://github.com/SintaWidya',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/Jawaban Testing.png',
    ],
  },
];

export default courses;
