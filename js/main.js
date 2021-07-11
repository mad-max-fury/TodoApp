const themeToggle = document.querySelector(".header__btn");
const todos = [];
const todosList = document.querySelector(".todo__list");
const inputField = document.querySelector(".todo__create");
const count = document.querySelector(".todo__count");
const allBtn = document.querySelector(".all");
const activeBtn = document.querySelector(".active");
const completeBtn = document.querySelector(".completed");
const clearBtn = document.querySelector(".clear");
const todoBtn = document.getElementById('todobtn2')

let todoCount = 0;
let todoStorageNumber = 0;

// Light And Dark Theme

document.addEventListener("DOMContentLoaded", () => {
	document.documentElement.setAttribute("data-theme", "dark");

});

themeToggle.addEventListener("click", () => {
	if (document.documentElement.dataset.theme === "dark") {
		lightTheme();
	} else {
		darkTheme();
	}
});

function lightTheme() {
	document.documentElement.dataset.theme = "light";

	themeToggle.src = "images/icon-moon.svg";
}
function darkTheme() {
	document.documentElement.dataset.theme = "dark";

	themeToggle.src = "images/icon-sun.svg";
}

// End Light And Dark Theme

// Add Todo
inputField.addEventListener("keyup", addTodo);
todoBtn.addEventListener('click', addTodo2)

function addTodo(e) {
	if (e.keyCode === 13 && inputField.value != "") {
		const todoLi = document.createElement("li");
		todoLi.setAttribute('draggable', true)
		todoLi.className = "todo__item";
		todoLi.innerHTML = `
		<span class="todo__checkbox">
			<img src="images/icon-check.svg" alt="" class="todo__check"/>
		</span>
		<p class="todo__text">${inputField.value}</p>
		<svg class="todo__close" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494c6b"fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>`;
		todosList.appendChild(todoLi);
		inputField.value = null;

		const checkbox = todoLi.querySelector(".todo__checkbox");
		finishTodo(checkbox);

		const close = todoLi.querySelector(".todo__close");
		deleteTodo(close);

		todoCount++;
		updateItemCount();
	}
}
function addTodo2() {
	if (inputField.value == '') {
		return;

	} else {
		const todoLi = document.createElement("li");
		todoLi.setAttribute('draggable', true)
		todoLi.className = "todo__item";
		todoLi.innerHTML = `
		<span class="todo__checkbox">
			<img src="images/icon-check.svg" alt="" class="todo__check"/>
		</span>
		<p class="todo__text">${inputField.value}</p>
		<svg class="todo__close" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494c6b"fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>`;
		todosList.appendChild(todoLi);
		inputField.value = null;

		const checkbox = todoLi.querySelector(".todo__checkbox");
		finishTodo(checkbox);

		const close = todoLi.querySelector(".todo__close");
		deleteTodo(close);

		todoCount++;
		updateItemCount();
	}


}

function finishTodo(cb, li) {
	cb.addEventListener("click", () => {
		cb.parentElement.classList.toggle("checked");

		if (cb.parentElement.classList.contains("checked")) {
			todoCount--;
			updateItemCount();
		} else {
			todoCount++;
			updateItemCount();
		}
	});
}

function deleteTodo(close) {
	close.addEventListener("click", () => {
		close.parentElement.remove();

		if (close.parentElement.classList.contains("checked")) {
			updateItemCount();
		} else {
			todoCount--;
			updateItemCount();
		}
	});
}

function updateItemCount() {
	count.textContent = `${todoCount} items left`;
}

function updateActiveClass(e) {
	const selectedBtn = document.querySelector(".selected");
	selectedBtn.classList.remove("selected");
	e.target.classList.add("selected");
}

completeBtn.addEventListener("click", (e) => {
	const todos = document.querySelectorAll(".todo__item");
	todos.forEach((todo) => {
		if (todo.classList.contains("checked")) {
			todo.style.display = "";
		} else {
			todo.style.display = "none";
		}
	});

	updateActiveClass(e);
});

activeBtn.addEventListener("click", (e) => {
	const todos = document.querySelectorAll(".todo__item");
	todos.forEach((todo) => {
		if (todo.classList.contains("checked")) {
			todo.style.display = "none";
		} else {
			todo.style.display = "";
		}
	});

	updateActiveClass(e);
});

allBtn.addEventListener("click", (e) => {
	const todos = document.querySelectorAll(".todo__item");
	todos.forEach((todo) => {
		todo.style.display = "";
	});

	updateActiveClass(e);
});

clearBtn.addEventListener("click", () => {
	const todos = document.querySelectorAll(".todo__item");
	todos.forEach((todo) => {
		if (todo.classList.contains("checked")) {
			todo.remove();
		}
	});
});



