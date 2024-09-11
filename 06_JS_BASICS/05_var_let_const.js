// var
// scop global si scop de global
// var c; // hoisting
var a = 10; // scop global

function test() {
	// var b;
	console.log(b); // undefined
	var b = 15; // scop functie
	console.log(a);
}
console.log(c);

// console.log(b);
test();
var a = 20; // cu var putem sa redeclaram
var c = 30;

// let
// scop global, scop functie, scop block
// console.log(x); - error
let x = 10; // scop global

function testLet() {
	let x = 20;
	let y = 20;
	if (y == 20) {
		let x = 30;
		let z = 15; // scop block
	}
	// console.log(z); - error
}

// console.log(y);

// const - functioneaza identic cu let la nivel de scop
const n = 10;
// n = 15; // nu este permise atribuirea multipla

const persoana = {
	nume: 'Costel',
	varsta: 30,
};

persoana.nume = Daniel;
