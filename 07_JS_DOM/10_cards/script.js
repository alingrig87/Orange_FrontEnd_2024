const container = document.getElementById('container');
const spatiuStele = document.getElementsByClassName('spatiuStele');

const produse = [
	{
		poza: 'img/shoes.png',
		nume: 'Shoes',
		descriere: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		pret: '$100.00',
		stele: 4,
		cumpara: 'Buy Now',
		culoare: 'blue',
	},
	{
		poza: 'img/earphone.webp',
		nume: 'Earphone',
		descriere: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		pret: '$40.00',
		stele: 3,
		cumpara: 'Buy Now',
		culoare: 'purple',
	},
	{
		poza: 'img/watch.jpg',
		nume: 'Watch',
		descriere: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		pret: '$70.84',
		stele: 4,
		cumpara: 'Buy Now',
		culoare: 'black',
	},
	{
		poza: 'img/iphone.jfif',
		nume: 'Mobile',
		descriere: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		pret: '$1000.84',
		stele: 6,
		cumpara: 'Buy Now',
		culoare: 'yellow',
	},
];

function coloreazaStelute(stele) {
	let steleHtml = '';
	for (let i = 0; i < 5; i++) {
		if (i < stele) {
			steleHtml += `<span class="stea steaPlina" data-index=${i}>⭐</span>`;
		} else {
			steleHtml += `<span class="stea steaGoala" data-index=${i}>⭐</span>`;
		}
	}
	return steleHtml;
}

function adaugaProdusInContainer(produs) {
	container.innerHTML += `
    <div class="product-card">
        <img src=${produs.poza} />
        <h3 class="nume">
            ${produs.nume}
        </h3>
        <p class="descriere">
            ${produs.descriere}
        </p>
        <p class="pret">
            ${produs.pret}
        </p>
        <div class ="spatiuStele">
            ${coloreazaStelute(produs.stele)}
        </div>
        <p class="cumpara ${produs.culoare}">
            ${produs.cumpara}
        </p>
    </div>
    `;
}

function afiseazaProduse(produse) {
	for (let i = 0; i <= produse.length - 1; i++) {
		adaugaProdusInContainer(produse[i]);
	}
}

afiseazaProduse(produse);

container.addEventListener('click', handleReviewStars);

function handleReviewStars(e) {
	if (e.target.classList.contains('stea')) {
		const parent = e.target.parentElement;
		const stars = parent.querySelectorAll('.stea');
		const currentStartIndex = Number(e.target.getAttribute('data-index'));
		console.log(currentStartIndex);
		for (let i = 0; i <= stars.length - 1; i++) {
			if (i <= currentStartIndex) {
				stars[i].classList.add('steaPlina');
				stars[i].classList.remove('steaGoala');
			} else {
				stars[i].classList.remove('steaPlina');
				stars[i].classList.add('steaGoala');
			}
		}
	}
}
