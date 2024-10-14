// slice - returneaza o portiune dintr-un array, fara a modifica array-ul original
const fructe = ['mere', 'pere', 'struguri', 'prune', 'piersici'];
const sliced = fructe.slice(1, 4);
console.log(sliced);

const sliced2 = fructe.slice(2);
console.log(sliced2);

const CNP = '1991212210089';
const year = CNP.substring(1, 3);
console.log(year);

// splice - modifica array-ul original prin adaugarea sau eliminarea unor elemente
const persoane = ['Costel', 'Daniel', 'Mihaela', 'Tudor', 'Andreea'];

// incepand cu indexul 2 se sterg 2 elemente
persoane.splice(2, 2);
// // incepand cu indexul 2, nu se sterge nimic si se adauga Cristi si Marian
persoane.splice(2, 0, 'Cristi', 'Marian');
// // incepand cu indexul 2, se sterg 2 elemente si se adauga Bogdan si Vasile
persoane.splice(2, 2, 'Bogdan', 'Vasile');
console.log(persoane);
