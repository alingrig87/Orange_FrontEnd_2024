const produs = {
	poza: 'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/bb/3d/779d3ae124f8087a50d5e25fb8ff.jpg',
	nume: 'Bere alba fara alcool',
	pret: 12.99,
};

console.log(produs);

const container = document.getElementById('container');

function adaugaProdusInContainer(produs) {
	container.innerHTML += `
      <div class="product-card">
         <img src=${produs.poza} />
         <h3>
            ${produs.nume}
         </h3>
         <p>
            ${produs.pret}
         </p>
      </div>
   `;
}

adaugaProdusInContainer(produs);

const produse = [
	{
		poza: 'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/bb/3d/779d3ae124f8087a50d5e25fb8ff.jpg',
		nume: 'Bere alba fara alcool',
		pret: 12.99,
	},
	{
		poza: 'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/bb/3d/779d3ae124f8087a50d5e25fb8ff.jpg',
		nume: 'Bere alba fara alcool',
		pret: 12.99,
	},
	{
		poza: 'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/bb/3d/779d3ae124f8087a50d5e25fb8ff.jpg',
		nume: 'Bere alba fara alcool',
		pret: 12.99,
	},
	{
		poza: 'https://cdn.freshful.ro/media/cache/sylius_shop_product_thumbnail/bb/3d/779d3ae124f8087a50d5e25fb8ff.jpg',
		nume: 'Bere alba fara alcool',
		pret: 12.99,
	},
];

function afiseazaToateProdusele(produse) {
	for (let i = 0; i <= produse.length - 1; i++) {
		adaugaProdusInContainer(produse[i]);
	}
}

afiseazaToateProdusele(produse);
