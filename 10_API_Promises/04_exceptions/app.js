const container = document.querySelector('.container');

fetch('http://api.github.com/userss')
	.then((response) => {
		if (response.ok === false) {
			throw new Error(`HTTP Error! Status: ${response.status}`);
		}
	})
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
	)
	.catch(
		(error) =>
			(container.innerHTML = `<img src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg" />`)
	);

function platestePizza(aiBani) {
	if (aiBani) {
		console.log('Pizza a fost platita');
	} else {
		throw new Error('Fonduri insuficiente');
	}
}

try {
	const aiBani = Math.random() < 0.5;
	platestePizza(aiBani);
} catch (error) {
	console.log(error);
}
