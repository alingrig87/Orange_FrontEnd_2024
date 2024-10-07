const numere = [1, 4, 5, 6];

console.log(numere.join(''));

const numereLaPatrat = numere.map((numar) => numar * numar);
console.log(numereLaPatrat);
console.log(numere);

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
