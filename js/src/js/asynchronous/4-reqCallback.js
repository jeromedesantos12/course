// callback version
const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(
    () =>
      delay > 4000
        ? failure(`Error: Connection Timeout`) // ⬅️ Manggil fungsi failure, kasih parameter
        : success(`Success: ${url} ${delay}ms`), // ⬅️ Manggil fungsi success, kasih parameter
    delay
  );
}; // kita tidak "return" hasilnya
// tapi kita "panggil balik" fungsi yang dikirim

requestCallback(
  `movie.com`,
  (respond) => console.log(respond), // ✅ ini fungsi "success"
  (error) => console.log(error) // ❌ ini fungsi "failure"
);

// callback hell

// requestCallback(
// 	'movie.com',
// 	function (response) {
// 		console.log('success', response);
// 		requestCallback(
// 			'movie.com',
// 			function (response) {
// 				console.log('success', response);
// 				requestCallback(
// 					'movie.com',
// 					function (response) {
// 						console.log('success', response);
// 						requestCallback(
// 							'movie.com',
// 							function (response) {
// 								console.log('success', response);
// 								requestCallback(
// 									'movie.com',
// 									function (response) {
// 										console.log('success', response);
// 									},
// 									function (error) {
// 										console.log('error', error);
// 									}
// 								);
// 							},
// 							function (error) {
// 								console.log('error', error);
// 							}
// 						);
// 					},
// 					function (error) {
// 						console.log('error', error);
// 					}
// 				);
// 			},
// 			function (error) {
// 				console.log('error', error);
// 			}
// 		);
// 	},
// 	function (error) {
// 		console.log('error', error);
// 	}
// );
