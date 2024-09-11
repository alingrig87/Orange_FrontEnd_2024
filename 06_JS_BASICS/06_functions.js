// functie fara parametri
function sayHello() {
	console.log('Hello world!');
}

sayHello();

// functie cu parametrii
function sayHelloTo(name) {
	console.log('Hello, ' + name + '!');
}
sayHelloTo('Costel');
sayHelloTo('Daniel');
sayHelloTo('Maria');

// functie care returneaza o valoare
function add(a, b) {
	return a + b;
}

const sum1 = add(2, 5);
const sum2 = add(3, 8);

console.log(sum1, sum2);

// scrieti o functie care primeste un numar ca parametru si intoarce true daca numarul este par si false daca numarul este impar
function isEven(number) {
	return number % 2 === 0;
}

function isOdd(number) {
	return number % 2 === 1;
}

console.log(isEven(2), isOdd(2));
