const numere = [1, 2, 5, 6, 7];

// let suma = 0;
// for (let i = 0; i <= numere.length - 1; i++) {
// 	suma += numere[i];
// }

const suma = numere.reduce((accumulator, numar) => accumulator + numar, 0);

console.log(suma);

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

const pretTotal = produse.reduce(
	(accumulator, produs) => accumulator + produs.pret,
	0
);

console.log(pretTotal);

const produseInCos = [
	{ nume: 'lapte', pret: 10, categorie: 'Lactate', cantitate: 2 },
	{ nume: 'paine', pret: 5, categorie: 'Panificație', cantitate: 3 },
	{ nume: 'mere', pret: 7, categorie: 'Fructe', cantitate: 5 },
	{ nume: 'ulei', pret: 15, categorie: 'Uleiuri și grăsimi', cantitate: 1 },
	{ nume: 'branza', pret: 35, categorie: 'Lactate', cantitate: 2 },
];

const voucher = 10;

const pretTotal2 = produseInCos.reduce(
	(total, produs) => total + produs.pret * produs.cantitate,
	-voucher
);

console.log(pretTotal2);
