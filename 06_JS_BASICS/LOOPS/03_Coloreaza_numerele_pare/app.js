const startInput = document.getElementById('numar1');
const endInput = document.getElementById('numar2');
const paragrafRezultat = document.getElementById('rezultat');

function coloreazaNumerelePare() {
	const numar1 = Number(startInput.value);
	const numar2 = Number(endInput.value);

	paragrafRezultat.innerHTML = '';

	for (let i = numar1; i <= numar2; i++) {
		if (i % 2 === 0) {
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
