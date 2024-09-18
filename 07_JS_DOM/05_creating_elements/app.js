function createLiTask() {
	const newTaskLi = document.createElement('li');
	newTaskLi.classList.add('collection-item');

	const taskTitle = document.querySelector('#task').value;
	newTaskLi.innerText = taskTitle;

	const deleteTaskBtn = document.createElement('a');
	deleteTaskBtn.href = '#';
	deleteTaskBtn.classList.add('delete-item');
	deleteTaskBtn.classList.add('secondary-content');

	deleteTaskBtn.innerHTML = '<i class="fa fa-remove"></i>';

	newTaskLi.appendChild(deleteTaskBtn);

	return newTaskLi;
}

function addNewTask() {
	const li = createLiTask();
	const ul = document.querySelector('ul.collection');
	ul.appendChild(li);
}

createLiTask();
