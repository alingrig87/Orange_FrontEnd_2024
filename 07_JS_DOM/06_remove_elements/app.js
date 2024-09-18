const deleteButton3 = document.querySelector(
	'.collection > li:nth-child(3) > a > i'
);

function deleteTask() {
	deleteButton3.parentElement.parentElement.remove();
}
