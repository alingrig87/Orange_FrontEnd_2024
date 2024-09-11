const inputGreutate = document.getElementById('weight');
const inputInaltime = document.getElementById('height');
const paragrafPentruRezultat = document.getElementById('result');

function afiseazaRezultat() {
	const greutate = Number(inputGreutate.value);
	const inaltime = Number(inputInaltime.value);

	const imc = calculeazaIMC(inaltime, greutate);

	let categorie;
	let mesaj;

	if (imc < 18.5) {
		categorie = 'subponderal';
		mesaj =
			'Risc pentru sănătate: ridicat Această valoare indică riscuri pentru sănătatea ta, este mult prea mică pentru o sănătate optimă.';
	} else if (imc >= 18.5 && imc < 25) {
		categorie = 'normal';
		mesaj = 'Risc pentru sănătate: minim/scăzut';
	} else if (imc >= 25 && imc < 30) {
		categorie = 'supraponderal';
		mesaj = 'Risc pentru sănătate: scăzut/moderat';
	} else {
		categorie = 'obez';
		mesaj =
			'Risc pentru sănătate: moderat/ridicat Acesta e un semn de avertisment: schimbă-ți dieta acum!';
	}

	paragrafPentruRezultat.innerHTML = `IMC: ${imc.toFixed(
		2
	)} <br> Categorie: ${categorie} <br> ${mesaj}`;
}

function calculeazaIMC(inaltime, greutate) {
	return greutate / (inaltime * inaltime);
}
