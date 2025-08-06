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
  ); // new Promise di return
};

requestPromise(`movie.com`)
  .then((response) => console.log(response)) // .then(() => console.log(`page 2`))
  .catch((error) => console.log(error));

// promise hell

// requestPromise('movie.com')
// 	.then((response) => {
// 		console.log('success', response);
// 		requestPromise('movie.com')
// 			.then((response) => {
// 				console.log('success', response);
// 				requestPromise('movie.com')
// 					.then((response) => {
// 						console.log('success', response);
// 						requestPromise('movie.com')
// 							.then((response) => {
// 								console.log('success', response);
// 								requestPromise('movie.com')
// 									.then((response) => {
// 										console.log('success', response);
// 									})
// 									.catch((error) => {
// 										console.log('error', error);
// 									});
// 							})
// 							.catch((error) => {
// 								console.log('error', error);
// 							});
// 					})
// 					.catch((error) => {
// 						console.log('error', error);
// 					});
// 			})
// 			.catch((error) => {
// 				console.log('error', error);
// 			});
// 	})
// 	.catch((error) => {
// 		console.log('error', error);
// 	});
