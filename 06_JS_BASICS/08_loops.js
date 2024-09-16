function numaraDeLa1La100() {
	let i = 1;
	while (i <= 100) {
		console.log(i);
		i++;
	}
}

numaraDeLa1La100();

function numaraDeLa1La100CuFor() {
	for (let i = 1; i <= 100; i++) {
		console.log(i);
	}
}

numaraDeLa1La100CuFor();

function afiseazaElementeDinArray(numbers) {
	const numarElementeArray = numbers.length;
	for (let i = 0; i <= numarElementeArray - 1; i++) {
		console.log('La pozitia ' + i + ' se afla valoarea ' + numbers[i]);
	}
}

afiseazaElementeDinArray([1, 4, 5]);
console.log('----------------------------------');
afiseazaElementeDinArray([3, 8, 2, 1]);

function cautaElementulCelMaiMic(numbers) {
	let min = numbers[0];
	for (let i = 1; i <= numbers.length - 1; i++) {
		if (numbers[i] < min) {
			min = numbers[i];
		}
	}
	console.log('Cel mai mic elemenent este: ' + min);
}

cautaElementulCelMaiMic([2, 4, 1, 0, -55, 8, -100, 12]);

function calculeazaSumaElementelor(numbers) {
	let sum = 0;
	for (let i = 0; i <= numbers.length - 1; i++) {
		sum = sum + numbers[i];
	}
	console.log('Suma este ' + sum);
}

calculeazaSumaElementelor([5, 8, 12, 15, 17]);
