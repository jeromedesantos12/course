export const posts = () => fetch("https://jsonplaceholder.typicode.com/posts");

// tidak perlu useParams karena sudah ditangani react router
export const postById = async ({ params }) =>
  await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

// kenapa pas buka halaman ada jeda halaman kosong?
// - karena react render komponen dulu baru jalankan use effect
// - kalo pake loader, diambil data dulu baru render komponennya (konsep pending UI)
