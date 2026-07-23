Elemen semantic yang dipake
 
**`<header>`**
Bagian paling atas web, isinya logo sama menu navigasi. Posisinya fixed di atas jadi selalu keliatan pas di-scroll.
 
**`<nav>`**
Ada di dalem header, isinya link-link kayak Beranda, Destinasi, Tentang. Ini yang bikin browser/screen reader tau kalau itu memang menu navigasi, bukan sekedar list biasa.
 
**`<main>`**
Bungkus semua konten inti halaman (section destinasi sama section tentang). Cuma boleh ada satu `<main>` per halaman.
 
**`<section>`**
Dipake buat misahin blok-blok konten yang beda topik, contohnya section "Destinasi Populer" sama section "Tentang Jelajah". Masing-masing punya heading sendiri.
 
**`<article>`**
Dipake buat tiap kartu destinasi (Lembah Hijau, Danau Kaki Gunung, Pantai Pasir Putih). Alasannya karena tiap kartu itu konten yang berdiri sendiri, bisa dipisah dari halaman dan tetep masuk akal dibaca sendirian.
