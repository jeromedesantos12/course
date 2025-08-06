// fetch = async await syntax
const loadPeople = async (id) => {
  try {
    const res = await fetch(`https://swapi.info/api/people/${id}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(`Error: `, err);
  }
};

// await = kita akan melakukan request (fetch) -> tunggu proses ini benar-benar selesai, baru jalan ke baris selanjutnya

// karena bisa jadi request kena gap waktu dari koneksi

loadPeople(1);
