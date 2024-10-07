const numere = [1, 3, 4, 5];

// nu se face copie/clona - se face doar un alias
// const copie = numere;

// copie[0] = 18;
// console.log(numere);

const copie = [...numere];
copie[0] = 18;

console.log(numere, copie);

const fructe = ['mere', 'pere', 'struguri'];
const legume = ['rosii', 'ceapa', 'castraveti'];
const verdeturi = ['leustean', 'marar'];

const cumparaturi = [...fructe, ...legume, ...verdeturi];
console.log(cumparaturi);

const produs = {
	nume: 'Bere ursus',
	pret: 5,
	urlImagine:
		'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVgwSNOMkY77aHBmHEylwtv_MER2FzAjIJPDa0ZzlMqS2X8qpT36C6xDHTOmMZIL9EA0rh7iE-h-w8hKzDhJRAupuoMp7c6WvyqWMvRzNv9s7mVpE9YQeM',
};

const copieProdus = { ...produs };
const produsCuStoc = { stoc: 50, ...produs, nume: 'Bere ursus 0.5L' };

console.log(produsCuStoc);

const persoana = { nume: 'Ion', varsta: 25 };
const job = { profesie: 'Sofer', salariu: 2500 };

const persoanaCuJob = { ...persoana, ...job };
console.log(persoanaCuJob);
