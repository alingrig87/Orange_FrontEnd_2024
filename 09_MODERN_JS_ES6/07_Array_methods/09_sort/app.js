const fructe = ['mere', 'pere', 'struguri', 'prune', 'piersici'];

fructe.sort();
console.log(fructe);

const numere = [1, 12, 15, 2, 8, 9];
// numere.sort((a, b) => {
// 	if (a < b) {
// 		return -1;
// 	} else if (a === b) {
// 		return 0;
// 	} else {
// 		return 1;
// 	}
// });

numere.sort((a, b) => a - b);
console.log(numere);

const text =
	'JavaScript is a high-level programming language that follows the ECMAScript standard. It was originally designed as a scripting language for websites but became widely adopted as a general-purpose programming language, and is currently the most popular programming language in use.[1] JavaScript is usually found running in a web browser as interactive or automated content, ranging from popup messages and live clocks to large web applications. JavaScript is also commonly used in server-side programming through platforms like Node.js,[2] or "embedded" in non-JavaScript applications where the base programming language lacks the high-level functionality that JavaScript offers';

const cuvinte = text.split(' ');

console.log(cuvinte);
cuvinte.sort((a, b) => b.length - a.length);
console.log(cuvinte);

const numere2 = [2, 3, 8, 9, 7, 1, 4, 6, 5];
numere2.sort((a, b) => a - b);

console.log(numere2);

console.log(Math.random() - 0.5);
// shuffle
numere2.sort((a, b) => Math.random() - 0.5);
console.log(numere2);

const produse = [
	{
		nume: 'Pâine integrală',
		pret: 5,
		dataAdaugarii: new Date('2024-12-12T10:30:00'),
	},
	{ nume: 'Lapte', pret: 6, dataAdaugarii: new Date('2024-04-01T11:30:00') },
	{
		nume: 'Ouă (carton 10 buc)',
		pret: 10,
		dataAdaugarii: new Date('2024-01-01T10:30:00'),
	},
	{ nume: 'Mere', pret: 4, dataAdaugarii: new Date('2024-05-01T09:30:00') },
	{
		nume: 'Carne de pui (500g)',
		pret: 15,
		dataAdaugarii: new Date('2024-06-01T10:30:00'),
	},
	{
		nume: 'Paste integrale',
		pret: 7,
		dataAdaugarii: new Date('2024-07-02T10:30:00'),
	},
	{
		nume: 'Orez integral',
		pret: 6,
		dataAdaugarii: new Date('2024-01-01T11:30:00'),
	},
	{
		nume: 'Iaurt natural',
		pret: 6,
		dataAdaugarii: new Date('2023-01-01T12:30:00'),
	},
	{
		nume: 'Cartofi (kg)',
		pret: 3,
		dataAdaugarii: new Date('2024-01-30T10:30:00'),
	},
	{
		nume: 'Brânză telemea',
		pret: 12,
		dataAdaugarii: new Date('2024-01-01T10:30:00'),
	},
];

// produse.sort((produs1, produs2) => produs1.nume.localeCompare(produs2.nume));
// produse.sort((produs1, produs2) => produs1.pret - produs2.pret);
// console.log(produse);

document.getElementById('container').innerHTML = produse
	.map(
		(produs) => `
   <div class="card">
      <h1>${produs.nume}</h1>
      <p>${produs.pret}</p>
   </div>
   `
	)
	.join('');

const sortOptionsDropDown = document.getElementById('sort-options');
sortOptionsDropDown.addEventListener('change', sortProducts);

function sortProducts(e) {
	const sortOption = e.target.value;
	let sortedProducts = [...produse];

	if (sortOption === 'noi') {
		sortedProducts.sort(
			(produs1, produs2) => produs2.dataAdaugarii - produs1.dataAdaugarii
		);
	} else if (sortOption === 'priceAsc') {
		sortedProducts.sort((product1, product2) =>
			product1.pret === product2.pret
				? product1.nume.localeCompare(product2.nume)
				: product1.pret - product2.pret
		);
	} else if (sortOption === 'priceDesc') {
		sortedProducts.sort((product1, product2) =>
			product1.pret === product2.pret
				? product1.nume.localeCompare(product2.nume)
				: product2.pret - product1.pret
		);
	} else if (sortOption === 'nameAsc') {
		sortedProducts.sort((product1, product2) =>
			product1.nume.localeCompare(product2.nume)
		);
	} else if (sortOption === 'nameDesc') {
		sortedProducts.sort((product1, product2) =>
			product2.nume.localeCompare(product1.nume)
		);
	}

	document.getElementById('container').innerHTML = sortedProducts
		.map(
			(produs) => `
   <div class="card">
      <h1>${produs.nume}</h1>
      <p>${produs.pret}</p>
   </div>
   `
		)
		.join('');
}
