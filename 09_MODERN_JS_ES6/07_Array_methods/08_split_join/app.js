// split - imparte un string pe baza unui separator
const s = 'Ana are mere';
const cuvinte = s.split(' ');

console.log(cuvinte);

// join - concateneaza toate elementele dintr-un array intr-un string utilizand un separator;
console.log(cuvinte.join(' '));

const produse = [
	{ nume: 'Pâine integrală', pret: 5 },
	{ nume: 'Lapte', pret: 6 },
	{ nume: 'Ouă (carton 10 buc)', pret: 10 },
	{ nume: 'Mere', pret: 4 },
	{ nume: 'Carne de pui (500g)', pret: 15 },
	{ nume: 'Paste integrale', pret: 7 },
	{ nume: 'Orez integral', pret: 6 },
	{ nume: 'Iaurt natural', pret: 4 },
	{ nume: 'Cartofi (kg)', pret: 3 },
	{ nume: 'Brânză telemea', pret: 12 },
];

console.log(
	produse
		.map(
			(produs) => `
   <div class="card">
      <h1>${produs.nume}</h1>
      <p>${produs.pret}</p>
   </div>
   `
		)
		.join('')
);
