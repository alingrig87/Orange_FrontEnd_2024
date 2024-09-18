const allInputs = document.getElementsByTagName('input');
for (let i = 0; i <= allInputs.length - 1; i++) {
	allInputs[i].style.backgroundColor = 'lightblue';
	// allInputs[i].classList.remove('btn');
}

const allButtons = document.getElementsByClassName('btn');
console.log(allButtons);

const listItems = document.querySelectorAll('.collection-item');

for (let i = 0; i <= listItems.length - 1; i++) {
	if (i % 2 == 0) {
		listItems[i].style.backgroundColor = 'lightgray';
	}
}
