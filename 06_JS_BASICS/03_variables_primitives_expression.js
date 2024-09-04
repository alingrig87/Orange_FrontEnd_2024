// var, let, const
var a;
var b = 10;

console.log(a, b);
console.log('a = ', a);
console.log('b = ', b);

// Caractere permise - a-z, A-Z, _, $, 0-9
// camelCase
var userName;
var numeUtilizator;
var numberOfLikes;
var postTitle;
var password;
var emailAddress;
var user1;
var user2;

var firstName = 'Alin';

// nume invalide pentru variabile
// var 1nume;
// var nume-utilizator;
// var function;
// var if;
// var for;

// Primitive

// String - siruri de caractere
var nume = 'Maria';
var mesaj = 'Salut';
var varsta = 30;
var text = `Numele meu este ${nume} si am ${varsta} ani`; // templateString
var text2 = 'Numele meu este ' + nume + ' si am ' + varsta + ' ani';

console.log(text2);

// Number
var intreg = 44;
var zecimal = 3.14;
var notatieExponentiala = 2e4;

console.log(intreg, zecimal, notatieExponentiala);
// valori speciale
// Infinity, -Infinity
console.log(1 / 0);
console.log(-1 / 0);
// NaN
var a = Number('x');
console.log(a);
console.log(0 / 0);
console.log(isNaN(12));
console.log(isNaN('abc'));

// Boolean
var esteCeata = true;
var amBani = false;
var comparatie = 3 < 2;
console.log(esteCeata, amBani, comparatie);

// Undefined
var ceva;
console.log(ceva);

// functiile care nu au un return explicit returneaza undefined
function f() {}
var rezultat = f();
console.log(rezultat);

// Null
var altceva = null;

// Operatori

// Adunare
var suma = 2 + 8;
console.log(suma);
console.log('10' + 2);
console.log(2 + 2 + '10');
console.log(2 + 2 + '10' + 3 + 3);
console.log(2 + 2 + Number('10') + 3 + 3);

// Scadere
var diferenta = 10 - 2;
console.log(diferenta);

// Inmultire
var produs = 4 * 5;
console.log(produs);

// Impartire
var cat = 20 / 6;
console.log(cat);

// Modulo(%)
var rest = 20 % 6;
console.log(rest);
var numar = 21;
var estePar = numar % 2 === 0;
console.log(estePar);

// incrementare
var i = 7;
i++; // i = i + 1;
i += 1;
console.log('i = ' + i);

// decrementare
var j = 8;
j--;
j -= 1;
console.log(`j = ${j}`);

// Operatori de atribuire
var numar3 = 10;

var total = 10;
total += 5;

console.log((total *= 4)); // total = total * 4;
