const container = document.getElementById('container');

function afiseazaCerculeteDeLa1La100() {
	let i = 1;
	container.innerHTML = '';
	while (i <= 100) {
		console.log(i);
		// container.innerHTML = container.innerHTML + ' ' + i;
		container.innerHTML += '<div class="circle">' + i + '</div>';
		i++;
	}

	console.log(container);
	console.log(container.innerHTML);
}
