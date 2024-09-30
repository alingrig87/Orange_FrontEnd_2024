const addTaskBtn = document.querySelector('#add-task');
addTaskBtn.addEventListener('click', addNewTask);

const taskList = document.querySelector('.collection');
const taskNameInput = document.querySelector('#task');

taskNameInput.addEventListener('keydown', function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		addNewTask();
	}
});

function addNewTask() {
	const taskName = taskNameInput.value;
	taskList.innerHTML += `
      <li class="collection-item">
         ${taskName}
         <a href="#" class="delete-item secondary-content">
         <i class="fa fa-remove"></i>
         </a>
      </li>
   `;
}

taskList.addEventListener('click', handleActions);

function handleActions(e) {
	if (e.target.classList.contains('collection-item')) {
		e.target.classList.toggle('task-completed');
	} else if (e.target.classList.contains('fa-remove')) {
		e.target.parentElement.parentElement.remove();
	}
}
