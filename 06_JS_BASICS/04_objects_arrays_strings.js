// Objects
var persoana = {
	nume: 'Maria',
	varsta: 30,
	arePermisDeConducere: false,
};

console.log(persoana.nume);
console.log(persoana.varsta);
console.log(persoana.arePermisDeConducere);

var masina = {
	marca: 'Audi',
	motor: 3000,
	esteHybrid: false,
	culoare: 'red',
};

var laptop = {
	diagonala: '15 inch',
	cpu: 'ryzen 5600x',
	gpu: 'nvidia geforce rtx 3080',
};

// <input type="text" id="numar" />
var input = {
	type: 'text',
	id: 'numar',
};

// daca intre timp se adauga o valoare(de exemplu 20) in input, proprietate value va avea acea valoare

var input = {
	type: 'text',
	id: 'numar',
	value: 20,
};

// Array-uri -
var numere = [3, 5, 6, 2, 1, 10]; // indecsi de la 0 --> length-1
console.log('Lungimea array-ului este', numere.length);

console.log('Ultimul element este: ', numere[numere.length - 1]);

// construiti un array de fructe sau un array de marci de masini sau un array de zile ale saptamanii
var masini = ['BMW', 'HONDA', 'VOLVO'];
var fructe = [
	'mar',
	'portocala',
	'rodie',
	'banana',
	'piersica',
	'strugure',
	'nectarina',
];

// Metode manipulare array-uri

// 1. push - adaugam un element la sfarsitul unui array
fructe.push('cireasa');
console.log('Ultimul element este:', fructe[fructe.length - 1]);

// 2.pop - elimina ultimul element din lista si il returneaza
var ultimaMasinaDinLista = masini.pop();
console.log(ultimaMasinaDinLista);
console.log(masini);

// 3. unshift - adauga un element la inceputul unui array
fructe.unshift('capsuna');
console.log('primul element este acum:', fructe[0]);

// 4. shift - elimina primul element din lista si-l returneaza
var primaMasinaDinLista = masini.shift();
console.log(primaMasinaDinLista);
console.log(masini);

// 5. join - combina elementele dintr-un array intr-un string folosind un delimitator/separator
var stringFructe = fructe.join(' -> ');
console.log(stringFructe);

// String-uri - siruri de caractere
var nume = 'Ana';
var fructeleAnei = 'mere';
var text = `${nume} are ${fructeleAnei}`;

console.log(text[0]); //A
console.log(text[text.length - 1]); //e

// charAt
console.log(text.charAt(0)); //A
// includes - verifica daca un string contine o secventa de caractere
console.log(text.includes('mere'));
console.log(text.includes('pere'));
// startsWith
console.log(text.startsWith('A'));
// endsWith
console.log(text.endsWith('mere'));
// substring
var numeExtras = text.substring(0, 3);
console.log(numeExtras);
