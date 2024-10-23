document.addEventListener('DOMContentLoaded', showUsers);
const container = document.getElementById('container');

async function showUsers() {
	try {
		const users = await getUsers();
		showUsersOnContainer(users, container);
	} catch (error) {
		show404Image(container);
	}
}

async function getUsers() {
	const url = 'http://api.github.com/users';
	const response = await fetch(url);
	const users = await response.json();

	return users;
}

function showUsersOnContainer(users, container) {
	container.innerHTML = users.map((user) => fromUserToCard(user)).join('');
}

function fromUserToCard(user) {
	return `
      <div class="card">
         <h2>${user.login}</h2>
         <img width="100px" src=${user.avatar_url} />
      </div>
   `;
}

function show404Image(container) {
	container.innerHTML = `
      <img width="800px" src="https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif" />
   `;
}
