// stabilim jucatorul care incepe
let jucatorulCurent = 'X';

// Initializam tabla de joc - un array cu 9 pozitii goale
let tabla = ['', '', '', '', '', '', '', '', ''];

// Variabila in care stocam daca jocul s-a terminat sau nu
let esteJoculInDesfasurare = true;

// Selectam toate celulele din tabla de joc
const celule = document.querySelectorAll('.cell');
// Selectam elementul care va afisa starea jocului
const afisajStatus = document.querySelector('#status');
// Selectam butonul de resetare a jocului
const butonReset = document.querySelector('#reset');

// Posibilele combinatii castigatoare
const combinatiiCastigatoare = [
	[0, 1, 2], // randul 1
	[3, 4, 5], // randul 2
	[6, 7, 8], // randul 3
	[0, 3, 6], // coloana 1
	[1, 4, 7], // coloana 2
	[2, 5, 8], // coloana 3
	[0, 4, 8], // diagonala principala
	[2, 4, 6], // diagonala secundara
];

// Adaugam ascultator de evenimente pe fiecare celula
celule.forEach((celula) =>
	celula.addEventListener('click', gestioneazaClickPeCelula)
);

function gestioneazaClickPeCelula(e) {
	const celulaApasata = e.target;
	const indexCelula = celulaApasata.getAttribute('data-index');

	if (tabla[indexCelula] !== '' || esteJoculInDesfasurare === false) {
		return;
	}

	// Actualizam tabla de joc la pozitia curent cu simbolul jucatorului (X sau 0)
	tabla[indexCelula] = jucatorulCurent;
	// Afisez simbolul in celula HTML
	celulaApasata.innerHTML = jucatorulCurent;

	verificaCastigator();

	// schimbam jucatorul curent: daca e devine 0 si invers
	if (jucatorulCurent === 'X') {
		jucatorulCurent = '0';
	} else if (jucatorulCurent === '0') {
		jucatorulCurent = 'X';
	}
}

function verificaCastigator() {
	// variabila care va stabili daca exista castigator sau e remiza
	let existaCastigator = false;

	// parcurgem combinatiile castigatoare
	for (let i = 0; i <= combinatiiCastigatoare.length - 1; i++) {
		let combinatieCastigatoare = combinatiiCastigatoare[i];
		const celula1 = tabla[combinatieCastigatoare[0]];
		const celula2 = tabla[combinatieCastigatoare[1]];
		const celula3 = tabla[combinatieCastigatoare[2]];

		// Daca una din celule e goala continua cu urmatoarele combinatii
		if (celula1 === '' || celula2 === '' || celula3 === '') {
			continue;
		}

		// Daca toate celulele sunt identice, avem un castigator
		if (celula1 === celula2 && celula2 === celula3) {
			existaCastigator = true;
			break; // Oprim bucla pentru ca avem un castigator
		}
	}

	if (existaCastigator === true) {
		afisajStatus.innerHTML = `Jucatorul ${jucatorulCurent} a castigat`;
		esteJoculInDesfasurare = false;
		return;
	}

	// daca toate celulele sunt completate, dar nu avem castigator, este remiza
	if (tabla.includes('') === false) {
		afisajStatus.innerHTML = 'Remiza!!';
		esteJoculInDesfasurare = false;
	}
}

butonReset.addEventListener('click', reseteazaJoc);

function reseteazaJoc() {
	// golim tabla de joc
	tabla = ['', '', '', '', '', '', '', '', ''];
	// marcam jocul ca fiind din nou in desfasurare
	esteJoculInDesfasurare = true;
	// jucatorul curent devine X din nou
	jucatorulCurent = 'X';
	// reseteaza status
	afisajStatus.innerHTML = '';

	celule.forEach((celula) => (celula.innerHTML = ''));
}
