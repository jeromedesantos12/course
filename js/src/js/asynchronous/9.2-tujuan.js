const request = (url) =>
  new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      delay > 4000
        ? reject(`❌ Error: Connection Timeout`)
        : resolve(`✅ Success: ${url} (${delay}ms)`);
    }, delay);
  });

// PROMISE
// “Kalau berhasil, terus ini... terus ini... kalau gagal, tangani...” (bertingkat)
request("page1")
  .then((res1) => {
    console.log(res1);
    return request("page2");
  })
  .then((res2) => {
    console.log(res2);
    return request("page3");
  })
  .then((res3) => {
    console.log(res3);
    return request("page4");
  })
  .then((res4) => console.log(res4))
  .catch((err) => console.log(err));

// ASYNC AWAIT
// “Tunggu hasil ini dulu. Kalau berhasil, lanjut. Kalau gagal, tangkap errornya.” (natural dan lurus)
const jalankan = async () => {
  try {
    const res1 = await request("page1");
    console.log(res1);

    const res2 = await request("page2");
    console.log(res2);

    const res3 = await request("page3");
    console.log(res3);

    const res4 = await request("page4");
    console.log(res4);
  } catch (err) {
    console.log(err);
  }
};

jalankan();
