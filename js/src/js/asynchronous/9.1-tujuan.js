const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;

  setTimeout(() => {
    delay > 4000
      ? failure(`❌ Error: Connection Timeout`)
      : success(`✅ Success: ${url} (${delay}ms)`);
  }, delay);
};

// 🧨 Callback hell: bersarang dalam bersarang
requestCallback(
  "page1",
  (res1) => {
    console.log(res1);
    requestCallback(
      "page2",
      (res2) => {
        console.log(res2);
        requestCallback(
          "page3",
          (res3) => {
            console.log(res3);
            requestCallback(
              "page4",
              (res4) => {
                console.log(res4);
              },
              (err4) => console.log(err4)
            );
          },
          (err3) => console.log(err3)
        );
      },
      (err2) => console.log(err2)
    );
  },
  (err1) => console.log(err1)
);
