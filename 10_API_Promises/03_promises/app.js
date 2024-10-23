let aFostPizzaLivrata = Math.random() < 0.5 ? true : false;

function comandaPizza() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (aFostPizzaLivrata) {
				resolve('pizza a fost livrata');
			} else {
				reject('pizza nu a fost livrata');
			}
		}, 2000);
	});
}

comandaPizza().then((result) => console.log(result));

const container = document.querySelector('.container');

fetch('http://api.github.com/users')
	.then((response) => response.json())
	.then(
		(users) =>
			(container.innerHTML = users
				.map(
					(user) =>
						`
            <div class="card">
               <h3>${user.login}</h3>
               <img src=${user.avatar_url} />
            </div>   
         `
				)
				.join(''))
	);
