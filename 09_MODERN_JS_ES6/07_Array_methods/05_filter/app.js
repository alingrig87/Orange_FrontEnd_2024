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

const produseIntre5si8Lei = produse.filter(
	(produs) => produs.pret > 4 && produs.pret < 8
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

document.getElementById('filtru').addEventListener('change', (e) => {
	if (e.target.checked === true) {
		document.getElementById('container').innerHTML = produse
			.filter((produs) => produs.pret >= 5 && produs.pret <= 7)
			.map(
				(produs) => `
            <div class="card">
               <h1>${produs.nume}</h1>
               <p>${produs.pret}</p>
            </div>
            `
			)
			.join('');
	} else {
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
	}
});
