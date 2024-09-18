const addTaskBtn = document.getElementById('add-task');
console.log(addTaskBtn);
console.log(addTaskBtn.type);
console.log(addTaskBtn.value);
console.log(addTaskBtn.className);
addTaskBtn.style.backgroundColor = 'green';

const newTaskInput = document.getElementById('task');
newTaskInput.value = 'Plimba cainele';

// querySelector
// const deleteAllTasksBtn = document.querySelector('.clear-tasks');
const deleteAllTasksBtn = document.querySelector('.card-action a.clear-tasks');
console.log(deleteAllTasksBtn);
deleteAllTasksBtn.classList.remove('black');
deleteAllTasksBtn.style.backgroundColor = 'red';
const firstBtn = document.querySelector('.btn');
console.log(firstBtn);

const main = document.querySelector('#main');
main.style.backgroundColor = 'lightblue';

const firstButton = document.querySelector('.btn');
console.log(firstBtn);
firstButton.style.backgroundColor = 'blue';

const taskTitleH5 = document.querySelector('.card-action #task-title');
taskTitleH5.style.color = 'blue';

const secondListItem = document.querySelector(
	'#main > div.card-action > ul > li:nth-child(2)'
);
console.log(secondListItem);
secondListItem.style.backgroundColor = 'red';
// secondListItem.textContent = 'Alearga';
