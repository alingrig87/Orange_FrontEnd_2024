const firstLi = document.querySelector('li:first-child');

console.log(firstLi);

const ul = firstLi.parentElement;
console.log(ul);

const firstDeleteButton = document.querySelector('.fa-remove');
// firstDeleteButton.parentElement.parentElement.remove();

const allLiTasks = ul.children;
console.log(allLiTasks);
for (let i = 0; i <= allLiTasks.length - 1; i++) {
	allLiTasks[i].style.backgroundColor = 'lightgray';
}
