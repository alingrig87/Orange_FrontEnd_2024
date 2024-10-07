const sum = (arr) => {
	let sum = 0;
	for (let i = 0; i <= arr.length - 1; i++) {
		sum = sum + arr[i];
	}

	return sum;
};

console.log(sum([1, 2, 3]));
console.log(sum([1, 2, 3, 4, 5, 12]));
console.log(sum([3, 4, 5, 6]));

const sumWithRestParams = (...arr) => {
	let sum = 0;
	for (let i = 0; i <= arr.length - 1; i++) {
		sum = sum + arr[i];
	}

	return sum;
};

console.log(sumWithRestParams(1, 2, 8, 9, 10));
