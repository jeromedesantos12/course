const user = {
  nama: `Jeremy`,
  email: `jeremy@gmail.com`,
};

const credential = {
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI`,
};

const userBaru = { ...user, id: 123, password: `123456`, ...credential };
// spread operator itu bisa menggabungkan:
// - array dengan data baru
// - array dengan array lainnya

console.log(userBaru);
