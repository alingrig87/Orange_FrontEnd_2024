// if
// if(conditie) {
//    // cod care se executa daca conditia este adevarata
// }

function checkParkingTicket(isExpired) {
	if (isExpired === true) {
		console.log('Mergeti sa platiti parcarea!');
	}
}

// if else
// if(conditie) {
//    // cod care se executa daca conditia este adevarata
// } else {
//    // cod care se executa daca conditia este falsa
// }
function isParkingFree(isElectric) {
	if (isElectric === true) {
		console.log('Parcarea este gratis');
	} else {
		console.log('Aveti de platit 5 lei pe ora');
	}
}

// if else if else if ... else
function calculateTax(engineCapacity) {
	let tax = 0;
	if (engineCapacity < 1400) {
		tax = 100;
	} else if (engineCapacity >= 1400 && engineCapacity < 2000) {
		tax = 200;
	} else if (engineCapacity >= 2000 && engineCapacity < 3000) {
		tax = 300;
	} else {
		tax = 1000;
	}

	return tax;
}

const tax = calculateTax(2000);
console.log(`Aveti de platit ${tax} lei`);

// Sa se scrie o functie care primeste ca parametru glicemia si intoarce daca pacientul este sanatos, prediabetic sau diabetic.
// 0 - 99 - sanatos
// 100 - 110 - preadiabetic
// > 110 - diabetic
function checkDiabetesStatus(bloodSugar) {
	if (bloodSugar <= 99) {
		return 'sanatos';
	} else if (bloodSugar > 100 && bloodSugar <= 110) {
		return 'prediabet';
	} else {
		return 'diabet';
	}
}

const status = checkDiabetesStatus(77);
console.log(status);
