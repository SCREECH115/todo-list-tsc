import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks-helper.js";
import { render as renderCategories } from "./helpers/render-categories-helper.js";
import { TaskClass } from "./classes/task.js";
const taskNameInputEl = document.querySelector("#name");
const tasksContainerEl = document.querySelector(".tasks");
const addBtnEl = document.querySelector("button");
const categoriesContainerEl = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,
    Category.SOCIAL,
];
const tasks = [
    new Task("Wyrzucić śmieci", false, Category.HOBBY),
    new Task("Pójść na siłownię", false, Category.GYM),
    new Task("Nakarmić koty", false, Category.WORK),
    new Task("Wyrzucić śmieci", false),
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addBtnEl.addEventListener("click", (event) => {
    event.preventDefault();
    const newTask = new Task(taskNameInputEl.value, false, selectedCategory);
    addTask(newTask);
    newTask.logCreationDate("!!!");
    renderTasks(tasks, tasksContainerEl);
});
const task = ["Kupić jedzenie", Category.GENERAL, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];
renderCategories(categories, categoriesContainerEl, selectedCategory, updateSelectedCategory);
renderTasks(tasks, tasksContainerEl);
const taskClassInstance = new TaskClass("Constructor task", false, Category.SOCIAL);
console.log(taskClassInstance.category);
