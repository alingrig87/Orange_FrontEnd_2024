const fructe = [
	'mar',
	'para',
	'lamaie',
	'capsuna',
	'cireasa',
	'visina',
	'casa',
];
// const primulFruct = fructe[0];
// const alDoileaFruct = fructe[1];

// const [primulFruct, alDoileaFruct] = fructe;
// console.log(primulFruct, alDoileaFruct);

// const [primulFruct, , alTreileaFruct] = fructe;
// console.log(primulFruct, alTreileaFruct);

const [primulFruct, alDoileaFruct, ...restulDeFructe] = fructe;

console.log(restulDeFructe);

// Destructuring objects
const produs = {
	nume: 'Bere ursus',
	pret: 5,
	urlImagine:
		'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVgwSNOMkY77aHBmHEylwtv_MER2FzAjIJPDa0ZzlMqS2X8qpT36C6xDHTOmMZIL9EA0rh7iE-h-w8hKzDhJRAupuoMp7c6WvyqWMvRzNv9s7mVpE9YQeM',
};

// const nume = produs.nume;
// const pret = produs.pret;
// const urlImagine = produs.urlImagine;

// const creareCardProdus = (produs) => {
// 	const { nume, pret, urlImagine } = produs;
// 	return `
//       <div class="card">
//          <h1>${nume}</h1>
//          <img src=${urlImagine} />
//          <p>${pret}</p>
//       </div>
//    `;
// };

const creareCardProdus = ({ nume, pret, urlImagine }) =>
	`
      <div class="card">
         <h1>${nume}</h1>
         <img src=${urlImagine} />
         <p>${pret} lei</p>
      </div>
   `;

document.getElementById('container').innerHTML = creareCardProdus(produs);
