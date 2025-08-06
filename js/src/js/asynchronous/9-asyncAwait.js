const requestPromise = (url) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  return new Promise((resolve, reject) =>
    setTimeout(
      () =>
        delay > 4000
          ? reject(`Error: Connection Timeout`)
          : resolve(`Success: ${url} (${delay}ms)`),
      delay
    )
  );
};

const requestHandler = async () => {
  try {
    let result = await requestPromise(`movie.com`);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

requestHandler();

// requestPromise(`movie.com`)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));
