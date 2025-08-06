const saya = {
  nama: `jeremy`,
  hoby: `Mancing ikan`,
  kenalan: function () {
    return `Hi, saya ${this.nama} dan saya suka ${this.hoby}`;
  },
};
// this: agar method bisa mengakses properti milik objeknya sendiri.
console.log(saya.kenalan());

// kasus this di arrow function ga jalan, karena:
// nilai this akan mengacu ke this di scope arrow function dibuat (bukan objek saya).
