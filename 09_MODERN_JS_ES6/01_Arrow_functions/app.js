// function add(a,b) {
//    return a + b;
// }

// const add = (a, b) => {
// 	return a + b;
// };

const add = (a, b) => a + b;
const square = (a) => a * a;

// const btn = document.getElementById('btn');
// btn.addEventListener('click', showRandomNumber);

// function showRandomNumber() {
// 	console.log(Math.floor(Math.random() * 6 + 1));
// }

const rollDice = () => {
	return Math.floor(Math.random() * 6) + 1;
};

const count66 = (noOfGames) => {
	let count = 0;
	for (let i = 1; i <= noOfGames; i++) {
		const value1 = rollDice();
		const value2 = rollDice();
		if (value1 === 6 && value2 === 6) {
			count++;
		}
	}
	console.log(`Din ${noOfGames} incercari s-a dat 6 6 de ${count} ori`);
};

document
	.getElementById('btn')
	.addEventListener('click', () => count66(3600000));
