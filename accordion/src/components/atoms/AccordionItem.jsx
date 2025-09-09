// Komponen anak: AccordionItem (Tirai-tirai Kecil)
export default function AccordionItem({
  getOpen,
  setOpen,
  number,
  question,
  answer,
}) {
  // Mengecek apakah tirai ini sedang terbuka.
  // Caranya: membandingkan nomor tirai ini dengan nomor yang tercatat di "pengingat" getOpen.
  const isOpen = number === getOpen; // true/false

  // Fungsi yang dijalankan saat tirai ini diklik.
  function handleToogle() {
    // Memanggil "tombol" setOpen untuk mengubah "pengingat" di tirai besar.
    // Jika tirai ini sudah terbuka, setOpen(null) -> tutup semua.
    // Jika tirai ini belum terbuka, setOpen(number) -> buka tirai ini.
    setOpen(isOpen ? null : number); // 1.. 2.. 3..
  } // true: isOpen = 1 : 1 jadi true -> null

  return (
    // Menambahkan class "open" jika tirai ini sedang terbuka.
    // Menjalankan handleToogle saat tirai ini diklik.
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToogle}>
      <p className="number">{number < 10 ? `0${number}` : number}</p>
      <p className="title">{question}</p>
      {/* Mengubah ikon berdasarkan status terbuka/tertutup. */}
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {/* Hanya menampilkan konten jawaban jika tirai ini terbuka. */}
      {isOpen && <div className="content-box">{answer}</div>}
    </div>
  );
}
