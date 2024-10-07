// const salut = (nume) => {
// 	if (nume === undefined) {
// 		console.log('Hello, guest!');
// 	} else {
// 		console.log(`Hello, ${nume}!`);
// 	}
// };

// salut();
// salut('Costel');

const salut = (nume = 'guest') => console.log(`Hello, ${nume}!`);

salut();
salut('Daniel');
