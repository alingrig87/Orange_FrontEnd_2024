const startInput = document.getElementById('numar1');
const endInput = document.getElementById('numar2');
const paragrafRezultat = document.getElementById('rezultat');

function fizzBuzz() {
	const numar1 = Number(startInput.value);
	const numar2 = Number(endInput.value);

	paragrafRezultat.innerHTML = '';

	for (let i = numar1; i <= numar2; i++) {
		if (i % 5 === 0 && i % 3 === 0) {
			paragrafRezultat.innerHTML += `
         <div class="circle blue">
            ${i}
         </div>
      `;
		} else if (i % 5 === 0) {
			paragrafRezultat.innerHTML += `
         <div class="circle green">
            ${i}
         </div>
      `;
		} else if (i % 3 === 0) {
			paragrafRezultat.innerHTML += `
         <div class="circle red">
            ${i}
         </div>
      `;
		} else {
			paragrafRezultat.innerHTML += `
         <div class="circle black">
            ${i}
         </div>
      `;
		}
	}
}
